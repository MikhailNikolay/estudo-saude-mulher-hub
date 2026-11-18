(function () {
  const STORAGE_KEY = "hubSaudeMulherProgress_v1";

  /* Siglas do hub — hover / toque longo / toque abre a explicação */
  const GLOSSARY = {
    "POP-Q": "Pelvic Organ Prolapse Quantification — escala ICS de estágios do prolapso (0 a 4).",
    "PERFECT": "Esquema de avaliação do MAP: Power, Endurance, Repetitions, Fast, Every Contraction Timed.",
    "New PERFECT": "Complemento do PERFECT: Elevation, co-contraction e Timed (resposta na tosse).",
    "ENTP": "Eletroestimulação do Nervo Tibial Posterior — tipicamente 10 Hz, 20–30 min.",
    "TMAP": "Treinamento da Musculatura do Assoalho Pélvico.",
    "EPP": "Educação Perineal Progressiva — consciência → controle → funcional.",
    "CVM": "Contração Voluntária Máxima.",
    "IUE": "Incontinência Urinária de Esforço — perda com tosse, salto, peso.",
    "IUU": "Incontinência Urinária de Urgência — urgência / bexiga hiperativa.",
    "IUM": "Incontinência Urinária Mista — esforço + urgência juntos.",
    "POP": "Prolapso de Órgãos Pélvicos — descida de parede/órgão pela vagina.",
    "MAP": "Músculos do Assoalho Pélvico.",
    "ICS": "International Continence Society — sociedade que padroniza termos e condutas.",
    "DIU": "Dispositivo Intrauterino — metálico é CI de eletroestimulação endovaginal.",
    "TVP": "Trombose Venosa Profunda.",
    "PIA": "Pressão Intra-Abdominal.",
    "BH": "Bexiga Hiperativa — urgência ± IUU ± noctúria.",
    "BF": "Biofeedback — feedback visual/sonoro da contração do MAP.",
    "FT": "Fisioterapia.",
    "IF": "Incontinência Fecal — perda involuntária de fezes e/ou gases.",
    "IU": "Incontinência Urinária.",
    "AP": "Assoalho Pélvico (músculo + fáscia + ligamentos).",
    "CI": "Contraindicação.",
    "PO": "Pós-operatório.",
    "PR": "Prostatectomia Radical.",
    "DE": "Disfunção Erétil.",
    "US": "Ultrassom.",
    "Knack": "Contração antecipada do MAP logo antes do esforço (tosse, peso).",
    "Mahony": "Reflexo A3 de Mahony — contrações rápidas do MAP na urgência miccional."
  };

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function markModuleDone(id) {
    if (!id) return;
    const data = loadProgress();
    data[id] = { done: true, at: new Date().toISOString() };
    saveProgress(data);
    updateHomeProgress();
    const btn = document.querySelector("[data-mark-done]");
    if (btn) {
      btn.textContent = "Módulo marcado como feito";
      btn.disabled = true;
    }
  }

  function updateHomeProgress() {
    const cards = document.querySelectorAll("[data-module-id]");
    if (!cards.length) return;
    const data = loadProgress();
    let done = 0;
    cards.forEach((card) => {
      const id = card.getAttribute("data-module-id");
      const status = card.querySelector(".status");
      if (data[id]?.done) {
        done += 1;
        card.classList.add("done");
        if (status) status.textContent = "Concluído";
      } else if (status) {
        status.textContent = "Pendente";
      }
    });
    const bar = document.querySelector("[data-progress-bar]");
    const label = document.querySelector("[data-progress-label]");
    const total = cards.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    if (bar) bar.style.width = pct + "%";
    if (label) label.textContent = done + " / " + total + " módulos (" + pct + "%)";
  }

  function wireQuestions(scope) {
    const root = scope || document;
    root.querySelectorAll(".q").forEach((q) => {
      if (q.getAttribute("data-wired") === "1") return;
      q.setAttribute("data-wired", "1");
      const answer = q.getAttribute("data-answer");
      const reveal = q.querySelector(".reveal");
      const btn = q.querySelector("[data-reveal]");

      q.querySelectorAll(".option").forEach((opt) => {
        opt.addEventListener("click", () => {
          if (q.classList.contains("answered")) return;
          q.classList.add("answered");
          const val = opt.getAttribute("data-value");
          q.querySelectorAll(".option").forEach((o) => {
            o.classList.remove("selected");
            if (answer && o.getAttribute("data-value") === answer) o.classList.add("correct");
          });
          opt.classList.add("selected");
          if (answer && val !== answer) opt.classList.add("wrong");
          if (reveal) reveal.classList.add("open");
          q.dispatchEvent(
            new CustomEvent("hub:answered", {
              bubbles: true,
              detail: { correct: !!(answer && val === answer) }
            })
          );
        });
      });

      if (btn && reveal) {
        btn.addEventListener("click", () => {
          reveal.classList.toggle("open");
          btn.textContent = reveal.classList.contains("open") ? "Ocultar lógica" : "Ver lógica";
        });
      }
    });
  }

  function wireChecklist() {
    const box = document.querySelector("[data-checklist]");
    if (!box) return;
    const moduleId = document.body.getAttribute("data-module");
    const key = "checklist_" + (moduleId || "x");
    const data = loadProgress();
    const saved = data[key] || {};

    box.querySelectorAll("input[type=checkbox]").forEach((input, i) => {
      const id = input.getAttribute("data-id") || String(i);
      input.checked = !!saved[id];
      input.addEventListener("change", () => {
        const d = loadProgress();
        d[key] = d[key] || {};
        d[key][id] = input.checked;
        saveProgress(d);
      });
    });
  }

  function wireMarkDone() {
    const btn = document.querySelector("[data-mark-done]");
    if (!btn) return;
    const id = document.body.getAttribute("data-module");
    const data = loadProgress();
    if (data[id]?.done) {
      btn.textContent = "Módulo marcado como feito";
      btn.disabled = true;
    }
    btn.addEventListener("click", () => markModuleDone(id));
  }

  function wireTimer() {
    const el = document.querySelector("[data-timer]");
    const startBtn = document.querySelector("[data-timer-start]");
    if (!el || !startBtn) return;
    let remaining = parseInt(el.getAttribute("data-seconds") || "2400", 10);
    let handle = null;

    function paint() {
      const m = String(Math.floor(remaining / 60)).padStart(2, "0");
      const s = String(remaining % 60).padStart(2, "0");
      el.textContent = m + ":" + s;
    }
    paint();

    startBtn.addEventListener("click", () => {
      if (handle) return;
      startBtn.disabled = true;
      handle = setInterval(() => {
        remaining -= 1;
        paint();
        if (remaining <= 0) {
          clearInterval(handle);
          el.textContent = "Tempo!";
        }
      }, 1000);
    });
  }

  function wireMindMap() {
    const root = document.querySelector("[data-mmap]");
    if (!root) return;
    const nodes = root.querySelectorAll("[data-node]");
    const panels = root.querySelectorAll("[data-panel]");

    function openNode(id) {
      nodes.forEach((n) => n.classList.toggle("active", n.getAttribute("data-node") === id));
      panels.forEach((p) => p.classList.toggle("open", p.getAttribute("data-panel") === id));
    }

    nodes.forEach((node) => {
      node.addEventListener("click", () => {
        const id = node.getAttribute("data-node");
        const panel = root.querySelector('[data-panel="' + id + '"]');
        if (!panel) return;
        if (node.classList.contains("active")) {
          node.classList.remove("active");
          panel.classList.remove("open");
          return;
        }
        openNode(id);
      });
    });
  }

  function wireFlashcards(scope) {
    const root = scope || document;
    root.querySelectorAll("[data-flash]").forEach((card) => {
      if (card.getAttribute("data-wired") === "1") return;
      card.setAttribute("data-wired", "1");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      const toggle = () => {
        card.classList.toggle("open");
        const label = card.querySelector(".face-label");
        const tap = card.querySelector(".tap");
        const open = card.classList.contains("open");
        if (label) label.textContent = open ? "Resposta" : "Situação";
        if (tap) tap.textContent = open ? "Toque para esconder" : "Toque para revelar";
        card.setAttribute("aria-expanded", open ? "true" : "false");
      };
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  const QUIZ_STEM_KEY = "hubSaudeMulherQuizStems_v1";
  const LETTERS = ["a", "b", "c", "d", "e"];

  const BANCO_TAG_LABELS = {
    all: "Todos",
    iu: "IU",
    perfect: "PERFECT",
    pop: "POP",
    if: "IF",
    gestacao: "Gestação",
    sexo: "Sexualidade",
    prostata: "Próstata",
    revisao: "Revisão"
  };

  const QUIZ_BANK = [
    {
      id: "neuro",
      tag: "neuro",
      stems: [
        "“É simpático ser continente” refere-se à ação de:",
        "No enchimento vesical, qual sistema sustenta a continência?",
        "A frase da aula sobre continência aponta principalmente para:"
      ],
      options: [
        { t: "Nervo pélvico contraindo o detrusor", ok: false },
        { t: "Sistema simpático (hipogástrico) no enchimento", ok: true },
        { t: "Apenas córtex inibindo a sede", ok: false },
        { t: "Reflexo gastrocólico", ok: false }
      ],
      logic: "Enchimento/continência da bexiga = simpático T10–L2, hipogástrico, noradrenalina. (T5–L2 é simpático do intestino, Aula 6.)"
    },
    {
      id: "perfect",
      tag: "PERFECT",
      stems: [
        "No New PERFECT, Elevation / Co-contraction / Timed substituem o sentido de:",
        "Elevation, co-contraction e Timed no New PERFECT reinterpretam qual bloco?",
        "O que muda do PERFECT clássico para o New PERFECT (além de P/E/R/F)?"
      ],
      options: [
        { t: "Power apenas", ok: false },
        { t: "Fast apenas", ok: false },
        { t: "Every Contraction Timed do PERFECT clássico (E-C-T reinterpretado)", ok: true },
        { t: "Escala de Bristol", ok: false }
      ],
      logic: "P/E/R/F se mantêm; E-C-T ganham Elevation, Co-contraction, Timed (tosse)."
    },
    {
      id: "iue",
      tag: "IUE",
      stems: [
        "Paciente perde urina só na tosse. Melhor manobra funcional a ensinar:",
        "Perda ao esforço (salto/tosse), sem urgência. Qual recurso funcional é o eixo?",
        "Em IUE pura, qual manobra treina o timing antes do ↑ da PIA?"
      ],
      options: [
        { t: "Knack", ok: true },
        { t: "Mahony isolado como única conduta", ok: false },
        { t: "Valsalva livre", ok: false },
        { t: "Plantiflexão contínua", ok: false }
      ],
      logic: "IUE → pré-contração no ↑PIA (Knack). Mahony é para urgência."
    },
    {
      id: "eletro",
      tag: "eletro",
      stems: [
        "Parâmetros mais adequados para inibir detrusor na eletro da aula:",
        "Quer inibir o detrusor com eletro. Qual faixa cabe no que caiu na aula?",
        "Para bexiga hiperativa / IUU, a eletro intracavitária da aula usa cerca de:"
      ],
      options: [
        { t: "50 Hz, Toff=2×Ton", ok: false },
        { t: "100 Hz contínuo", ok: false },
        { t: "Sem corrente, só cone", ok: false },
        { t: "<10 Hz, ~10 µs, sem repouso", ok: true }
      ],
      logic: "<10 Hz = inibição. 50 Hz = fibras II."
    },
    {
      id: "tibial",
      tag: "tibial",
      stems: [
        "Confirmação do tibial posterior:",
        "Como você confere se o eletrodo do nervo tibial posterior está bem posicionado?",
        "Sinal motor típico de que a ENTP está no lugar certo:"
      ],
      options: [
        { t: "Midríase", ok: false },
        { t: "Flexão rítmica do hálux", ok: true },
        { t: "Tosse", ok: false },
        { t: "Babinski", ok: false }
      ],
      logic: "Resposta motora típica do posicionamento."
    },
    {
      id: "popq",
      tag: "POP-Q",
      stems: [
        "POP-Q: ponto mais distal >1 cm acima do hímen:",
        "No POP-Q, prolapso ainda acima do hímen por mais de 1 cm corresponde a:",
        "Qual estágio POP-Q: ponto distal >1 cm acima do plano himenal?"
      ],
      options: [
        { t: "Estágio 2", ok: false },
        { t: "Estágio 3", ok: false },
        { t: "Estágio 1", ok: true },
        { t: "Estágio 4", ok: false }
      ],
      logic: "Estágio 1 = mais de 1 cm acima do hímen."
    },
    {
      id: "if",
      tag: "IF",
      stems: [
        "Na defecação, o puborretal deve principalmente:",
        "Para a fezes passarem, o que o puborretal precisa fazer?",
        "Anismo/hipertonia do puborretal atrapalha a defecação porque o músculo deveria:"
      ],
      options: [
        { t: "Relaxar, aumentando o ângulo anorretal", ok: true },
        { t: "Contrair ao máximo", ok: false },
        { t: "Fechar a uretra", ok: false },
        { t: "Inibir o EAI permanentemente", ok: false }
      ],
      logic: "Relaxar retifica o canal. Hipertonia → constipação/anismo."
    },
    {
      id: "gestacao",
      tag: "gestação",
      stems: [
        "Diástase abdominal diagnóstica (aula):",
        "Na aula, a diástase dos retos é considerada diagnóstico a partir de:",
        "Critério numérico da aula para diástase abdominal:"
      ],
      options: [
        { t: ">0,5 cm", ok: false },
        { t: "Qualquer afastamento visível", ok: false },
        { t: "Só se houver IU", ok: false },
        { t: ">3 cm", ok: true }
      ],
      logic: ">3 cm; evitar abdominais com abaulamento."
    },
    {
      id: "sexo",
      tag: "sexualidade",
      stems: [
        "Mulher com reação extrema (fuga, hiperventilação) ao exame. Escala:",
        "Resposta psicofisiológica intensa no exame ginecológico. Qual classificação?",
        "Fuga + hiperventilação ao toque/exame. Isso remete a:"
      ],
      options: [
        { t: "Lamont 1", ok: false },
        { t: "Pacik 5", ok: true },
        { t: "POP-Q 0", ok: false },
        { t: "Gleason 2", ok: false }
      ],
      logic: "Grau 5 Pacik = resposta psicofisiológica intensa."
    },
    {
      id: "prostata",
      tag: "próstata",
      stems: [
        "Homem pós-prostatectomia com IU. Afirmação correta:",
        "Sobre IU e DE após prostatectomia radical, o que está certo?",
        "Pós-PR com perda urinária. Qual leitura cabe na aula?"
      ],
      options: [
        { t: "IU pós-PR é raríssima (<1%)", ok: false },
        { t: "DE nunca se associa", ok: false },
        { t: "IU é frequente (8–77%); DE pode vir de lesão dos cavernosos; classificar o tipo de IU", ok: true },
        { t: "Tratamento único é histerectomia", ok: false }
      ],
      logic: "Números e fisiopatologia da Aula 10. Sempre diferenciar esforço × urgência × overflow."
    }
  ];

  const DISC_BANK = [
    {
      id: "disc-iue",
      fronts: [
        "Mulher 40 anos, G3Pn3, perde urina ao correr e tossir. Sem urgência. Oxford 2, apneia e glúteos. Elabore HD, avaliação e plano FT.",
        "Caso: perda só no esforço, contração fraca com acessórios. Monte HD → avaliação → conduta (e o que não fazer).",
        "Paciente com IUE clínica e má qualidade de MAP. Estruture a resposta discursiva completa."
      ],
      back: [
        ["HD:", "IUE com má qualidade de contração (acessórios/apneia)."],
        ["Avaliação:", "New PERFECT, diário, POP, intestino, hábitos."],
        ["Conduta:", "Find–Feel → EPP/TMAP (força+resistência) → Knack → BF se preciso → cones após aprendizado → ≥24 contr./dia, expiração, progressão postural. Manutenção domiciliar."],
        ["Não:", "cone deitada; pular conscientização; tratar como IUU."]
      ]
    },
    {
      id: "disc-comparar",
      fronts: [
        "Compare a conduta de IUE e IUU em “perda de urina”, justificando recursos.",
        "Homem 2 meses pós-PR com perda ao esforço e DE. Elabore raciocínio e plano.",
        "Discursiva: diferencie eixo IUE × IUU (ou descreva IU masculina pós-PR + DE)."
      ],
      back: [
        ["Modelo A — IUE × IUU:", "IUE = suporte/timing no ↑PIA → TMAP/EPP + Knack ± cones/BF/eletro II–I. IUU = detrusor → comportamento + Mahony ± tibial 10 Hz / eletro <10 Hz. IUM = soma. Conservador = 1ª linha."],
        ["Modelo B — pós-PR:", "IU frequente; classificar esforço vs urgência vs overflow (jato fraco/retenção → estenose?). TMAP + funcional; DE → cavernosos + recursos (TMAP/vacuo/US/eletro/ondas) + equipe."]
      ]
    }
  ];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function pickStem(item) {
    const data = loadProgress();
    const used = (data[QUIZ_STEM_KEY] && data[QUIZ_STEM_KEY][item.id]) || [];
    const pool = item.stems.filter((_, i) => !used.includes(i));
    const source = pool.length ? pool : item.stems;
    const stem = source[Math.floor(Math.random() * source.length)];
    const idx = item.stems.indexOf(stem);
    const next = used.concat(idx).slice(-Math.max(1, item.stems.length - 1));
    data[QUIZ_STEM_KEY] = data[QUIZ_STEM_KEY] || {};
    data[QUIZ_STEM_KEY][item.id] = next;
    saveProgress(data);
    return stem;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderOneQuestion(item, num) {
    const stem = pickStem(item);
    const opts = shuffle(item.options);
    let answer = "a";
    const buttons = opts.map((opt, i) => {
      const letter = LETTERS[i];
      if (opt.ok) answer = letter;
      return (
        '<button type="button" class="option" data-value="' +
        letter +
        '">' +
        letter.toUpperCase() +
        ") " +
        escapeHtml(opt.t) +
        "</button>"
      );
    }).join("");

    return (
      '<div class="q" data-answer="' +
      answer +
      '">' +
      '<div class="q-num">Caso ' +
      num +
      " · " +
      escapeHtml(item.tag) +
      "</div>" +
      '<div class="enunciado">' +
      escapeHtml(stem) +
      "</div>" +
      '<div class="options">' +
      buttons +
      "</div>" +
      '<div class="reveal"><div class="label">Lógica</div>' +
      escapeHtml(item.logic) +
      "</div></div>"
    );
  }

  function renderDiscCard(item) {
    const front = pickStem({ id: item.id, stems: item.fronts });
    const body = item.back
      .map(function (row) {
        return "<p><strong>" + escapeHtml(row[0]) + "</strong> " + escapeHtml(row[1]) + "</p>";
      })
      .join("");
    return (
      '<div class="flash" data-flash>' +
      '<div class="face-label">Situação</div>' +
      '<div class="front">' +
      escapeHtml(front) +
      "</div>" +
      '<div class="back">' +
      body +
      "</div>" +
      '<div class="tap">Toque para revelar</div></div>'
    );
  }

  function mountSimuladoQuiz() {
    const quizMount = document.querySelector("[data-quiz-mount]");
    const discMount = document.querySelector("[data-disc-mount]");
    if (!quizMount && !discMount) return false;

    if (quizMount) {
      const order = shuffle(QUIZ_BANK);
      quizMount.innerHTML = order.map((item, i) => renderOneQuestion(item, i + 1)).join("");
      wireQuestions(quizMount);
    }
    if (discMount) {
      const discs = shuffle(DISC_BANK);
      discMount.innerHTML = discs.map(renderDiscCard).join("");
      wireFlashcards(discMount);
    }
    return true;
  }

  function wireQuizReshuffle() {
    const btn = document.querySelector("[data-reshuffle-quiz]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      mountSimuladoQuiz();
      const quizMount = document.querySelector("[data-quiz-mount]");
      const discMount = document.querySelector("[data-disc-mount]");
      if (typeof wrapGlossaryInRoot === "function") {
        if (quizMount) wrapGlossaryInRoot(quizMount);
        if (discMount) wrapGlossaryInRoot(discMount);
      }
      btn.textContent = "Nova prova ✓";
      setTimeout(() => {
        btn.textContent = "Nova prova";
      }, 1200);
    });
  }

  function getBancoBank() {
    const bank = window.BANCO_QUESTOES;
    return Array.isArray(bank) ? bank : [];
  }

  function filterBancoByTag(bank, tag) {
    if (!tag || tag === "all") return bank.slice();
    return bank.filter((item) => Array.isArray(item.tags) && item.tags.indexOf(tag) !== -1);
  }

  function renderBancoQuestion(item, num) {
    const opts = shuffle(item.options || []);
    let answer = "a";
    const buttons = opts
      .map((opt, i) => {
        const letter = LETTERS[i] || String(i);
        if (opt.ok) answer = letter;
        return (
          '<button type="button" class="option" data-value="' +
          letter +
          '">' +
          letter.toUpperCase() +
          ") " +
          escapeHtml(opt.t) +
          "</button>"
        );
      })
      .join("");
    const tag = (item.tags && item.tags[0]) || "tema";
    return (
      '<div class="q" data-answer="' +
      answer +
      '" data-banco-id="' +
      escapeHtml(item.id || "") +
      '">' +
      '<div class="q-num">Q' +
      num +
      " · " +
      escapeHtml(tag) +
      "</div>" +
      '<div class="enunciado">' +
      escapeHtml(item.stem) +
      "</div>" +
      '<div class="options">' +
      buttons +
      "</div>" +
      '<div class="reveal"><div class="label">Lógica</div>' +
      escapeHtml(item.logic || "") +
      "</div></div>"
    );
  }

  function paintBancoScore(state) {
    const el = document.querySelector("[data-banco-score]");
    if (!el) return;
    el.textContent = state.correct + " / " + state.answered;
  }

  function mountBancoQuestoes(tag, reshuffle) {
    const mount = document.querySelector("[data-banco-mount]");
    if (!mount) return false;

    const bank = getBancoBank();
    const activeTag = tag || mount.getAttribute("data-active-tag") || "all";
    mount.setAttribute("data-active-tag", activeTag);

    let list = filterBancoByTag(bank, activeTag);
    if (reshuffle) list = shuffle(list);

    const countEl = document.querySelector("[data-banco-count]");
    const label = BANCO_TAG_LABELS[activeTag] || activeTag;
    if (countEl) {
      countEl.textContent =
        (list.length === 1 ? "1 questão" : list.length + " questões") +
        " · " +
        label +
        " (banco total: " +
        bank.length +
        ")";
    }

    if (!list.length) {
      mount.innerHTML =
        '<div class="card meta"><p>Nenhuma questão neste filtro.</p></div>';
      return true;
    }

    mount.innerHTML = list.map((item, i) => renderBancoQuestion(item, i + 1)).join("");
    wireQuestions(mount);

    if (typeof wrapGlossaryInRoot === "function") {
      wrapGlossaryInRoot(mount);
    }
    return true;
  }

  function wireBancoQuestoes() {
    const mount = document.querySelector("[data-banco-mount]");
    if (!mount) return;

    const score = { correct: 0, answered: 0 };
    paintBancoScore(score);

    mount.addEventListener("hub:answered", (e) => {
      score.answered += 1;
      if (e.detail && e.detail.correct) score.correct += 1;
      paintBancoScore(score);
    });

    document.querySelectorAll("[data-banco-tag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tag = btn.getAttribute("data-banco-tag") || "all";
        document.querySelectorAll("[data-banco-tag]").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
        score.correct = 0;
        score.answered = 0;
        paintBancoScore(score);
        mountBancoQuestoes(tag, true);
      });
    });

    const shuffleBtn = document.querySelector("[data-banco-shuffle]");
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", () => {
        score.correct = 0;
        score.answered = 0;
        paintBancoScore(score);
        mountBancoQuestoes(mount.getAttribute("data-active-tag") || "all", true);
        shuffleBtn.textContent = "Embaralhado ✓";
        setTimeout(() => {
          shuffleBtn.textContent = "Embaralhar este tema";
        }, 1100);
      });
    }

    const resetBtn = document.querySelector("[data-banco-reset-score]");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        score.correct = 0;
        score.answered = 0;
        paintBancoScore(score);
      });
    }

    mountBancoQuestoes("all", true);
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function buildGlossaryRegex() {
    const keys = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
    return new RegExp("\\b(" + keys.map(escapeRegExp).join("|") + ")\\b", "g");
  }

  function shouldSkipGlossaryNode(node) {
    if (!node) return true;
    if (node.nodeType === 1) {
      const tag = node.tagName;
      if (/^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|BUTTON|CODE|KBD|SVG)$/.test(tag)) return true;
      if (node.classList.contains("gloss") || node.classList.contains("gloss-tip")) return true;
      if (node.getAttribute("data-no-gloss") != null) return true;
    }
    return false;
  }

  function wrapGlossaryInRoot(root) {
    if (!root) return;
    const re = buildGlossaryRegex();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let p = node.parentNode;
        while (p && p !== root) {
          if (shouldSkipGlossaryNode(p)) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        re.lastIndex = 0;
        return re.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const targets = [];
    while (walker.nextNode()) targets.push(walker.currentNode);

    targets.forEach((textNode) => {
      const text = textNode.nodeValue;
      re.lastIndex = 0;
      let match;
      let last = 0;
      const frag = document.createDocumentFragment();
      while ((match = re.exec(text))) {
        if (match.index > last) {
          frag.appendChild(document.createTextNode(text.slice(last, match.index)));
        }
        const key = match[1];
        const tip = GLOSSARY[key];
        if (!tip) {
          frag.appendChild(document.createTextNode(key));
        } else {
          const el = document.createElement("abbr");
          el.className = "gloss";
          el.textContent = key;
          el.setAttribute("data-gloss", tip);
          el.setAttribute("tabindex", "0");
          el.setAttribute("role", "button");
          el.setAttribute("aria-label", key + ": " + tip);
          el.title = ""; // evita tooltip nativo feio/atrasado
          frag.appendChild(el);
        }
        last = match.index + key.length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  function wireGlossaryTips() {
    const root = document.querySelector(".wrap") || document.body;
    wrapGlossaryInRoot(root);

    let tip = document.querySelector(".gloss-tip");
    if (!tip) {
      tip = document.createElement("div");
      tip.className = "gloss-tip";
      tip.setAttribute("role", "tooltip");
      tip.hidden = true;
      document.body.appendChild(tip);
    }

    let active = null;
    let longPressTimer = null;
    let longPressFired = false;

    function placeTip(el) {
      const text = el.getAttribute("data-gloss") || "";
      tip.textContent = text;
      tip.hidden = false;
      tip.classList.add("open");
      active = el;
      el.classList.add("gloss-open");
      el.setAttribute("aria-expanded", "true");

      const rect = el.getBoundingClientRect();
      const pad = 10;
      const tipW = Math.min(280, window.innerWidth - pad * 2);
      tip.style.width = tipW + "px";
      tip.style.maxWidth = tipW + "px";

      // medir depois de pintar
      requestAnimationFrame(() => {
        const th = tip.offsetHeight;
        let left = rect.left + rect.width / 2 - tipW / 2;
        left = Math.max(pad, Math.min(left, window.innerWidth - tipW - pad));
        let top = rect.top - th - 10;
        let place = "above";
        if (top < pad) {
          top = rect.bottom + 10;
          place = "below";
        }
        tip.style.left = left + "px";
        tip.style.top = top + "px";
        tip.dataset.place = place;
      });
    }

    function hideTip() {
      if (active) {
        active.classList.remove("gloss-open");
        active.setAttribute("aria-expanded", "false");
      }
      active = null;
      tip.hidden = true;
      tip.classList.remove("open");
    }

    function showFor(el) {
      if (!el || !el.classList.contains("gloss")) return;
      if (active === el) {
        hideTip();
        return;
      }
      if (active) active.classList.remove("gloss-open");
      placeTip(el);
    }

    root.addEventListener("mouseover", (e) => {
      const el = e.target.closest(".gloss");
      if (!el || window.matchMedia("(hover: none)").matches) return;
      placeTip(el);
    });
    root.addEventListener("mouseout", (e) => {
      const el = e.target.closest(".gloss");
      if (!el) return;
      const to = e.relatedTarget;
      if (to && (el.contains(to) || tip.contains(to))) return;
      if (active === el) hideTip();
    });

    root.addEventListener("focusin", (e) => {
      const el = e.target.closest(".gloss");
      if (el) placeTip(el);
    });
    root.addEventListener("focusout", (e) => {
      const el = e.target.closest(".gloss");
      if (!el) return;
      setTimeout(() => {
        if (active === el && document.activeElement !== el) hideTip();
      }, 0);
    });

    root.addEventListener("click", (e) => {
      const el = e.target.closest(".gloss");
      if (!el) return;
      // no toque, click após long-press não deve togglear de novo
      if (longPressFired) {
        longPressFired = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      // mouse: hover já abre — não fechar no click
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        placeTip(el);
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      showFor(el);
    }, true);

    root.addEventListener("touchstart", (e) => {
      const el = e.target.closest(".gloss");
      if (!el) return;
      longPressFired = false;
      clearTimeout(longPressTimer);
      longPressTimer = setTimeout(() => {
        longPressFired = true;
        placeTip(el);
        if (navigator.vibrate) navigator.vibrate(12);
      }, 420);
    }, { passive: true });

    root.addEventListener("touchend", () => clearTimeout(longPressTimer), { passive: true });
    root.addEventListener("touchmove", () => clearTimeout(longPressTimer), { passive: true });
    root.addEventListener("touchcancel", () => clearTimeout(longPressTimer), { passive: true });

    document.addEventListener("click", (e) => {
      if (!active) return;
      if (e.target.closest(".gloss") || e.target.closest(".gloss-tip")) return;
      hideTip();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") hideTip();
    });
    window.addEventListener("scroll", () => {
      if (active) hideTip();
    }, { passive: true });
  }

  function wireCopyLink() {
    const btn = document.querySelector("[data-copy-link]");
    if (!btn) return;
    const url = "https://mikhailnikolay.github.io/estudo-saude-mulher-hub/";
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(url);
        btn.textContent = "Link copiado ✓";
      } catch {
        window.prompt("Copie o link:", url);
        btn.textContent = "Copie o link acima";
      }
      setTimeout(() => {
        btn.textContent = "Copiar link";
      }, 1600);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateHomeProgress();
    mountSimuladoQuiz();
    wireQuizReshuffle();
    wireBancoQuestoes();
    wireQuestions();
    wireChecklist();
    wireMarkDone();
    wireTimer();
    wireMindMap();
    wireFlashcards();
    wireCopyLink();
    wireGlossaryTips();
  });
})();
