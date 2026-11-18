// Banco curado — questões da amiga (PDFs) + bloco IU/PERFECT dos slides
// Gerado para hub offline; não depende dos PDFs em runtime.
window.BANCO_QUESTOES = [
  {
    id: "iu-01",
    tags: ["iu"],
    stem: "Mulher perde urina só ao tossir e ao pegar peso, sem urgência. Qual eixo de conduta da aula é o mais adequado?",
    options: [
      { t: "TMAP/EPP + manobra de Knack (pré-contração no ↑ da PIA)", ok: true },
      { t: "Apenas reflexo A3 de Mahony isolado", ok: false },
      { t: "Eletro <10 Hz como única intervenção", ok: false },
      { t: "Micção de alívio a cada 30 min por precaução", ok: false },
      { t: "Valsalva livre para 'fortalecer' o MAP", ok: false }
    ],
    logic: "IUE → suporte/timing no aumento da PIA: TMAP/EPP + Knack. Mahony e eletro <10 Hz são eixo de IUU/BH (Aulas 4–5)."
  },
  {
    id: "iu-02",
    tags: ["iu"],
    stem: "Paciente com 12 micções/dia, noctúria e perda com urgência súbita. Qual combinação melhor espelha a aula?",
    options: [
      { t: "Treinamento vesical/comportamental + Mahony ± tibial 10 Hz ou eletro <10 Hz", ok: true },
      { t: "Knack isolado e cones de alto peso deitada", ok: false },
      { t: "Somente eletro 50 Hz contínua para 'inibir' detrusor", ok: false },
      { t: "Ignorar irritativos e aumentar líquidos açucarados", ok: false },
      { t: "Indicar sling imediatamente sem tentativa conservadora", ok: false }
    ],
    logic: "IUU/BH: comportamento + Mahony; adjuntos tibial 10 Hz / eletro <10 Hz. 50 Hz é fibra II (fortalecimento), não inibição (Aula 5)."
  },
  {
    id: "iu-03",
    tags: ["iu"],
    stem: "Para inibir o detrusor com eletroestimulação intracavitária, os parâmetros mais coerentes com a aula são:",
    options: [
      { t: "<10 Hz, ~10 µs, sem período de repouso", ok: true },
      { t: "50 Hz, 160–320 µs, Toff = 2×Ton", ok: false },
      { t: "<30 Hz com Toff = Ton para fibra I", ok: false },
      { t: "100 Hz contínuo sem eletrodo", ok: false },
      { t: "Qualquer Hz, desde que doloroso", ok: false }
    ],
    logic: "Inibição do detrusor: <10 Hz, pulso curto, sem repouso. 50 Hz = tipo II; <30 Hz com Toff=Ton = tipo I (Aula 5)."
  },
  {
    id: "iu-04",
    tags: ["iu"],
    stem: "Na estimulação do nervo tibial posterior (ENTP), qual achado confirma posicionamento adequado do estímulo?",
    options: [
      { t: "Flexão rítmica do hálux", ok: true },
      { t: "Midríase bilateral", ok: false },
      { t: "Tosse reflexa", ok: false },
      { t: "Sinal de Babinski sustentado", ok: false },
      { t: "Paralisia do tibial anterior", ok: false }
    ],
    logic: "ENTP típica: 10 Hz, 20–30 min; resposta motora esperada = flexão do hálux (Aula 5)."
  },
  {
    id: "iu-05",
    tags: ["iu"],
    stem: "Qual alternativa lista contraindicações típicas de eletroestimulação endovaginal conforme a aula?",
    options: [
      { t: "Infecção local, gravidez, neoplasia na área, prolapso genital, DIU metálico", ok: true },
      { t: "Apenas idade >40 anos", ok: false },
      { t: "Qualquer histórico de parto vaginal", ok: false },
      { t: "Uso de absorvente diário", ok: false },
      { t: "Oxford ≥3", ok: false }
    ],
    logic: "CIs clássicas da eletro endovaginal/endoanal na Aula 5: infecção, gravidez, neoplasia local, prolapso, DIU metálico (+ higiene/menstruação)."
  },
  {
    id: "iu-06",
    tags: ["iu"],
    stem: "Sobre cones vaginais, qual conduta está alinhada ao material?",
    options: [
      { t: "Só após aprender a contrair o MAP; não sobrecarregar deitada; teste em ortostase/caminhada", ok: true },
      { t: "Começar sempre pelo cone mais pesado deitada com lubrificante abundante", ok: false },
      { t: "Substituem completamente o TMAP em qualquer IUU", ok: false },
      { t: "Indicados de rotina no prolapso avançado com eversão", ok: false },
      { t: "Usar só durante a menstruação", ok: false }
    ],
    logic: "Cone = recurso após consciência/contração; teste ~1 min em ortostase/caminhada; evitar sobrecarga deitada (Aula 3/5)."
  },
  {
    id: "iu-07",
    tags: ["iu"],
    stem: "A frase da aula “é simpático ser continente” aponta principalmente para:",
    options: [
      { t: "Simpático T10–L2 (hipogástrico) no enchimento: relaxa detrusor e favorece tônus uretral", ok: true },
      { t: "Parassimpático S2–S4 contraindo o detrusor na micção", ok: false },
      { t: "Apenas o córtex inibindo sede de água", ok: false },
      { t: "Reflexo gastrocólico permanente", ok: false },
      { t: "Simpático T5–L2 exclusivo da continência urinária", ok: false }
    ],
    logic: "Continência vesical no enchimento = simpático T10–L2. Micção = parassimpático S2–S4. T5–L2 aparece no contexto intestinal (Aulas 1–2/4 vs 6)."
  },
  {
    id: "iu-08",
    tags: ["iu"],
    stem: "Paciente com IUM (esforço + urgência). Qual raciocínio de prova é o mais seguro?",
    options: [
      { t: "Somar eixos: TMAP/Knack para esforço + comportamento/Mahony ± recursos de urgência; priorizar o dominante", ok: true },
      { t: "Tratar só o esforço e ignorar a urgência", ok: false },
      { t: "Usar apenas eletro 50 Hz para os dois componentes", ok: false },
      { t: "Proibir qualquer TMAP", ok: false },
      { t: "Indicar prostatectomia", ok: false }
    ],
    logic: "IUM = IUE + IUU. Conduta soma os eixos; ICS: conservador como 1ª linha (Aulas 4–5)."
  },
  {
    id: "iu-09",
    tags: ["iu"],
    stem: "Na Educação Perineal Progressiva (EPP), a ordem correta de progressão é:",
    options: [
      { t: "Propriocepção/consciência → contrações simples → elaboradas → esforço funcional", ok: true },
      { t: "Esforço máximo no 1º dia → propriocepção só no final", ok: false },
      { t: "Cone pesado → eletro → ignorar consciência", ok: false },
      { t: "Apenas alongamento passivo sem contração", ok: false },
      { t: "Valsalva → Knack → Mahony na mesma série", ok: false }
    ],
    logic: "EPP: propriocepção → simples → elaborados → esforço; ≥24 contr./dia, expiração, sem parasitas (Aula 3/5)."
  },
  {
    id: "iu-10",
    tags: ["iu"],
    stem: "Mulher com IUE inicia cones, mas contrai glúteos e prende a respiração. Qual leitura está correta?",
    options: [
      { t: "Há uso de acessórios/apneia — voltar à consciência do MAP antes de progredir carga", ok: true },
      { t: "Acessórios são desejáveis e comprovam força", ok: false },
      { t: "Deve-se aumentar imediatamente o peso do cone", ok: false },
      { t: "Indica overflow e sonda de demora", ok: false },
      { t: "É critério de alta", ok: false }
    ],
    logic: "Qualidade > carga: apneia e glúteos = má qualidade de contração; Find–Feel / biofeedback antes de progressão (Aula 3/5)."
  },
  {
    id: "iu-11",
    tags: ["iu"],
    stem: "Na urgência miccional, o reflexo A3 de Mahony consiste em:",
    options: [
      { t: "Contrações rápidas repetidas do MAP para inibir o detrusor", ok: true },
      { t: "Pré-contração única apenas na tosse", ok: false },
      { t: "Relaxamento máximo do puborretal", ok: false },
      { t: "Manobra de Credé", ok: false },
      { t: "Valsalva prolongada", ok: false }
    ],
    logic: "Mahony = contrações rápidas na urgência (inibição périneo-detrusora). Knack = timing no esforço (Aula 5)."
  },
  {
    id: "iu-12",
    tags: ["iu"],
    stem: "Qual afirmação sobre 1ª linha de tratamento da IU (visão ICS refletida na aula) está correta?",
    options: [
      { t: "Abordagem conservadora/fisioterapêutica é 1ª linha antes de cirurgia/medicação em muitos casos", ok: true },
      { t: "Cirurgia é sempre obrigatória no primeiro retorno", ok: false },
      { t: "FT só após falha de três slings", ok: false },
      { t: "Não existe conduta comportamental na IUU", ok: false },
      { t: "TMAP é contraindicado em IUE", ok: false }
    ],
    logic: "ICS/aula: conservador (TMAP, comportamento, etc.) como primeira linha na maioria dos cenários de IU (Aulas 4–5)."
  },
  {
    id: "perfect-01",
    tags: ["perfect"],
    stem: "No New PERFECT, Elevation / Co-contraction / Timed reinterpretam principalmente o sentido de:",
    options: [
      { t: "Every Contraction Timed do PERFECT clássico (bloco E-C-T)", ok: true },
      { t: "Apenas o Power (Oxford)", ok: false },
      { t: "Apenas o Fast", ok: false },
      { t: "A escala de Bristol", ok: false },
      { t: "O Gleason", ok: false }
    ],
    logic: "P/E/R/F se mantêm; E-C-T ganham Elevation, Co-contraction e Timed (resposta à tosse) no New PERFECT (Aula 3)."
  },
  {
    id: "perfect-02",
    tags: ["perfect"],
    stem: "Na avaliação PERFECT, qual prática de descanso entre séries/reps está alinhada ao material?",
    options: [
      { t: "Descanso ~4 s entre repetições e ≥2 min antes do bloco Fast", ok: true },
      { t: "Sem descanso nenhum até a falha total", ok: false },
      { t: "30 min obrigatórios entre cada contração", ok: false },
      { t: "Só descansar se houver dor lombar", ok: false },
      { t: "Descanso apenas após 100 reps", ok: false }
    ],
    logic: "Protocolo da aula: pausa curta entre reps e pausa maior antes do Fast para não confundir resistência com potência (Aula 3)."
  },
  {
    id: "perfect-03",
    tags: ["perfect"],
    stem: "Paciente com Oxford 2, sem elevação da parede vaginal e com co-contração abdominal grosseira. O que o New PERFECT ajuda a documentar?",
    options: [
      { t: "Falhas em Elevation e Co-contraction (além de Power baixo), orientando consciência antes de carga", ok: true },
      { t: "Apenas o estágio POP-Q IV automático", ok: false },
      { t: "Necessidade imediata de prostatectomia", ok: false },
      { t: "Que o Fast está necessariamente normal", ok: false },
      { t: "Que não há MAP a treinar", ok: false }
    ],
    logic: "New PERFECT detalha elevação e qualidade da co-contração — chave para não progredir carga com padrão errado (Aula 3)."
  },
  {
    id: "perfect-04",
    tags: ["perfect"],
    stem: "O item Timed do New PERFECT, no contexto da aula, relaciona-se sobretudo a:",
    options: [
      { t: "Resposta temporal do MAP ao esforço (ex.: tosse) — timing da pré-contração", ok: true },
      { t: "Tempo de sono da paciente", ok: false },
      { t: "Duração da cirurgia de sling", ok: false },
      { t: "Cronometragem do pad test de 24 h apenas", ok: false },
      { t: "Frequência cardíaca na esteira", ok: false }
    ],
    logic: "Timed = capacidade de sincronizar contração com o pico de esforço (base do Knack) (Aula 3/5)."
  },
  {
    id: "perfect-05",
    tags: ["perfect"],
    stem: "Sobre fibras do MAP e escolha de recurso, qual associação está correta?",
    options: [
      { t: "Tipo II (rápidas) → eletro ~50 Hz; tipo I (lentas) → <30 Hz; sustentação predominante do elevador", ok: true },
      { t: "Tipo I → 50 Hz exclusivo; tipo II → <10 Hz", ok: false },
      { t: "Não existem fibras I no MAP", ok: false },
      { t: "Eletro 50 Hz inibe detrusor", ok: false },
      { t: "Tibial 10 Hz fortalece só fibra II", ok: false }
    ],
    logic: "I ~60–70% sustentação; II esforço rápido. Parâmetros de eletro seguem o objetivo de fibra; <10 Hz = inibição detrusor (Aulas 2–5)."
  },
  {
    id: "perfect-06",
    tags: ["perfect", "iu"],
    stem: "Homem 8 semanas pós-prostatectomia radical, perda ao esforço, dificuldade de perceber o MAP. Melhor sequência inicial:",
    options: [
      { t: "Classificar tipo de IU → consciência/BF + TMAP + Knack; DE pode relacionar-se aos cavernosos", ok: true },
      { t: "Assumir overflow e proibir qualquer TMAP", ok: false },
      { t: "Tratar como IUU pura só com eletro 50 Hz", ok: false },
      { t: "Alta imediata sem reabilitação", ok: false },
      { t: "Indicar histerectomia", ok: false }
    ],
    logic: "IU pós-PR frequente (8–77%); classificar esforço×urgência×overflow; TMAP + funcional/Knack; DE ↔ cavernosos (Aula 10 + 5)."
  },
  {
    id: "p1-01",
    tags: ["pop"],
    stem: "Paciente relata abaulamento que se intensifica ao tossir. A inspeção demonstra deslocamento da parede vaginal anterior relacionado à bexiga. Qual associação anatômica está correta?",
    options: [
      { t: "Uretrocele — reto.", ok: false },
      { t: "Enterocele — útero.", ok: false },
      { t: "Cistocele — bexiga.", ok: true },
      { t: "Retocele — intestino delgado.", ok: false },
      { t: "Histerocele — uretra.", ok: false }
    ],
    logic: "Cistocele é o prolapso relacionado à bexiga; o material distingue os tipos conforme o órgão envolvido."
  },
  {
    id: "p1-02",
    tags: ["pop"],
    stem: "No sistema POP-Q apresentado, a porção mais distal do prolapso situa-se 0,8 cm proximal ao plano do hímen. Qual estágio corresponde à medida?",
    options: [
      { t: "Estágio II.", ok: true },
      { t: "Estágio 0.", ok: false },
      { t: "Estágio I.", ok: false },
      { t: "Estágio III.", ok: false },
      { t: "Estágio IV.", ok: false }
    ],
    logic: "O estágio II compreende a porção distal até 1 cm acima ou abaixo do hímen."
  },
  {
    id: "p1-03",
    tags: ["pop"],
    stem: "Em uma avaliação, a porção mais distal está 1,4 cm acima do hímen. Considerando o POP-Q exposto na aula, assinale a classificação.",
    options: [
      { t: "Estágio II.", ok: false },
      { t: "Estágio III.", ok: false },
      { t: "Estágio IV.", ok: false },
      { t: "Grau III da classificação clínica, obrigatoriamente.", ok: false },
      { t: "Estágio I.", ok: true }
    ],
    logic: "No POP-Q, o estágio I corresponde à porção distal mais de 1 cm acima do hímen."
  },
  {
    id: "p1-04",
    tags: ["pop"],
    stem: "Ao exame com Valsalva, observa-se deslocamento de víscera, mas sem ultrapassar o intróito vaginal. Pela classificação clínica I–IV apresentada, trata-se de:",
    options: [
      { t: "Grau I, pois todo prolapso exige palpação exclusiva.", ok: false },
      { t: "Grau II.", ok: true },
      { t: "Grau III.", ok: false },
      { t: "Grau IV.", ok: false },
      { t: "Estágio IV do POP-Q. PROVA 1 • PROLAPSO DOS ÓRGÃOS PÉLVICOS", ok: false }
    ],
    logic: "Na classificação clínica da aula, o grau II é observável à inspeção, mas não ultrapassa o intróito."
  },
  {
    id: "p1-05",
    tags: ["pop"],
    stem: "Qual achado diferencia o grau I do grau II na classificação clínica I–IV apresentada nos slides?",
    options: [
      { t: "No grau I há eversão vaginal completa.", ok: false },
      { t: "No grau I o prolapso ultrapassa o intróito.", ok: false },
      { t: "No grau II há necessariamente eversão completa.", ok: false },
      { t: "No grau I o deslocamento é identificado somente à palpação durante Valsalva.", ok: true },
      { t: "No grau II não ocorre deslocamento durante Valsalva.", ok: false }
    ],
    logic: "O grau I é detectado apenas à palpação; o grau II já é visível, mas não ultrapassa o intróito."
  },
  {
    id: "p1-06",
    tags: ["pop"],
    stem: "O avaliador registra “grau III” sem indicar o método. Qual conduta interpretativa é mais rigorosa?",
    options: [
      { t: "Assumir que é o mesmo que estágio III do POP-Q.", ok: false },
      { t: "Solicitar identificação da escala, pois a graduação clínica e o POP-Q empregam critérios diferentes.", ok: true },
      { t: "Considerar obrigatoriamente eversão vaginal completa.", ok: false },
      { t: "Converter diretamente o grau III em deslocamento de 3 cm.", ok: false },
      { t: "Descartar a avaliação porque não houve radiografia.", ok: false }
    ],
    logic: "A aula apresenta duas classificações distintas: POP-Q por referência ao hímen e graduação clínica por inspeção/intróito e volume. (p. 6 e 8)"
  },
  {
    id: "p1-07",
    tags: ["pop"],
    stem: "Paciente apresenta abaulamento posterior relacionado ao reto e outro abaulamento anterior relacionado à bexiga. Quais prolapsos coexistem?",
    options: [
      { t: "Histerocele e enterocele.", ok: false },
      { t: "Uretrocele e histerocele.", ok: false },
      { t: "Enterocele e uretrocele.", ok: false },
      { t: "Retocele e cistocele.", ok: true },
      { t: "Cistocele e enterocele.", ok: false }
    ],
    logic: "Retocele corresponde ao reto e cistocele à bexiga; ambos podem coexistir. (p. 3 e 11)"
  },
  {
    id: "p1-08",
    tags: ["pop"],
    stem: "Em paciente previamente submetida à histerectomia, observa-se prolapso do fundo vaginal. Qual afirmação é compatível com a definição de prolapso urogenital da aula?",
    options: [
      { t: "A definição inclui o fundo vaginal após histerectomia.", ok: true },
      { t: "O prolapso é impossível após histerectomia.", ok: false },
      { t: "A definição restringe-se ao útero intacto.", ok: false },
      { t: "Somente a bexiga pode exteriorizar-se.", ok: false },
      { t: "É necessariamente um quadro de incontinência fecal.", ok: false }
    ],
    logic: "A definição inicial inclui explicitamente o fundo vaginal após histerectomia."
  },
  {
    id: "p1-09",
    tags: ["pop"],
    stem: "Qual conjunto reúne as estruturas apontadas como principais responsáveis pelo suporte anatômico das vísceras pélvicas?",
    options: [
      { t: "Diafragma torácico e músculo psoas.", ok: false },
      { t: "Reto abdominal e ligamento inguinal.", ok: false },
      { t: "Músculo elevador do ânus e tecido conjuntivo da fáscia endopélvica.", ok: true },
      { t: "Glúteo máximo e tendão patelar.", ok: false },
      { t: "Obturador externo e fáscia plantar. PROVA 1 • PROLAPSO DOS ÓRGÃOS PÉLVICOS", ok: false }
    ],
    logic: "O material atribui o suporte sobretudo ao elevador do ânus e aos ligamentos/tecido conjuntivo da fáscia endopélvica."
  },
  {
    id: "p1-10",
    tags: ["pop"],
    stem: "Uma paciente tem integridade muscular aparentemente preservada, mas comprometimento dos ligamentos de suporte pélvico. Qual conclusão é sustentada pela fisiopatologia apresentada?",
    options: [
      { t: "O prolapso depende de lesão simultânea muscular e fascial.", ok: false },
      { t: "O comprometimento ligamentar é irrelevante.", ok: false },
      { t: "O prolapso só ocorre após histerectomia.", ok: false },
      { t: "A presença de tosse exclui lesão fascial.", ok: false },
      { t: "A falha isolada do componente conjuntivo pode contribuir para a perda de suporte.", ok: true }
    ],
    logic: "A aula afirma que a ruptura ou disfunção de um ou ambos os componentes de suporte pode levar ao prolapso."
  },
  {
    id: "p1-11",
    tags: ["pop"],
    stem: "Mulher com sensação de “bola” vaginal refere também alterações urinárias e intestinais. Qual interpretação melhor representa a avaliação descrita?",
    options: [
      { t: "Os sintomas urinários afastam prolapso.", ok: false },
      { t: "A presença de abaulamento exclui sintomas sexuais.", ok: false },
      { t: "Prolapso é obrigatoriamente assintomático.", ok: false },
      { t: "Prolapso pode produzir queixa isolada ou conjunto de sintomas urinários, intestinais, pélvicos e sexuais.", ok: true },
      { t: "Somente a dor abdominal deve ser investigada.", ok: false }
    ],
    logic: "O material enfatiza que o quadro pode incluir abaulamento, pressão e sintomas urinários, intestinais, pélvicos e sexuais."
  },
  {
    id: "p1-12",
    tags: ["pop"],
    stem: "Na anamnese de uma mulher com suspeita de prolapso, qual conjunto de perguntas se aproxima do instrumento de sintomas vaginais citado nos slides?",
    options: [
      { t: "Febre, hemoptise, cefaleia e visão turva.", ok: false },
      { t: "Dor torácica, palpitações, tontura e tosse com sangue.", ok: false },
      { t: "Sensação de peso abdominal inferior, redução de sensibilidade vaginal, sensação de frouxidão e “bola” vaginal.", ok: true },
      { t: "Rigidez cervical, fraqueza de mãos e dormência dos pés.", ok: false },
      { t: "Dispneia, chiado, epistaxe e dor escapular.", ok: false }
    ],
    logic: "Os quatro temas constam das perguntas do ICIQ-VS reproduzidas no material."
  },
  {
    id: "p1-13",
    tags: ["pop"],
    stem: "Em um atendimento, a inspeção estática não evidencia exteriorização, mas a paciente refere protusão apenas ao carregar peso. Qual afirmação é compatível com a aula?",
    options: [
      { t: "A ausência de protrusão em repouso exclui prolapso.", ok: false },
      { t: "O prolapso pode ser permanente ou aparecer com esforço.", ok: true },
      { t: "O exame não deve incluir qualquer esforço.", ok: false },
      { t: "Toda protrusão intermitente é histerocele.", ok: false },
      { t: "A presença de sintomas exige grau IV.", ok: false }
    ],
    logic: "A aula define que a protrusão pode ser permanente ou surgir durante esforço."
  },
  {
    id: "p1-14",
    tags: ["pop"],
    stem: "Paciente com prolapso leve, constipação, tosse crônica e excesso de peso procura fisioterapia. Qual plano é mais coerente com a abordagem conservadora apresentada?",
    options: [
      { t: "Treinar Valsalva repetidamente e desconsiderar hábitos intestinais.", ok: false },
      { t: "Indicar imobilização permanente.", ok: false },
      { t: "Suspender avaliação do assoalho pélvico e focar apenas em exercícios de braços.", ok: false },
      { t: "Recomendar cirurgia imediata como única alternativa.", ok: false },
      { t: "Orientar redução de fatores que elevam a pressão intra-abdominal, manejo da constipação e exercícios pélvicos. PROVA 1 • PROLAPSO DOS ÓRGÃOS PÉLVICOS", ok: true }
    ],
    logic: "A aula associa aconselhamento sobre peso, tosse, pressão intra-abdominal e constipação aos exercícios pélvicos."
  },
  {
    id: "p1-15",
    tags: ["pop"],
    stem: "Considerando o material, em quais estágios do POP-Q o tratamento fisioterapêutico é explicitamente mencionado como possível indicação?",
    options: [
      { t: "Estágios I e II.", ok: true },
      { t: "Somente estágio IV.", ok: false },
      { t: "Somente estágio III.", ok: false },
      { t: "Estágios III e IV exclusivamente.", ok: false },
      { t: "Apenas estágio 0.", ok: false }
    ],
    logic: "O slide de tratamento conservador cita especificamente prolapsos leves (I) e moderados (II)."
  },
  {
    id: "p1-16",
    tags: ["pop"],
    stem: "Qual é a finalidade descrita para o pessário vaginal no tratamento não cirúrgico?",
    options: [
      { t: "Remover cirurgicamente o útero.", ok: false },
      { t: "Produzir anestesia do períneo.", ok: false },
      { t: "Substituir o exame funcional do assoalho pélvico.", ok: false },
      { t: "Diagnosticar câncer cervical.", ok: false },
      { t: "Promover suporte mecânico às estruturas pélvicas e aliviar pressão na bexiga e no intestino.", ok: true }
    ],
    logic: "O pessário é um dispositivo intravaginal de suporte, citado como intervenção não cirúrgica."
  },
  {
    id: "p1-17",
    tags: ["pop"],
    stem: "Uma mulher apresenta prolapso de grande volume, visível além do intróito vaginal. Na classificação clínica I–IV apresentada, qual grau corresponde a essa descrição?",
    options: [
      { t: "I.", ok: false },
      { t: "IV.", ok: true },
      { t: "II.", ok: false },
      { t: "III.", ok: false },
      { t: "0.", ok: false }
    ],
    logic: "O grau IV clínico é descrito como prolapso visível que ultrapassa o intróito, com grande volume."
  },
  {
    id: "p1-18",
    tags: ["pop"],
    stem: "Qual alternativa descreve adequadamente o estágio IV do POP-Q, segundo a aula?",
    options: [
      { t: "Nenhum prolapso demonstrado.", ok: false },
      { t: "Porção mais distal mais de 1 cm acima do hímen.", ok: false },
      { t: "Porção distal até 1 cm do plano himenal.", ok: false },
      { t: "Eversão vaginal essencialmente completa.", ok: true },
      { t: "Prolapso mais de 1 cm abaixo do hímen sem eversão completa.", ok: false }
    ],
    logic: "O estágio IV do POP-Q corresponde à eversão vaginal essencialmente completa."
  },
  {
    id: "p1-19",
    tags: ["pop"],
    stem: "No contexto do tratamento de casos mais graves, qual relação entre cirurgia e fisioterapia é mencionada no material?",
    options: [
      { t: "A aula destaca a importância do tratamento fisioterapêutico no pré e pós-operatório.", ok: true },
      { t: "O cuidado fisioterapêutico é proibido antes da cirurgia.", ok: false },
      { t: "A cirurgia é sempre desnecessária, independentemente da gravidade.", ok: false },
      { t: "A fisioterapia só é citada para prolapso uterino sem sintomas.", ok: false },
      { t: "O tratamento cirúrgico restringe-se ao uso de pessário.", ok: false }
    ],
    logic: "O slide de tratamento cirúrgico menciona sling, colpoperineoplastia e importância da fisioterapia pré e pós-operatória."
  },
  {
    id: "p1-20",
    tags: ["pop"],
    stem: "Mulher com prolapso relata piora ao esforço e apresenta hipotonia do centro tendíneo do períneo e fraqueza abdominal. Qual abordagem de avaliação é mais coerente com os tópicos expostos?",
    options: [
      { t: "Desconsiderar as alterações musculares e investigar somente o tipo anatômico.", ok: false },
      { t: "Registrar apenas a presença de dor, sem avaliar função.", ok: false },
      { t: "Integrar avaliação funcional do assoalho pélvico, observação durante esforço e análise das alterações abdominais.", ok: true },
      { t: "Utilizar a classificação POP-Q como substituta da avaliação funcional.", ok: false },
      { t: "Definir a gravidade exclusivamente pelo número de gestações. PROVA 1 • PROLAPSO DOS ÓRGÃOS PÉLVICOS", ok: false }
    ],
    logic: "A aula inclui avaliação funcional do assoalho pélvico, observação durante esforço, hipotonia perineal e fraqueza/diástase abdominal. Fonte: aula “Prolapso dos órgãos pélvicos”, Prof. Priscila E. Reginato Pezzi (22 páginas), fornecida para elaboração desta prova. As páginas indicadas nas justificativas referem-se ao PDF da aula."
  },
  {
    id: "p6-01",
    tags: ["pop"],
    stem: "Em três avaliações POP-Q, os pontos mais distais são, respectivamente, -1,6 cm, -0,4 cm e +2,3 cm em relação ao hímen. Na terceira paciente, o comprimento vaginal total é de 9 cm e não há eversão completa. Qual sequência de estágios é compatível com os critérios da aula?",
    options: [
      { t: "I, II e III", ok: true },
      { t: "II, I e III", ok: false },
      { t: "I, III e IV", ok: false },
      { t: "II, II e IV", ok: false },
      { t: "I, II e IV", ok: false }
    ],
    logic: "O POP-Q classifica -1,6 cm como I, -0,4 cm como II e +2,3 cm como III (sem eversão completa, a projeção é inferior a 9 - 2 cm). (Aula 7, p. 6)"
  },
  {
    id: "p6-02",
    tags: ["pop"],
    stem: "Uma paciente apresenta a porção mais distal do prolapso exatamente 1,0 cm abaixo do plano himenal. Sem outros achados, qual estágio deve ser assinalado?",
    options: [
      { t: "III, porque qualquer projeção além do hímen implica estágio III.", ok: false },
      { t: "II, pois a faixa vai de 1 cm acima a 1 cm abaixo do hímen, inclusive.", ok: true },
      { t: "I, pois ainda não houve eversão completa.", ok: false },
      { t: "IV, pois a estrutura ultrapassou o hímen.", ok: false },
      { t: "0, se a protrusão ocorrer somente ao esforço.", ok: false }
    ],
    logic: "O limite distal de +1,0 cm está incluído no estágio II, conforme os limites apresentados no slide de classificação. (Aula 7, p. 6)"
  },
  {
    id: "p6-03",
    tags: ["pop"],
    stem: "O laudo “POP-Q estágio IV” é fundamentado exclusivamente na descrição “abaulamento de volume moderado que ultrapassa o intróito”. Qual é a crítica metodológica mais adequada?",
    options: [
      { t: "A classificação é correta porque ultrapassar o intróito caracteriza necessariamente estágio IV.", ok: false },
      { t: "A classificação seria grau I, independentemente da observação.", ok: false },
      { t: "A descrição se aproxima do grau III da graduação clínica, mas não comprova eversão essencialmente completa exigida no POP-Q IV.", ok: true },
      { t: "O grau IV do POP-Q depende apenas da palpação, e não da inspeção.", ok: false },
      { t: "Os dois sistemas classificatórios usam os mesmos parâmetros quantitativos.", ok: false }
    ],
    logic: "A graduação clínica descreve volume moderado além do intróito no grau III; o POP-Q IV exige eversão vaginal essencialmente completa. (Aula 7, p. 6)"
  },
  {
    id: "p6-04",
    tags: ["pop"],
    stem: "Durante manobra de Valsalva, o deslocamento visceral é percebido à palpação, sem alteração visível à inspeção. Qual registro é tecnicamente mais prudente?",
    options: [
      { t: "POP-Q IV, pois a Valsalva torna a alteração evidente.", ok: false },
      { t: "Classificação clínica III, pois qualquer deslocamento é moderado.", ok: false },
      { t: "Prolapso ausente, pois não há exteriorização visível.", ok: false },
      { t: "Classificação clínica I; o estágio POP-Q necessita de avaliação pelos próprios critérios do sistema.", ok: true },
      { t: "Classificação clínica IV, pois o exame inclui palpação. FISIOTERAPIA • PROLAPSO DOS ÓRGÃOS PÉLVICOS • PROVA 6", ok: false }
    ],
    logic: "Na classificação clínica da aula, o grau I é identificável somente à palpação durante Valsalva. Isso não autoriza converter automaticamente para estágio POP-Q. (Aula 7, p. 8)"
  },
  {
    id: "p6-05",
    tags: ["pop"],
    stem: "Após histerectomia, uma mulher apresenta descida do ápice vaginal e abaulamento associado ao intestino delgado. Qual interpretação respeita a classificação anatômica do material?",
    options: [
      { t: "A ausência do útero exclui qualquer prolapso genital.", ok: false },
      { t: "Apenas a uretra pode prolapsar após histerectomia.", ok: false },
      { t: "O abaulamento intestinal deve necessariamente ser chamado de retocele.", ok: false },
      { t: "A enterocele corresponde ao fundo vaginal, e não ao intestino.", ok: false },
      { t: "O fundo vaginal pós-histerectomia pode prolapsar, e a enterocele está relacionada ao intestino delgado.", ok: true }
    ],
    logic: "A definição inclui prolapso de fundo vaginal após histerectomia e distingue enterocele (intestino delgado) de retocele (reto). (Aula 7, p. 2)"
  },
  {
    id: "p6-06",
    tags: ["pop"],
    stem: "Uma paciente apresenta fraqueza muscular do assoalho pélvico; outra tem comprometimento ligamentar, sem fraqueza muscular demonstrada. Sobre a fisiopatologia exposta, assinale a conclusão correta.",
    options: [
      { t: "Qualquer um dos componentes de suporte pode estar disfuncional e contribuir para prolapso.", ok: true },
      { t: "Somente a ruptura simultânea de músculos e ligamentos gera prolapso.", ok: false },
      { t: "A integridade da fáscia endopélvica não participa da sustentação.", ok: false },
      { t: "O elevador do ânus é irrelevante quando a fáscia está alterada.", ok: false },
      { t: "O prolapso é consequência exclusiva de alterações hormonais.", ok: false }
    ],
    logic: "A aula atribui sustentação ao elevador do ânus e aos ligamentos/tecido conjuntivo da fáscia endopélvica; falha de um ou de ambos pode levar à perda de suporte. (Aula 7, p. 12)"
  },
  {
    id: "p6-07",
    tags: ["pop"],
    stem: "O prontuário descreve “sensação de bola vaginal”, sem inspeção, palpação ou medidas quantitativas. Qual conclusão pode ser feita com respaldo no material?",
    options: [
      { t: "A paciente já preenche o critério de estágio IV do POP-Q.", ok: false },
      { t: "O sintoma justifica investigação de prolapso, mas não estabelece seu tipo ou grau.", ok: true },
      { t: "A queixa permite diagnosticar somente retocele.", ok: false },
      { t: "A queixa indica obrigatoriamente acometimento da bexiga.", ok: false },
      { t: "A presença do sintoma determina necessidade de cirurgia.", ok: false }
    ],
    logic: "A sensação de abaulamento é um sintoma investigado na avaliação; a classificação exige identificar a estrutura e a gravidade. (Aula 7, p. 13)"
  },
  {
    id: "p6-08",
    tags: ["pop"],
    stem: "Uma mulher refere pressão pélvica, dificuldade intestinal e queixas relacionadas à sexualidade. Qual interpretação clínica é mais coerente com a aula?",
    options: [
      { t: "A coexistência de sintomas impede o diagnóstico de prolapso.", ok: false },
      { t: "Os sintomas sexuais só existem no estágio IV.", ok: false },
      { t: "As queixas podem coexistir no prolapso e devem compor a avaliação clínica.", ok: true },
      { t: "A avaliação deve restringir-se à queixa urinária.", ok: false },
      { t: "Somente o abaulamento visível tem relevância na anamnese.", ok: false }
    ],
    logic: "O material descreve apresentações com sintoma isolado ou associação de sintomas urinários, intestinais, pélvicos e sexuais. (Aula 7, p. 13)"
  },
  {
    id: "p6-09",
    tags: ["pop"],
    stem: "Na avaliação de uma paciente com abaulamento e fraqueza abdominal, qual conjunto de informações deve ser integrado, segundo os tópicos da aula?",
    options: [
      { t: "Somente classificação anatômica, sem exame funcional.", ok: false },
      { t: "Somente altura uterina e frequência cardíaca.", ok: false },
      { t: "Somente avaliação da sensibilidade dos membros superiores.", ok: false },
      { t: "Função do assoalho pélvico, exame durante esforço e observação das alterações abdominais.", ok: true },
      { t: "Apenas resultado de exame laboratorial. FISIOTERAPIA • PROLAPSO DOS ÓRGÃOS PÉLVICOS • PROVA 6", ok: false }
    ],
    logic: "A aula apresenta avaliação funcional do assoalho pélvico, hipotonia do centro tendíneo do períneo, observação durante esforço, diástase e fraqueza abdominal. (Aula 7, p. 15)"
  },
  {
    id: "p6-10",
    tags: ["pop"],
    stem: "Mulher com prolapso leve, tosse crônica e constipação pede uma intervenção que não aumente a pressão intra-abdominal. Qual orientação está alinhada ao manejo conservador da aula?",
    options: [
      { t: "Aumentar deliberadamente a frequência de esforços evacuatórios com Valsalva.", ok: false },
      { t: "Priorizar restrição permanente ao movimento como único tratamento.", ok: false },
      { t: "Concentrar o cuidado exclusivamente no sintoma de pressão vaginal.", ok: false },
      { t: "Indicar cirurgia sem considerar medidas conservadoras.", ok: false },
      { t: "Controlar constipação e tosse, reduzir esforços que elevem a pressão intra-abdominal e associar exercícios pélvicos.", ok: true }
    ],
    logic: "As medidas não cirúrgicas incluem modificar fatores de risco (peso, tosse, constipação e pressão intra-abdominal) e exercícios pélvicos vaginais. (Aula 7, p. 19)"
  },
  {
    id: "p6-11",
    tags: ["pop"],
    stem: "Em uma consulta, o estudante afirma que exercícios perineais e aconselhamento “curam anatomicamente todo prolapso”. Qual revisão preserva o alcance da afirmação feita nos slides?",
    options: [
      { t: "Essas medidas podem aliviar sintomas e prevenir piora; não há promessa de reversão anatômica universal.", ok: true },
      { t: "Essas medidas são indicadas somente após eversão completa.", ok: false },
      { t: "A aula proíbe associar exercícios e orientações de hábitos.", ok: false },
      { t: "A redução de constipação foi descrita como tratamento cirúrgico.", ok: false },
      { t: "O objetivo declarado é induzir a eversão vaginal progressiva.", ok: false }
    ],
    logic: "O texto da aula fala em alívio sintomático e prevenção da piora, não em correção anatômica garantida para todos os casos. (Aula 7, p. 19)"
  },
  {
    id: "p6-12",
    tags: ["pop"],
    stem: "Considere os casos: I - prolapso POP-Q I com sintomas; II - POP-Q II com sintomas; III - eversão essencialmente completa. Qual afirmação corresponde exatamente à indicação de fisioterapia descrita?",
    options: [
      { t: "A fisioterapia é restrita ao caso III.", ok: false },
      { t: "A aula menciona indicação fisioterapêutica para I e II, sem afirmar que ela, isoladamente, resolve III.", ok: true },
      { t: "O caso II é obrigatoriamente cirúrgico.", ok: false },
      { t: "O caso I não deve receber medidas conservadoras.", ok: false },
      { t: "Os três casos apresentam igual indicação de tratamento conservador exclusivo.", ok: false }
    ],
    logic: "O slide cita fisioterapia para prolapsos leves (POP-Q I) e moderados (POP-Q II) e discute cirurgia para quadros mais graves. (Aula 7, p. 19)"
  },
  {
    id: "p6-13",
    tags: ["pop"],
    stem: "Uma paciente deseja uma opção não cirúrgica que proporcione sustentação às estruturas pélvicas. Em relação ao pessário, assinale a alternativa compatível com o material.",
    options: [
      { t: "É implantado na cavidade abdominal por cirurgia.", ok: false },
      { t: "É indicado para diagnosticar o tipo histológico do prolapso.", ok: false },
      { t: "É inserido na vagina para suporte mecânico e redução da pressão sobre bexiga e intestino.", ok: true },
      { t: "Seu mecanismo principal é aumentar a pressão intra-abdominal.", ok: false },
      { t: "Substitui automaticamente a avaliação funcional em todas as pacientes. FISIOTERAPIA • PROLAPSO DOS ÓRGÃOS PÉLVICOS • PROVA 6", ok: false }
    ],
    logic: "O pessário é descrito como dispositivo vaginal de suporte das estruturas pélvicas, com possível alívio de pressão vesical e intestinal. (Aula 7, p. 20)"
  },
  {
    id: "p6-14",
    tags: ["pop"],
    stem: "Uma estudante registra “cistocele” para uma protrusão originária do reto e “retocele” para uma protrusão originária da bexiga. Qual alternativa identifica o erro?",
    options: [
      { t: "Ambos os termos são sinônimos e o registro está correto.", ok: false },
      { t: "Cistocele se refere à uretra e retocele ao útero.", ok: false },
      { t: "Enterocele é o nome de ambos os prolapsos descritos.", ok: false },
      { t: "Os rótulos foram invertidos: cistocele corresponde à bexiga e retocele ao reto.", ok: true },
      { t: "Os dois prolapsos são classificados exclusivamente pelo tamanho do volume, não pelo órgão.", ok: false }
    ],
    logic: "Os nomes anatômicos apresentados são cistocele = bexiga e retocele = reto. (Aula 7, p. 3)"
  },
  {
    id: "p6-15",
    tags: ["pop"],
    stem: "Uma mulher tem deslocamento visível que ultrapassa o intróito, classificado clinicamente como grau IV por “grande volume”. Qual inferência NÃO é autorizada só por esse dado?",
    options: [
      { t: "Há deslocamento além do intróito.", ok: false },
      { t: "O exame contém um achado visível.", ok: false },
      { t: "A graduação clínica usa critério de volume.", ok: false },
      { t: "O achado é compatível com o grau IV clínico do material.", ok: false },
      { t: "Há eversão vaginal essencialmente completa e, portanto, POP-Q IV necessariamente.", ok: true }
    ],
    logic: "Volume grande além do intróito define o grau IV da escala clínica exposta, mas não comprova sozinho o critério de eversão completa do estágio IV POP-Q. (Aula 7, p. 8)"
  },
  {
    id: "p6-16",
    tags: ["pop"],
    stem: "Na documentação de um prolapso, o profissional anotou apenas “deslocamento de 0,5 cm” sem indicar a referência anatômica. Por que o registro é insuficiente para o POP-Q?",
    options: [
      { t: "O sistema usa a relação da porção mais distal com o plano himenal, que deve ser informado.", ok: true },
      { t: "O sistema dispensa todas as medidas e se baseia unicamente em sintomas.", ok: false },
      { t: "O POP-Q é uma classificação exclusiva do tipo de órgão prolapsado.", ok: false },
      { t: "A medida de deslocamento só pode ser determinada por eletromiografia.", ok: false },
      { t: "O POP-Q mede apenas a força dos músculos abdominais.", ok: false }
    ],
    logic: "Os estágios POP-Q do material são definidos por localização distal em relação ao hímen e, nos estágios avançados, pela extensão da eversão. (Aula 7, p. 6)"
  },
  {
    id: "p6-17",
    tags: ["pop"],
    stem: "Durante a educação em saúde, uma paciente pergunta por que tossir e fazer força evacuatória são abordados, se o problema parece localizado na vagina. Qual resposta está mais próxima das recomendações expostas?",
    options: [
      { t: "Porque a tosse exclui lesões de suporte do períneo.", ok: false },
      { t: "Porque o aconselhamento visa diminuir situações que aumentam a pressão intra-abdominal e podem agravar o prolapso.", ok: true },
      { t: "Porque o tratamento conservador substitui definitivamente qualquer outra intervenção.", ok: false },
      { t: "Porque exercícios vaginais são contraindicados quando há tosse.", ok: false },
      { t: "Porque a constipação é classificada como um tipo de histerocele. FISIOTERAPIA • PROLAPSO DOS ÓRGÃOS PÉLVICOS • PROVA 6", ok: false }
    ],
    logic: "A aula inclui o controle da tosse, constipação e esforços com aumento de pressão intra-abdominal entre as estratégias conservadoras. (Aula 7, p. 19) FISIOTERAPIA • PROLAPSO DOS ÓRGÃOS PÉLVICOS • PROVA 6 Página 7"
  },
  {
    id: "p6-18",
    tags: ["pop"],
    stem: "Paciente com prolapso avançado será avaliada pela equipe para possibilidade de cirurgia. Qual enunciado respeita o que aparece na aula, sem inferir indicações específicas não apresentadas?",
    options: [
      { t: "Todos os casos avançados devem receber sling obrigatoriamente.", ok: false },
      { t: "A fisioterapia deixa de ter papel após qualquer cirurgia.", ok: false },
      { t: "Nos casos mais graves, o material destaca cirurgia, cita sling e colpoperineoplastia e ressalta a fisioterapia pré e pós-operatória.", ok: true },
      { t: "Apenas o pessário é mencionado em casos de maior gravidade.", ok: false },
      { t: "A cirurgia é classificada como tratamento exclusivamente preventivo.", ok: false }
    ],
    logic: "O material menciona cirurgia nos casos mais graves, cita exemplos de procedimentos e destaca a importância da fisioterapia antes e depois. (Aula 7, p. 18)"
  },
  {
    id: "p6-19",
    tags: ["pop"],
    stem: "Uma mulher com suspeita de prolapso relata redução de sensibilidade vaginal, sensação de frouxidão e pressão na parte inferior do abdome. A que segmento de avaliação citado na aula essas queixas se aproximam?",
    options: [
      { t: "A avaliação de reflexos tendíneos dos membros inferiores.", ok: false },
      { t: "Uma classificação histopatológica da parede vaginal.", ok: false },
      { t: "Um questionário de sintomas respiratórios.", ok: false },
      { t: "As perguntas do ICIQ-VS apresentadas no material, voltadas a sintomas vaginais.", ok: true },
      { t: "Uma escala de força do quadríceps.", ok: false }
    ],
    logic: "O slide com perguntas do questionário vaginal aborda peso/pressão inferior, alteração de sensibilidade, frouxidão e sensação de caroço. (Aula 7, p. 14)"
  },
  {
    id: "p6-20",
    tags: ["pop"],
    stem: "Duas pacientes apresentam prolapso: uma tem abaulamento ao esforço sem outras queixas; outra relata sintomas urinários, intestinais, pélvicos e sexuais. Qual conduta interpretativa é adequada?",
    options: [
      { t: "A primeira paciente não pode apresentar prolapso por ter queixa isolada.", ok: false },
      { t: "A segunda paciente necessariamente tem POP-Q IV.", ok: false },
      { t: "Os sintomas intestinais excluem defeito da parede vaginal.", ok: false },
      { t: "Só é possível diagnosticar prolapso se houver simultaneamente sintomas dos quatro sistemas.", ok: false },
      { t: "As duas apresentações são possíveis; é preciso examinar e classificar cada caso, sem inferir estágio apenas pela quantidade de sintomas. FISIOTERAPIA • PROLAPSO DOS ÓRGÃOS PÉLVICOS • PROVA 6", ok: true }
    ],
    logic: "A aula apresenta formas isoladas e multissintomáticas e utiliza avaliação própria para classificação do prolapso. (Aula 7, p. 13) Material-base: Aula 7 — Prolapso dos Órgãos Pélvicos, Prof. Priscila E. Reginato Pezzi (PDF de 22 páginas fornecido pelo usuário). As questões e justificativas foram elaboradas com base nesse material."
  },
  {
    id: "p7-08",
    tags: ["pop", "revisao"],
    stem: "Uma paciente relata escape involuntário de secreção mucosa anal, mas não descreve perda de fezes líquidas ou sólidas. A classificação da aula corresponde a:",
    options: [
      { t: "1º grau.", ok: false },
      { t: "3º grau.", ok: false },
      { t: "4º grau.", ok: false },
      { t: "2º grau.", ok: true },
      { t: "Estágio II do POP-Q.", ok: false }
    ],
    logic: "O 2º grau da classificação didática corresponde à eliminação involuntária de muco."
  },
  {
    id: "p7-10",
    tags: ["pop", "revisao"],
    stem: "Segundo a classificação apresentada na página 12 da aula, a eliminação involuntária de fezes sólidas, associada à perda total do controle, corresponde ao:",
    options: [
      { t: "Grau I.", ok: false },
      { t: "Grau II.", ok: false },
      { t: "Grau III.", ok: false },
      { t: "Estágio III do POP-Q.", ok: false },
      { t: "Grau IV.", ok: true }
    ],
    logic: "A aula descreve o 4º grau como perda de fezes sólidas, com perda total do controle."
  },
  {
    id: "p7-12",
    tags: ["pop", "revisao"],
    stem: "Ao interpretar os graus apresentados no material, qual cuidado metodológico é mais apropriado?",
    options: [
      { t: "Tratá-los como um escore universal que mede frequência e qualidade de vida.", ok: false },
      { t: "Usar o POP-Q para definir a gravidade da perda fecal.", ok: false },
      { t: "Considerar que perda de muco equivale obrigatoriamente à perda de fezes sólidas.", ok: false },
      { t: "Reconhecer que a classificação da aula organiza o tipo de perda, sem quantificar isoladamente a frequência dos episódios.", ok: true },
      { t: "Concluir que a consistência das fezes não tem relação com a avaliação. PARTE III — POP-Q E REFERÊNCIA HIMENAL", ok: false }
    ],
    logic: "Os quatro graus da aula classificam o tipo de perda. Frequência e impacto exigem avaliação adicional. PARTE III — POP-Q E REFERÊNCIA HIMENAL"
  },
  {
    id: "p7-13",
    tags: ["pop", "revisao"],
    stem: "Durante o POP-Q, a porção mais distal do prolapso encontra-se a −2 cm em relação ao hímen. Considerando os critérios da aula, o estágio é:",
    options: [
      { t: "0.", ok: false },
      { t: "I.", ok: true },
      { t: "II.", ok: false },
      { t: "III.", ok: false },
      { t: "IV.", ok: false }
    ],
    logic: "Mais de 1 cm acima do hímen corresponde ao estágio I; −2 cm indica 2 cm acima."
  },
  {
    id: "p7-14",
    tags: ["pop", "revisao"],
    stem: "Em uma avaliação POP-Q, o ponto mais distal encontra-se exatamente a +1 cm do plano himenal. Qual estágio corresponde a essa medida?",
    options: [
      { t: "0.", ok: false },
      { t: "I.", ok: false },
      { t: "III.", ok: false },
      { t: "II.", ok: true },
      { t: "IV. Revisão direcionada | Fisioterapia em saúde da mulher", ok: false }
    ],
    logic: "O estágio II inclui posições de −1 cm até +1 cm em relação ao hímen, inclusive."
  },
  {
    id: "p7-15",
    tags: ["pop", "revisao"],
    stem: "Uma paciente apresenta o ponto mais distal do prolapso a −1 cm. Qual estágio é indicado pela regra de distância ao hímen?",
    options: [
      { t: "II.", ok: true },
      { t: "I.", ok: false },
      { t: "III.", ok: false },
      { t: "IV.", ok: false },
      { t: "0.", ok: false }
    ],
    logic: "−1 cm está dentro do intervalo do estágio II; o estágio I exige posição superior a 1 cm acima do hímen."
  },
  {
    id: "p7-16",
    tags: ["pop", "revisao"],
    stem: "Uma avaliação mostra a porção mais distal do prolapso a +3 cm, com comprimento vaginal total de 9 cm, sem eversão completa. Segundo o POP-Q, a classificação é:",
    options: [
      { t: "0.", ok: false },
      { t: "I.", ok: false },
      { t: "II.", ok: false },
      { t: "IV.", ok: false },
      { t: "III.", ok: true }
    ],
    logic: "O ponto está mais de 1 cm abaixo do hímen e ainda não atinge a eversão essencialmente completa; é estágio III."
  },
  {
    id: "p7-17",
    tags: ["pop", "revisao"],
    stem: "Qual situação caracteriza o estágio IV do POP-Q, segundo a descrição apresentada na aula?",
    options: [
      { t: "Prolapso 2 cm acima do hímen.", ok: false },
      { t: "Prolapso exatamente ao nível do hímen.", ok: false },
      { t: "Eversão vaginal essencialmente completa.", ok: true },
      { t: "Abaulamento palpável, sem descida.", ok: false },
      { t: "Deslocamento visível que não ultrapassa o intróito.", ok: false }
    ],
    logic: "O estágio IV é descrito como eversão vaginal essencialmente completa."
  },
  {
    id: "p7-18",
    tags: ["pop", "revisao"],
    stem: "Uma estudante afirma que POP-Q e a classificação por inspeção/palpação em graus I–IV da aula são exatamente a mesma escala. Qual é a avaliação correta?",
    options: [
      { t: "Correta: ambos usam exclusivamente volume observado.", ok: false },
      { t: "Incorreta: POP-Q usa medidas em relação ao hímen; a outra classificação descreve achados à palpação e inspeção.", ok: true },
      { t: "Correta: o POP-Q dispensa a referência himenal.", ok: false },
      { t: "Correta: o estágio 0 é igual ao grau I de palpação.", ok: false },
      { t: "Incorreta: o POP-Q é utilizado apenas para incontinência fecal. PARTE IV — VALSALVA E AVALIAÇÃO CLÍNICA", ok: false }
    ],
    logic: "O POP-Q utiliza medidas anatômicas relativas ao hímen; a classificação clínica descrita na página 8 utiliza inspeção/palpação. PARTE IV — VALSALVA E AVALIAÇÃO CLÍNICA"
  },
  {
    id: "p7-19",
    tags: ["pop", "revisao"],
    stem: "Na avaliação do prolapso, qual é a finalidade principal da manobra de Valsalva?",
    options: [
      { t: "Diminuir a pressão intra-abdominal para ocultar o abaulamento.", ok: false },
      { t: "Produzir uma contração voluntária máxima do esfíncter anal externo.", ok: false },
      { t: "Determinar diretamente a produção de progesterona.", ok: false },
      { t: "Aumentar a pressão intra-abdominal para evidenciar a descida das estruturas pélvicas.", ok: true },
      { t: "Substituir a avaliação anatômica e funcional. Revisão direcionada | Fisioterapia em saúde da mulher", ok: false }
    ],
    logic: "A manobra aumenta a pressão intra-abdominal e pode evidenciar o deslocamento dos órgãos pélvicos."
  },
  {
    id: "p7-20",
    tags: ["pop", "revisao"],
    stem: "Durante a Valsalva, o examinador percebe pequeno deslocamento visceral apenas ao toque, sem abaulamento visível. Na classificação clínica da página 8, trata-se de:",
    options: [
      { t: "Grau I.", ok: true },
      { t: "Grau II.", ok: false },
      { t: "Grau III.", ok: false },
      { t: "Grau IV.", ok: false },
      { t: "Estágio IV do POP-Q.", ok: false }
    ],
    logic: "O grau I da classificação clínica é perceptível à palpação, mas não à inspeção."
  },
  {
    id: "p7-21",
    tags: ["pop", "revisao"],
    stem: "Uma paciente apresenta deslocamento visível durante a Valsalva, mas a protrusão não ultrapassa o intróito vaginal. Qual grau da classificação clínica da aula?",
    options: [
      { t: "Grau I.", ok: false },
      { t: "Grau III.", ok: false },
      { t: "Grau II.", ok: true },
      { t: "Grau IV.", ok: false },
      { t: "Estágio 0 do POP-Q.", ok: false }
    ],
    logic: "O grau II é visível à inspeção, mas não ultrapassa o intróito vaginal. Revisão direcionada | Fisioterapia em saúde da mulher Página 7"
  },
  {
    id: "p7-22",
    tags: ["pop", "revisao"],
    stem: "Uma paciente apresenta protrusão que ultrapassa o intróito vaginal durante o esforço, com volume moderado. Segundo a classificação clínica da aula, qual é o grau?",
    options: [
      { t: "Grau I.", ok: false },
      { t: "Grau II.", ok: false },
      { t: "Estágio II do POP-Q, obrigatoriamente.", ok: false },
      { t: "Grau IV.", ok: false },
      { t: "Grau III.", ok: true }
    ],
    logic: "O grau III é visível além do intróito vaginal, com volume moderado."
  },
  {
    id: "p7-23",
    tags: ["pop", "revisao"],
    stem: "Ao comparar duas pacientes, uma apresenta prolapso que ultrapassa o intróito vaginal com volume moderado e a outra, grande volume. Na classificação clínica da aula, os graus são, respectivamente:",
    options: [
      { t: "I e II.", ok: false },
      { t: "III e IV.", ok: true },
      { t: "II e III.", ok: false },
      { t: "I e IV.", ok: false },
      { t: "II e IV.", ok: false }
    ],
    logic: "Volume moderado além do intróito: grau III; grande volume além do intróito: grau IV."
  },
  {
    id: "p7-24",
    tags: ["pop", "revisao"],
    stem: "Uma paciente apresenta prolapso apenas quando faz esforço. Qual interpretação melhor integra o conceito de prolapso e a manobra de Valsalva apresentados na aula?",
    options: [
      { t: "A ausência de abaulamento em repouso exclui prolapso.", ok: false },
      { t: "A Valsalva é usada apenas para investigar constipação intestinal.", ok: false },
      { t: "A protrusão que aparece com esforço nunca pode ser classificada.", ok: false },
      { t: "O prolapso pode surgir com esforço, e a Valsalva pode ajudar a evidenciá-lo durante a avaliação.", ok: true },
      { t: "A Valsalva mede diretamente a força dos músculos do assoalho pélvico. Revisão direcionada | Fisioterapia em saúde da mulher", ok: false }
    ],
    logic: "O material informa que a protrusão pode ser permanente ou aparecer com esforço; a Valsalva permite observá-la. Base de estudo: Aula 8 — Fisioterapia no período gestacional (hormônios, p. 2–7); Aula 6 — Incontinência fecal (classificação, p. 12); Aula 7 — Prolapso dos órgãos pélvicos (POP-Q, p. 6; classificação clínica e Valsalva, p. 8–10). Nota: a classificação em quatro graus de incontinência fecal e a classificação"
  },
  {
    id: "p8-06",
    tags: ["pop", "revisao"],
    stem: "Uma estudante confunde prolactina com HCG. Qual distinção está correta?",
    options: [
      { t: "Ambos servem para medir o grau de prolapso", ok: false },
      { t: "Prolactina estimula síntese láctea; HCG é detectado nos testes de gravidez", ok: true },
      { t: "HCG é produzido exclusivamente após o parto", ok: false },
      { t: "Prolactina é responsável pelo escore POP-Q", ok: false },
      { t: "O HCG é o principal hormônio da ejeção do leite INCONTINÊNCIA FECAL", ok: false }
    ],
    logic: "Prolactina participa da produção láctea; HCG permite identificar a gravidez."
  },
  {
    id: "p8-11",
    tags: ["pop", "revisao"],
    stem: "A hiperatividade do puborretal pode dificultar a evacuação por:",
    options: [
      { t: "Reduzir a produção de bile", ok: false },
      { t: "Impedir a formação das fezes", ok: false },
      { t: "Dificultar o relaxamento e a abertura do ângulo anorretal", ok: true },
      { t: "Aumentar o estágio POP-Q", ok: false },
      { t: "Induzir contrações uterinas", ok: false }
    ],
    logic: "O relaxamento adequado do puborretal favorece o aumento do ângulo anorretal e a evacuação."
  },
  {
    id: "p8-12",
    tags: ["pop", "revisao"],
    stem: "Sobre a classificação em quatro graus da Aula 6, qual afirmação é correta?",
    options: [
      { t: "A frequência define o grau independentemente do tipo de perda", ok: false },
      { t: "A consistência e o tipo de conteúdo perdido orientam o grau", ok: true },
      { t: "O grau IV sempre corresponde a muco", ok: false },
      { t: "O grau I corresponde à perda de fezes sólidas", ok: false },
      { t: "O POP-Q substitui a classificação da incontinência POP-Q", ok: false }
    ],
    logic: "A graduação apresentada na aula distingue gases, muco, fezes líquidas e sólidas."
  },
  {
    id: "p8-13",
    tags: ["pop", "revisao"],
    stem: "A porção mais distal do prolapso está em −1,4 cm em relação ao hímen. Qual é o estágio POP-Q?",
    options: [
      { t: "0", ok: false },
      { t: "I", ok: true },
      { t: "II", ok: false },
      { t: "III", ok: false },
      { t: "IV", ok: false }
    ],
    logic: "O estágio I corresponde à descida que permanece mais de 1 cm acima do hímen."
  },
  {
    id: "p8-14",
    tags: ["pop", "revisao"],
    stem: "A porção mais distal do prolapso está em +0,9 cm em relação ao hímen. Qual estágio?",
    options: [
      { t: "0", ok: false },
      { t: "I", ok: false },
      { t: "II", ok: true },
      { t: "III", ok: false },
      { t: "IV Prova 8 — revisão objetiva", ok: false }
    ],
    logic: "O estágio II inclui medidas de −1 cm a +1 cm."
  },
  {
    id: "p8-17",
    tags: ["pop", "revisao"],
    stem: "A eversão vaginal essencialmente completa corresponde a qual estágio POP-Q?",
    options: [
      { t: "0", ok: false },
      { t: "I", ok: false },
      { t: "II", ok: false },
      { t: "III", ok: false },
      { t: "IV", ok: true }
    ],
    logic: "A eversão essencialmente completa define o estágio IV."
  },
  {
    id: "p8-18",
    tags: ["pop", "revisao"],
    stem: "Qual alternativa interpreta corretamente o sinal das medidas no POP-Q?",
    options: [
      { t: "Valores negativos ficam abaixo do hímen", ok: false },
      { t: "Valores positivos ficam acima do hímen", ok: false },
      { t: "Hímen é a referência zero e valores positivos indicam descida abaixo dele", ok: true },
      { t: "Hímen equivale sempre a +3 cm", ok: false },
      { t: "O POP-Q não utiliza medidas VALSALVA", ok: false }
    ],
    logic: "O plano do hímen é zero; medidas positivas são distais a ele."
  },
  {
    id: "p8-19",
    tags: ["pop", "revisao"],
    stem: "Durante a inspeção, qual é a finalidade da manobra de Valsalva na avaliação do prolapso?",
    options: [
      { t: "Reduzir a pressão intra-abdominal", ok: false },
      { t: "Evidenciar a descida por aumento da pressão intra-abdominal", ok: true },
      { t: "Fortalecer o esfíncter anal externo", ok: false },
      { t: "Medir o HCG", ok: false },
      { t: "Provocar o reflexo de ejeção do leite Prova 8 — revisão objetiva", ok: false }
    ],
    logic: "A manobra eleva a pressão abdominal, podendo evidenciar a protrusão."
  },
  {
    id: "p8-20",
    tags: ["pop", "revisao"],
    stem: "Durante Valsalva há descida perceptível apenas pela palpação, sem protrusão visível. Qual grau da tabela clínica da Aula 7?",
    options: [
      { t: "I", ok: true },
      { t: "II", ok: false },
      { t: "III", ok: false },
      { t: "IV", ok: false },
      { t: "Estágio POP-Q IV", ok: false }
    ],
    logic: "O grau I da tabela clínica da aula é palpável, mas não visível."
  },
  {
    id: "p8-21",
    tags: ["pop", "revisao"],
    stem: "O abaulamento é visível ao esforço, mas não ultrapassa o intróito vaginal. Qual grau clínico da Aula 7?",
    options: [
      { t: "I", ok: false },
      { t: "II", ok: true },
      { t: "III", ok: false },
      { t: "IV", ok: false },
      { t: "Estágio POP-Q IV", ok: false }
    ],
    logic: "No grau II clínico há visualização sem ultrapassar o intróito."
  },
  {
    id: "p8-22",
    tags: ["pop", "revisao"],
    stem: "Um abaulamento ultrapassa o intróito vaginal com volume moderado. Qual grau clínico da aula?",
    options: [
      { t: "I", ok: false },
      { t: "II", ok: false },
      { t: "III", ok: true },
      { t: "IV", ok: false },
      { t: "Não há prolapso", ok: false }
    ],
    logic: "O grau III clínico corresponde a volume moderado além do intróito."
  },
  {
    id: "p8-23",
    tags: ["pop", "revisao"],
    stem: "Qual frase distingue Valsalva de POP-Q?",
    options: [
      { t: "Valsalva é escala e POP-Q é hormônio", ok: false },
      { t: "Ambos medem somente perda de gases", ok: false },
      { t: "Valsalva é manobra de esforço e POP-Q é sistema de quantificação", ok: true },
      { t: "São sinônimos da mesma contração muscular", ok: false },
      { t: "O POP-Q mede apenas dor CASO INTEGRADO", ok: false }
    ],
    logic: "A manobra de Valsalva ajuda a evidenciar o prolapso; o POP-Q quantifica sua descida."
  },
  {
    id: "p8-24",
    tags: ["pop", "revisao"],
    stem: "Durante a Valsalva, o abaulamento é visível e não ultrapassa o intróito. Medida distal de −0,4 cm. Assinale a associação correta:",
    options: [
      { t: "Clínico grau I; POP-Q III", ok: false },
      { t: "Clínico grau II; POP-Q II", ok: true },
      { t: "Clínico grau III; POP-Q I", ok: false },
      { t: "Clínico grau IV; POP-Q IV", ok: false },
      { t: "Clínico grau II; POP-Q IV Prova 8 — revisão objetiva", ok: false }
    ],
    logic: "A tabela clínica indica grau II; −0,4 cm está na faixa POP-Q estágio II. Base didática: Aula 6 — Incontinência Fecal; Aula 7 — Prolapso dos Órgãos Pélvicos; Aula 8 — Fisioterapia no Período Gestacional."
  },
  {
    id: "pg-02",
    tags: ["pop", "revisao"],
    stem: "Duas pacientes têm a porção mais distal do prolapso, respectivamente, a −1,02 cm e −0,98 cm do hímen. Considerando apenas esses valores e a classificação POP-Q, quais são os estágios?",
    options: [
      { t: "II e I, porque a medida negativa de maior magnitude indica maior exteriorização.", ok: false },
      { t: "II e II, porque ambas as medidas são negativas e próximas do hímen.", ok: false },
      { t: "I e I, porque ambas as medidas estão acima do plano himenal.", ok: false },
      { t: "0 e II, porque a primeira medida não alcança o hímen.", ok: false },
      { t: "I e II, porque −1,02 cm está mais de 1 cm acima e −0,98 cm está dentro da faixa de ±1 cm.", ok: true }
    ],
    logic: "O estágio I exige medida menor que −1 cm; o estágio II inclui −1 a +1 cm, inclusive. Assim, −1,02 cm é I e −0,98 cm é II."
  },
  {
    id: "pg-07",
    tags: ["pop", "revisao"],
    stem: "Considere duas avaliações POP-Q com comprimento vaginal total de 8,0 cm. Na primeira, o ponto mais distal está em +5,95 cm; na segunda, em +6,05 cm, com eversão essencialmente completa. Qual interpretação respeita o limite de TVL − 2 cm?",
    options: [
      { t: "Ambas são estágio II, porque os valores positivos são medidos fora da vagina.", ok: false },
      { t: "Ambas são estágio III, pois o estágio IV só existe quando o ponto distal coincide com +8,0 cm.", ok: false },
      { t: "A primeira é estágio III e a segunda é estágio IV, pois o limite é +6,0 cm.", ok: true },
      { t: "A primeira é estágio I e a segunda é estágio II, porque o TVL deve ser subtraído do valor medido.", ok: false },
      { t: "A primeira é estágio IV e a segunda é estágio III, pois o estágio diminui com a exteriorização. FISIOTERAPIA PÉLVICA | SIMULADO INTEGRADO", ok: false }
    ],
    logic: "TVL − 2 cm = 8,0 − 2,0 = 6,0 cm. +5,95 cm permanece abaixo do limite do estágio III; +6,05 cm, com eversão essencialmente completa, enquadra-se no IV."
  },
  {
    id: "pg-12",
    tags: ["pop", "revisao"],
    stem: "Durante a manobra de Valsalva, a paciente A apresenta deslocamento palpável, mas não visível; B apresenta protrusão visível sem ultrapassar o intróito; C apresenta protrusão de volume moderado além do intróito. Pela graduação clínica da aula, quais são os graus de A, B e C?",
    options: [
      { t: "II, III e IV.", ok: false },
      { t: "I, II e III.", ok: true },
      { t: "0, I e II.", ok: false },
      { t: "I, III e IV.", ok: false },
      { t: "II, II e III.", ok: false }
    ],
    logic: "A graduação clínica durante Valsalva distingue: I, palpável e não visível; II, visível sem ultrapassar o intróito; III, ultrapassa com volume moderado; IV, ultrapassa com grande volume. Não confundir com os estágios POP-Q."
  },
  {
    id: "pg-15",
    tags: ["pop", "revisao"],
    stem: "Homem com incontinência após prostatectomia radical apresenta contração fraca e compensação excessiva por músculos abdominais. Qual plano é mais consistente com os princípios de treinamento descritos na aula?",
    options: [
      { t: "TMAP individualizado e supervisionado, com foco no esfíncter uretral estriado, qualidade da contração e redução das compensações.", ok: true },
      { t: "Treinamento exclusivamente de contrações anais máximas, sem necessidade de reavaliar a função.", ok: false },
      { t: "Série fixa de repetições para todos os pacientes, priorizando o número de contrações acima da execução.", ok: false },
      { t: "Suspensão definitiva do TMAP após a retirada do cateter, para evitar fadiga muscular.", ok: false },
      { t: "Treino abdominal com Valsalva sustentada como principal estratégia de continência. FISIOTERAPIA PÉLVICA | SIMULADO INTEGRADO", ok: false }
    ],
    logic: "O material prioriza o esfíncter uretral estriado, prescrição individualizada, aprendizagem motora, redução de compensações e supervisão; o treinamento é retomado após retirada do cateter."
  },
  {
    id: "pg-17",
    tags: ["pop", "revisao"],
    stem: "Mulher com prolapso leve relata sensação de peso vaginal e constipação, sem indicação cirúrgica imediata. Qual interpretação integra adequadamente suporte anatômico e abordagem conservadora descritos na aula?",
    options: [
      { t: "O suporte depende exclusivamente da parede abdominal; o pessário tem como objetivo aumentar a pressão intra-abdominal.", ok: false },
      { t: "O prolapso é sempre causado por fraqueza isolada do esfíncter anal externo, e exercícios pélvicos são contraindicados.", ok: false },
      { t: "O suporte envolve elevador do ânus e fáscia endopélvica; exercícios pélvicos, manejo da constipação e pessário podem integrar medidas conservadoras.", ok: true },
      { t: "A cirurgia é obrigatória em todo estágio I, pois medidas comportamentais não têm indicação.", ok: false },
      { t: "A fisioterapia substitui necessariamente qualquer avaliação clínica, mesmo em prolapsos graves.", ok: false }
    ],
    logic: "A aula relaciona o suporte ao elevador do ânus e ao tecido conjuntivo da fáscia endopélvica; inclui exercícios pélvicos, medidas sobre fatores de risco e pessários entre as opções não cirúrgicas."
  },
  {
    id: "p2-01",
    tags: ["if"],
    stem: "Um paciente relata perda involuntária exclusivamente de gases, sem eliminação de fezes ou muco. Segundo a classificação de quatro graus apresentada na aula, a condição corresponde a:",
    options: [
      { t: "Grau 4", ok: false },
      { t: "Grau 3", ok: false },
      { t: "Grau 2", ok: false },
      { t: "Grau 1", ok: true },
      { t: "Ausência de incontinência", ok: false }
    ],
    logic: "O primeiro grau, na classificação da aula, corresponde à perda involuntária de gases."
  },
  {
    id: "p2-02",
    tags: ["if"],
    stem: "Uma paciente refere escape involuntário de fezes líquidas, mas preserva o controle para fezes sólidas. Qual grau corresponde ao quadro na classificação apresentada?",
    options: [
      { t: "1º grau", ok: false },
      { t: "2º grau", ok: false },
      { t: "3º grau", ok: true },
      { t: "4º grau", ok: false },
      { t: "Não classificável", ok: false }
    ],
    logic: "O terceiro grau é descrito como eliminação involuntária de fezes líquidas."
  },
  {
    id: "p2-03",
    tags: ["if"],
    stem: "Durante a chegada de fezes ao reto, qual sequência resume corretamente o reflexo inibitório retoanal?",
    options: [
      { t: "Distensão retal e relaxamento reflexo do esfíncter anal interno", ok: true },
      { t: "Contração voluntária do esfíncter anal interno e bloqueio do plexo mioentérico", ok: false },
      { t: "Distensão retal e contração obrigatória do esfíncter anal externo", ok: false },
      { t: "Contração do puborretal e fechamento do canal anal como único evento", ok: false },
      { t: "Fechamento das válvulas de Houston e ausência de resposta neural", ok: false }
    ],
    logic: "A distensão retal desencadeia o reflexo retoanal inibitório, com relaxamento do esfíncter anal interno."
  },
  {
    id: "p2-04",
    tags: ["if"],
    stem: "A capacidade de adiar voluntariamente a evacuação quando surge o desejo evacuatório relaciona-se principalmente à ação de qual estrutura?",
    options: [
      { t: "Esfíncter anal interno isoladamente", ok: false },
      { t: "Esfíncter anal externo em associação ao sistema de continência", ok: true },
      { t: "Estômago durante o reflexo gastrocólico", ok: false },
      { t: "Válvula ileocecal", ok: false },
      { t: "Plexo submucoso como músculo esquelético Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "O esfíncter anal externo participa do controle voluntário, enquanto o interno contribui para a pressão de repouso."
  },
  {
    id: "p2-05",
    tags: ["if"],
    stem: "A aula atribui maior participação na pressão anal de repouso ao:",
    options: [
      { t: "Músculo reto abdominal", ok: false },
      { t: "Esfíncter anal externo", ok: false },
      { t: "Músculo iliopsoas", ok: false },
      { t: "Esfíncter anal interno", ok: true },
      { t: "Diafragma torácico", ok: false }
    ],
    logic: "O material enfatiza a contribuição predominante do esfíncter anal interno para a pressão de repouso."
  },
  {
    id: "p2-06",
    tags: ["if"],
    stem: "Paciente apresenta dificuldade de evacuação e contração paradoxal do puborretal ao tentar defecar. A consequência biomecânica mais coerente é:",
    options: [
      { t: "Aumento facilitador do ângulo anorretal", ok: false },
      { t: "Redução ou manutenção do ângulo anorretal, dificultando a saída das fezes", ok: true },
      { t: "Relaxamento obrigatório do canal anal", ok: false },
      { t: "Eliminação espontânea de fezes sólidas", ok: false },
      { t: "Perda da sensibilidade da mucosa gástrica", ok: false }
    ],
    logic: "A contração do puborretal mantém o ângulo anorretal mais fechado; para evacuar, espera-se relaxamento."
  },
  {
    id: "p2-07",
    tags: ["if"],
    stem: "Qual intervenção apresenta maior especificidade para um paciente com dissinergia evacuatória por falha de relaxamento do puborretal?",
    options: [
      { t: "Treinar contrações máximas contínuas sem pausa", ok: false },
      { t: "Treinar apenas musculatura dos membros inferiores", ok: false },
      { t: "Biofeedback para coordenação do relaxamento durante a evacuação", ok: true },
      { t: "Suprimir definitivamente o reflexo gastrocólico", ok: false },
      { t: "Incentivar esforço evacuatório com apneia prolongada", ok: false }
    ],
    logic: "O biofeedback auxilia a aprender contração e, sobretudo neste caso, relaxamento coordenado do puborretal."
  },
  {
    id: "p2-08",
    tags: ["if"],
    stem: "Sobre as válvulas de Houston, assinale a interpretação compatível com os slides.",
    options: [
      { t: "São dobras transversais do reto que auxiliam na sustentação do conteúdo fecal", ok: true },
      { t: "São esfíncteres estriados do canal anal", ok: false },
      { t: "São terminações nervosas responsáveis por reconhecer gases", ok: false },
      { t: "São ligamentos que suspendem o útero", ok: false },
      { t: "São válvulas musculares do intestino delgado", ok: false }
    ],
    logic: "As válvulas de Houston são dobras retais semilunares que colaboram na contenção fecal."
  },
  {
    id: "p2-09",
    tags: ["if"],
    stem: "Qual combinação associa corretamente sistema nervoso e segmento indicado no material?",
    options: [
      { t: "Simpático: S2–S4; parassimpático: T5–L2", ok: false },
      { t: "Entérico: apenas C1–C4; parassimpático: L5", ok: false },
      { t: "Parassimpático: S2–S4; simpático: T5–L2", ok: true },
      { t: "Ambos: exclusivamente S2–S4", ok: false },
      { t: "Simpático: nervo facial; parassimpático: plexo lombar Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "Os slides relacionam a atividade parassimpática sacral a S2–S4 e a simpática a T5–L2."
  },
  {
    id: "p2-10",
    tags: ["if"],
    stem: "Uma paciente refere escape fecal especialmente quando as fezes estão muito líquidas. Segundo a discussão comportamental da aula, a medida que pode favorecer a percepção de enchimento é:",
    options: [
      { t: "Estimular fezes ainda mais fluidas sem avaliação", ok: false },
      { t: "Ajustar hábitos para buscar consistência fecal mais formada", ok: true },
      { t: "Suspender qualquer hábito de evacuação após refeições", ok: false },
      { t: "Eliminar exercícios do assoalho pélvico em todos os casos", ok: false },
      { t: "Usar apenas treino abdominal máximo", ok: false }
    ],
    logic: "Fezes mais consistentes exercem pressão retal perceptível, favorecendo discriminação do enchimento."
  },
  {
    id: "p2-11",
    tags: ["if"],
    stem: "Qual achado é mais compatível com constipação, conforme os critérios clínicos descritos?",
    options: [
      { t: "Evacuação satisfatória, sem esforço e com fezes macias", ok: false },
      { t: "Eliminação exclusiva de gases sem sintomas de esvaziamento", ok: false },
      { t: "Evacuação infrequente, esforço e sensação de esvaziamento incompleto", ok: true },
      { t: "Urgência urinária sem alteração intestinal", ok: false },
      { t: "Dor torácica pós-prandial isolada", ok: false }
    ],
    logic: "A aula caracteriza constipação por esforço, evacuação difícil/infrequente e sensação de eliminação incompleta."
  },
  {
    id: "p2-12",
    tags: ["if"],
    stem: "Uma constipação causada por alterações dietéticas, comportamentais ou de coordenação do assoalho pélvico é categorizada na aula como:",
    options: [
      { t: "Orgânica secundária obrigatória", ok: false },
      { t: "Funcional ou primária", ok: true },
      { t: "Doença exclusivamente neurológica", ok: false },
      { t: "Incontinência fecal de 4º grau", ok: false },
      { t: "Processo sem relação com motilidade", ok: false }
    ],
    logic: "Esses mecanismos constam entre os exemplos de constipação funcional ou primária."
  },
  {
    id: "p2-13",
    tags: ["if"],
    stem: "Qual cenário sugere constipação secundária, e não exclusivamente funcional?",
    options: [
      { t: "Problema apenas de posição evacuatória", ok: false },
      { t: "Falta de relaxamento do puborretal sem outra doença", ok: false },
      { t: "Alteração do hábito alimentar isolada", ok: false },
      { t: "Manifestação digestiva associada a doença metabólica sistêmica", ok: true },
      { t: "Ausência de hábitos miccionais adequados", ok: false }
    ],
    logic: "A classificação secundária inclui manifestações digestivas decorrentes de doenças sistêmicas ou metabólicas."
  },
  {
    id: "p2-14",
    tags: ["if"],
    stem: "O reflexo gastrocólico pode ser empregado na reeducação evacuatória ao orientar o paciente a:",
    options: [
      { t: "Tentar evacuar em horário próximo às refeições, respeitando o desejo", ok: true },
      { t: "Evitar evacuar após as refeições", ok: false },
      { t: "Contrair o esfíncter externo por uma hora após qualquer refeição", ok: false },
      { t: "Evacuar apenas em posição supina", ok: false },
      { t: "Suspender a ingestão alimentar matinal Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A alimentação dispara o reflexo gastrocólico; aproveitá-lo ajuda a organizar a rotina evacuatória. Fisioterapia | Avaliação de nível universitário Página 7"
  },
  {
    id: "p2-15",
    tags: ["if"],
    stem: "Uma paciente faz força excessiva com o tronco vertical e pés sem apoio. Qual ajuste postural é coerente com a imagem educativa da aula?",
    options: [
      { t: "Elevar o tronco para extensão máxima e manter pés suspensos", ok: false },
      { t: "Apoiar os pés em elevação e aproximar a posição de agachamento", ok: true },
      { t: "Realizar Valsalva sustentada sem expirar", ok: false },
      { t: "Fechar voluntariamente o ângulo anorretal", ok: false },
      { t: "Evacuar em decúbito ventral", ok: false }
    ],
    logic: "A posição com apoio dos pés e maior flexão de quadris pode facilitar a mecânica evacuatória."
  },
  {
    id: "p2-16",
    tags: ["if"],
    stem: "Qual conjunto contém apenas recursos terapêuticos citados para a incontinência fecal na aula?",
    options: [
      { t: "Imobilização, crioterapia e tração cervical", ok: false },
      { t: "Treino de salto, imobilização e eletrocardiograma", ok: false },
      { t: "Cinesioterapia do assoalho pélvico, biofeedback e eletroestimulação", ok: true },
      { t: "Radioterapia, quimioterapia e cirurgia bariátrica", ok: false },
      { t: "Ventilação invasiva, ultrassonografia e órteses de punho", ok: false }
    ],
    logic: "Os slides enumeram cinesioterapia, biofeedback e eletroestimulação entre as opções fisioterapêuticas."
  },
  {
    id: "p2-17",
    tags: ["if"],
    stem: "A redução ou perda da zona de alta pressão no canal anal está mais diretamente relacionada a:",
    options: [
      { t: "Melhora do mecanismo de continência", ok: false },
      { t: "Fisiopatogenia da incontinência fecal", ok: true },
      { t: "Aumento da função das válvulas de Houston", ok: false },
      { t: "Maior retenção voluntária de fezes", ok: false },
      { t: "Diminuição da propulsão gástrica como explicação única", ok: false }
    ],
    logic: "A perda da zona de alta pressão é apontada como mecanismo fisiopatológico da incontinência fecal."
  },
  {
    id: "p2-18",
    tags: ["if"],
    stem: "Uma paciente tem constipação associada à hipertonia dos músculos pélvicos. Qual cuidado é mais coerente com a proposta da aula?",
    options: [
      { t: "Avaliar o tônus e considerar técnicas de relaxamento, inclusive trabalho manual quando apropriado", ok: true },
      { t: "Prescrever contrações máximas ininterruptas como única conduta", ok: false },
      { t: "Evitar qualquer avaliação funcional do assoalho pélvico", ok: false },
      { t: "Orientar retenção voluntária frequente das fezes", ok: false },
      { t: "Usar técnica de fortalecimento sem investigar capacidade de relaxamento", ok: false }
    ],
    logic: "A aula menciona avaliação por toque e massagem em casos selecionados de hipertonia, além do treino de relaxamento."
  },
  {
    id: "p2-19",
    tags: ["if"],
    stem: "Paciente apresenta urgência evacuatória, contração voluntária preservada do EAE e perda de fezes líquidas. A melhor leitura inicial do caso é:",
    options: [
      { t: "A contração preservada exclui qualquer incontinência", ok: false },
      { t: "Somente alterações musculares do EAE explicam todos os casos", ok: false },
      { t: "A consistência fecal e os mecanismos sensório-esfincterianos devem ser avaliados em conjunto", ok: true },
      { t: "A presença de urgência descarta a necessidade de anamnese", ok: false },
      { t: "O quadro é necessariamente constipação de trânsito lento Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A continência resulta de diversos componentes; consistência fecal, sensibilidade e esfíncteres devem ser considerados."
  },
  {
    id: "p2-20",
    tags: ["if"],
    stem: "No biofeedback destinado à constipação com dificuldade evacuatória, além da coordenação do puborretal, a aula sugere trabalhar:",
    options: [
      { t: "Reconhecimento de diferentes graus de enchimento retal", ok: true },
      { t: "Bloqueio integral do desejo de evacuar", ok: false },
      { t: "Diminuição voluntária permanente do peristaltismo", ok: false },
      { t: "Contração contínua do esfíncter interno", ok: false },
      { t: "Treinamento exclusivo de força do quadríceps Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A aula cita biofeedback para melhorar a percepção de pequenos, médios e grandes graus de enchimento retal."
  },
  {
    id: "p7-01",
    tags: ["if", "revisao"],
    stem: "Uma gestante apresenta constipação, redução da motilidade intestinal e maior tendência à estase urinária. Qual hormônio explica de modo mais direto a combinação dessas alterações descritas na aula?",
    options: [
      { t: "Estrogênio, pela proliferação dos ductos mamários.", ok: false },
      { t: "Prolactina, pela estimulação da produção láctea.", ok: false },
      { t: "Progesterona, pelo relaxamento da musculatura lisa.", ok: true },
      { t: "HCG, por inibir diretamente o peristaltismo.", ok: false },
      { t: "Relaxina, por ativar o reflexo gastrocólico.", ok: false }
    ],
    logic: "A progesterona relaxa a musculatura lisa intestinal e das vias urinárias, favorecendo constipação e estase urinária."
  },
  {
    id: "p7-02",
    tags: ["if", "revisao"],
    stem: "No início da gravidez, qual relação entre hormônio, estrutura-alvo e consequência está correta?",
    options: [
      { t: "HCG — corpo lúteo — manutenção da secreção hormonal no início da gestação.", ok: true },
      { t: "Prolactina — corpo lúteo — interrupção da produção de progesterona.", ok: false },
      { t: "Estrogênio — esfíncter anal externo — relaxamento voluntário.", ok: false },
      { t: "Relaxina — hipófise anterior — produção de HCG.", ok: false },
      { t: "Progesterona — glândula mamária — ejeção imediata do leite.", ok: false }
    ],
    logic: "O HCG mantém a atividade do corpo lúteo, sustentando a produção hormonal necessária no início da gestação."
  },
  {
    id: "p7-06",
    tags: ["if", "revisao"],
    stem: "Sobre prolactina e lactogênio placentário (HPL), assinale a alternativa compatível com a aula.",
    options: [
      { t: "A prolactina é produzida exclusivamente pela placenta.", ok: false },
      { t: "O HPL é o marcador utilizado nos testes de gravidez.", ok: false },
      { t: "A prolactina é secretada pela adeno-hipófise e, com o HPL, participa da função mamária.", ok: true },
      { t: "Ambos são produzidos pelo esfíncter anal interno.", ok: false },
      { t: "A prolactina é responsável pela remodelação do colágeno pélvico. PARTE II — GRAUS DA INCONTINÊNCIA FECAL", ok: false }
    ],
    logic: "A aula descreve a prolactina como hormônio da adeno-hipófise, associado ao HPL no estímulo da produção de leite. PARTE II — GRAUS DA INCONTINÊNCIA FECAL"
  },
  {
    id: "p7-09",
    tags: ["if", "revisao"],
    stem: "Uma paciente apresenta episódios involuntários de perda de fezes líquidas. Qual alternativa representa corretamente o grau descrito no material?",
    options: [
      { t: "1º grau, pois o conteúdo não é sólido.", ok: false },
      { t: "3º grau, por envolver fezes líquidas.", ok: true },
      { t: "2º grau, porque todo escape intestinal é muco.", ok: false },
      { t: "4º grau, independentemente da consistência.", ok: false },
      { t: "Grau zero, pois há evacuação. Revisão direcionada | Fisioterapia em saúde da mulher", ok: false }
    ],
    logic: "O 3º grau corresponde à perda involuntária de fezes líquidas."
  },
  {
    id: "p7-11",
    tags: ["if", "revisao"],
    stem: "Qual sequência reproduz exatamente a ordem dos quatro graus da incontinência fecal apresentada na aula?",
    options: [
      { t: "Muco, gases, fezes sólidas, fezes líquidas.", ok: false },
      { t: "Gases, fezes líquidas, muco, fezes sólidas.", ok: false },
      { t: "Gases, muco, fezes líquidas, fezes sólidas.", ok: true },
      { t: "Fezes líquidas, gases, muco, fezes sólidas.", ok: false },
      { t: "Gases, muco, fezes sólidas, fezes líquidas.", ok: false }
    ],
    logic: "A sequência da aula é gases (1º), muco (2º), fezes líquidas (3º) e fezes sólidas (4º)."
  },
  {
    id: "p8-01",
    tags: ["if", "revisao"],
    stem: "Uma gestante tem constipação e estase urinária. Qual mecanismo hormonal pode contribuir para ambos?",
    options: [
      { t: "Relaxamento da musculatura lisa pela progesterona", ok: true },
      { t: "Contração intestinal intensa pelo HCG", ok: false },
      { t: "Redução da pressão abdominal pela prolactina", ok: false },
      { t: "Contração do puborretal pela relaxina", ok: false },
      { t: "Aumento da força do esfíncter anal pelo estrogênio", ok: false }
    ],
    logic: "A progesterona relaxa a musculatura lisa intestinal e das vias urinárias."
  },
  {
    id: "p8-10",
    tags: ["if", "revisao"],
    stem: "Qual processo se relaciona ao reflexo inibitório retoanal?",
    options: [
      { t: "Contração do esfíncter externo ao tossir", ok: false },
      { t: "Relaxamento reflexo do esfíncter interno diante da distensão retal", ok: true },
      { t: "Contração permanente do puborretal", ok: false },
      { t: "Estimulação do HCG", ok: false },
      { t: "Contração uterina espontânea", ok: false }
    ],
    logic: "A distensão retal desencadeia relaxamento reflexo do esfíncter anal interno."
  },
  {
    id: "pg-01",
    tags: ["if", "revisao"],
    stem: "Durante a avaliação, uma paciente relata que percebe a chegada de conteúdo ao reto, mas consegue adiar a evacuação por alguns minutos. Qual associação entre o reflexo desencadeado pela distensão retal e os mecanismos de continência está correta?",
    options: [
      { t: "A distensão retal desencadeia contração reflexa do esfíncter anal interno, e o esfíncter externo atua apenas durante a evacuação.", ok: false },
      { t: "O reflexo inibitório retoanal contrai o puborretal e elimina a participação do esfíncter anal externo.", ok: false },
      { t: "A distensão retal participa do reflexo inibitório retoanal; o esfíncter anal externo e o puborretal contribuem para adiar a evacuação.", ok: true },
      { t: "O relaxamento do esfíncter anal externo é a resposta obrigatória que mantém a continência após o enchimento retal.", ok: false },
      { t: "A percepção do enchimento retal depende exclusivamente das válvulas de Houston, sem participação esfincteriana.", ok: false }
    ],
    logic: "A aula associa a distensão retal ao reflexo inibitório retoanal e descreve a contribuição do esfíncter anal externo e do puborretal para a continência. A resposta voluntária pode adiar a evacuação."
  },
  {
    id: "pg-06",
    tags: ["if", "revisao"],
    stem: "Paciente com constipação funcional apresenta esforço evacuatório, sensação de esvaziamento incompleto e dificuldade de relaxar o músculo puborretal. Qual estratégia e alteração biomecânica são coerentes com o conteúdo da aula?",
    options: [
      { t: "Treinar contração sustentada do puborretal para diminuir o ângulo anorretal durante a evacuação.", ok: false },
      { t: "Utilizar biofeedback para coordenar o relaxamento do puborretal, favorecendo aumento do ângulo anorretal.", ok: true },
      { t: "Inibir permanentemente o reflexo gastrocólico para reduzir o trânsito intestinal.", ok: false },
      { t: "Fortalecer exclusivamente o esfíncter anal interno, sem investigar a coordenação muscular.", ok: false },
      { t: "Induzir contração simultânea máxima dos músculos abdominais e puborretais em todas as tentativas evacuatórias.", ok: false }
    ],
    logic: "O relaxamento do puborretal aumenta o ângulo anorretal e facilita a passagem das fezes. A aula indica biofeedback para treino de contração/relaxamento e sensibilidade retal."
  },
  {
    id: "pg-16",
    tags: ["if", "revisao"],
    stem: "Paciente A apresenta constipação por incoordenação do assoalho pélvico; paciente B desenvolve constipação associada ao uso de medicamento. Qual classificação etiológica e orientação comportamental estão corretas conforme a aula?",
    options: [
      { t: "A é secundária e B é primária; ambas devem evitar evacuar após as refeições.", ok: false },
      { t: "Ambas são orgânicas; a reeducação evacuatória não considera o reflexo gastrocólico.", ok: false },
      { t: "A é orgânica e B é funcional; o esforço máximo prolongado é recomendado.", ok: false },
      { t: "A é funcional/primária e B é orgânica/secundária; pode-se aproveitar o período após refeições na reeducação evacuatória.", ok: true },
      { t: "Ambas são funcionais; a constipação não se relaciona à coordenação do puborretal.", ok: false }
    ],
    logic: "A aula inclui disfunção do assoalho pélvico na constipação funcional/primária e causas medicamentosas na orgânica/secundária. A reeducação pode aproveitar o reflexo gastrocólico após refeições."
  },
  {
    id: "pg-19",
    tags: ["if", "revisao"],
    stem: "Uma paciente com dificuldade grave de exame ginecológico apresenta medo extremo, tremores, palpitações, hiperventilação e tentativa de fuga. Qual grau da escala de Lamont/Pacik descrita na aula contempla especificamente esse conjunto de respostas?",
    options: [
      { t: "Grau 1, pela cooperação com leve tensão muscular.", ok: false },
      { t: "Grau 2, pela penetração possível sem sedação e desconforto leve.", ok: false },
      { t: "Grau 3, pela ausência de manifestações autonômicas.", ok: false },
      { t: "Grau 4, por definir exclusivamente desconforto vulvar sem medo.", ok: false },
      { t: "Grau 5 de Pacik, pelas respostas psicológicas e fisiológicas intensas associadas ao medo extremo. FISIOTERAPIA PÉLVICA | SIMULADO INTEGRADO", ok: true }
    ],
    logic: "O grau 5 acrescentado por Pacik inclui manifestações intensas como tremores, palpitações, hiperventilação, choro, náuseas, desmaio e fuga/agressão."
  },
  {
    id: "p3-01",
    tags: ["gestacao"],
    stem: "Gestante relata constipação e redução da motilidade intestinal. Qual mecanismo hormonal apresentado na aula melhor explica esses sintomas?",
    options: [
      { t: "Ação da progesterona com relaxamento de musculatura lisa", ok: true },
      { t: "Ativação exclusiva da prolactina sobre o esfíncter anal externo", ok: false },
      { t: "Inibição da relaxina por aldosterona", ok: false },
      { t: "Contração sustentada do útero pelo hCG", ok: false },
      { t: "Ausência de alterações gastrointestinais gestacionais", ok: false }
    ],
    logic: "A progesterona reduz a motilidade e o tônus gastrointestinal, favorecendo constipação."
  },
  {
    id: "p3-02",
    tags: ["gestacao"],
    stem: "A alteração hormonal associada à remodelação do tecido conjuntivo e ao aumento da extensibilidade articular é principalmente:",
    options: [
      { t: "hCG", ok: false },
      { t: "Prolactina", ok: false },
      { t: "Relaxina", ok: true },
      { t: "Insulina", ok: false },
      { t: "Ocitocina exclusivamente", ok: false }
    ],
    logic: "A relaxina atua na remodelação do tecido conjuntivo e na extensibilidade das articulações."
  },
  {
    id: "p3-03",
    tags: ["gestacao"],
    stem: "Uma gestante apresenta sensação de falta de ar leve e maior ventilação, sem sinais adicionais de alarme. Qual sequência da aula descreve o mecanismo fisiológico?",
    options: [
      { t: "Progesterona → estímulo respiratório → maior ventilação → eliminação de CO2", ok: true },
      { t: "Prolactina → redução ventilatória → retenção de CO2", ok: false },
      { t: "Relaxina → paralisia diafragmática → acidose obrigatória", ok: false },
      { t: "hCG → fechamento dos brônquios → hipercapnia", ok: false },
      { t: "Estrogênio → redução irreversível do consumo de oxigênio", ok: false }
    ],
    logic: "O material descreve estímulo do centro respiratório pela progesterona, hiperventilação e maior eliminação de CO2."
  },
  {
    id: "p3-04",
    tags: ["gestacao"],
    stem: "Gestante com edema de extremidades e parestesias em território do nervo mediano apresenta quadro sugestivo de:",
    options: [
      { t: "Neuralgia do trigêmeo", ok: false },
      { t: "Síndrome do túnel do carpo", ok: true },
      { t: "Lesão do nervo radial por fratura", ok: false },
      { t: "Síndrome do piriforme", ok: false },
      { t: "Neuropatia do nervo fibular Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "O edema gestacional pode comprimir o nervo mediano, produzindo quadro de túnel do carpo."
  },
  {
    id: "p3-05",
    tags: ["gestacao"],
    stem: "O sinal de Chadwick mencionado nos slides corresponde principalmente a:",
    options: [
      { t: "Ausência de vascularização vulvovaginal", ok: false },
      { t: "Palidez da mucosa vaginal", ok: false },
      { t: "Coloração cianótica/arroxeada da região vaginal e vulvar", ok: true },
      { t: "Abertura do colo uterino acima de 4 cm", ok: false },
      { t: "Desaparecimento do muco cervical", ok: false }
    ],
    logic: "O aumento da vascularização pode conferir coloração azulada ou arroxeada à mucosa."
  },
  {
    id: "p3-06",
    tags: ["gestacao"],
    stem: "Qual explicação relaciona melhor a chamada anemia fisiológica da gestação ao sistema vascular?",
    options: [
      { t: "Redução completa da massa sanguínea", ok: false },
      { t: "Aumento do volume plasmático e hemodiluição", ok: true },
      { t: "Ausência de circulação uteroplacentária", ok: false },
      { t: "Aumento exclusivo dos leucócitos", ok: false },
      { t: "Cessação da perfusão renal", ok: false }
    ],
    logic: "A expansão plasmática pode exceder proporcionalmente a massa eritrocitária, causando hemodiluição."
  },
  {
    id: "p3-07",
    tags: ["gestacao"],
    stem: "O hCG é descrito como relevante no início da gravidez porque:",
    options: [
      { t: "Suprime imediatamente todas as secreções do corpo lúteo", ok: false },
      { t: "Estimula o corpo lúteo a continuar secretando hormônios", ok: true },
      { t: "Provoca a involução fisiológica da placenta no primeiro trimestre", ok: false },
      { t: "Inibe a manutenção endometrial", ok: false },
      { t: "É produzido exclusivamente pela hipófise", ok: false }
    ],
    logic: "O hCG sustenta a atividade hormonal do corpo lúteo no início da gestação."
  },
  {
    id: "p3-08",
    tags: ["gestacao"],
    stem: "Aula associa a redução das concentrações séricas de ureia e creatinina, na gestação, a:",
    options: [
      { t: "Aumento do fluxo plasmático renal e da filtração glomerular", ok: true },
      { t: "Fechamento funcional dos rins", ok: false },
      { t: "Abolição da diurese fetal", ok: false },
      { t: "Redução obrigatória da perfusão renal", ok: false },
      { t: "Aumento isolado da pressão intratorácica", ok: false }
    ],
    logic: "O fluxo plasmático renal e a filtração glomerular aumentam, alterando esses marcadores."
  },
  {
    id: "p3-09",
    tags: ["gestacao"],
    stem: "A paciente apresenta sensação de peso nas pernas e varicosidades. Qual combinação está de acordo com as medidas citadas no material?",
    options: [
      { t: "Imobilidade absoluta prolongada e restrição hídrica", ok: false },
      { t: "Exercícios metabólicos, repouso adequado e avaliação de meias compressivas", ok: true },
      { t: "Treino pliométrico máximo sem individualização", ok: false },
      { t: "Massagem vigorosa sobre toda variz dolorosa", ok: false },
      { t: "Manutenção contínua de ortostatismo sem pausa Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "O slide menciona medidas como exercícios metabólicos, repouso e meias de compressão para sintomas venosos."
  },
  {
    id: "p3-10",
    tags: ["gestacao"],
    stem: "Em relação à diástase abdominal durante a gestação, a interpretação apresentada é:",
    options: [
      { t: "É sempre indicativa de urgência cirúrgica", ok: false },
      { t: "É um fenômeno fisiológico possível que requer orientação e acompanhamento", ok: true },
      { t: "É prova de ruptura completa do reto abdominal em todas as pacientes", ok: false },
      { t: "Impede qualquer exercício de mobilidade pélvica", ok: false },
      { t: "Não possui relação com mudanças musculoesqueléticas", ok: false }
    ],
    logic: "O material descreve a diástase como fisiológica na gestação, embora mereça cuidados."
  },
  {
    id: "p3-11",
    tags: ["gestacao"],
    stem: "Uma gestante com dor lombopélvica e mudanças de equilíbrio deve ser avaliada considerando:",
    options: [
      { t: "Centro de gravidade inalterado ao longo de toda a gravidez", ok: false },
      { t: "Mudanças no centro de gravidade, na postura e na lordose lombar", ok: true },
      { t: "Anulação de qualquer demanda sobre a musculatura do tronco", ok: false },
      { t: "Redução obrigatória da flexibilidade articular", ok: false },
      { t: "Paralisia da musculatura abdominal como mecanismo universal", ok: false }
    ],
    logic: "O aumento do útero e as adaptações posturais modificam o centro de gravidade e as demandas musculoesqueléticas."
  },
  {
    id: "p3-12",
    tags: ["gestacao"],
    stem: "Qual atividade é coerente com a proposta fisioterapêutica para melhorar funcionalidade do tronco?",
    options: [
      { t: "Treinar apenas apneias prolongadas", ok: false },
      { t: "Excluir movimentos da pelve", ok: false },
      { t: "Associar conscientemente músculos abdominais e assoalho pélvico nas atividades diárias", ok: true },
      { t: "Adotar imobilização das articulações sacroilíacas", ok: false },
      { t: "Evitar qualquer educação sobre postura", ok: false }
    ],
    logic: "Os slides recomendam orientações nas AVDs, estabilização do tronco e coordenação abdominal e perineal."
  },
  {
    id: "p3-13",
    tags: ["gestacao"],
    stem: "Gestante apresenta dificuldade evacuatória. A orientação comportamental descrita no material favorece:",
    options: [
      { t: "Ignorar os reflexos gastrocólico e ortocólico", ok: false },
      { t: "Aproveitar horários e reflexos fisiológicos para estabelecer rotina de evacuação", ok: true },
      { t: "Retardar a evacuação sempre que houver vontade", ok: false },
      { t: "Eliminar o apoio dos pés no vaso sanitário", ok: false },
      { t: "Prescrever contração contínua do puborretal durante o esforço", ok: false }
    ],
    logic: "A abordagem considera hábitos, horários e respeito aos reflexos gastrocólico e ortocólico."
  },
  {
    id: "p3-14",
    tags: ["gestacao"],
    stem: "Sobre o treinamento dos músculos do assoalho pélvico (TMAP) durante a gestação, qual afirmação corresponde ao material?",
    options: [
      { t: "Deve ser excluído de todas as rotinas de exercício", ok: false },
      { t: "Serve apenas para fortalecimento de membros inferiores", ok: false },
      { t: "É proposto para consciência perineal, prevenção de sintomas urinários e recuperação puerperal", ok: true },
      { t: "Substitui toda a avaliação obstétrica", ok: false },
      { t: "É indicado apenas após cesariana Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A aula indica o TMAP como componente de consciência dos músculos pélvicos e prevenção de disfunções. Fisioterapia | Avaliação de nível universitário Página 7"
  },
  {
    id: "p3-15",
    tags: ["gestacao"],
    stem: "A massagem perineal descrita nos slides caracteriza-se por:",
    options: [
      { t: "Deslizamento em U, com foco na extensibilidade lateral do canal vaginal", ok: true },
      { t: "Compressão exclusiva dos quadríceps", ok: false },
      { t: "Aplicação obrigatória de ultrassom abdominal", ok: false },
      { t: "Fortalecimento máximo sem mobilização de tecido", ok: false },
      { t: "Tratamento da glândula mamária", ok: false }
    ],
    logic: "O material descreve deslizamento em U para promover extensibilidade do períneo."
  },
  {
    id: "p3-16",
    tags: ["gestacao"],
    stem: "Segundo a aula, sobre o expansor perineal Epi-No, a alternativa mais adequada é:",
    options: [
      { t: "Há certeza de prevenção de todas as lacerações", ok: false },
      { t: "Não há evidência robusta de prevenção de lacerações, embora possa apoiar percepção e feedback", ok: true },
      { t: "É obrigatório para todas as gestantes", ok: false },
      { t: "Substitui o treinamento respiratório e perineal", ok: false },
      { t: "Sua única função é detectar infecção urinária", ok: false }
    ],
    logic: "A aula ressalta limitação das evidências para prevenção de laceração e possível uso para percepção da descida fetal."
  },
  {
    id: "p3-17",
    tags: ["gestacao"],
    stem: "A vocalização grave durante o trabalho de parto é discutida na aula por seu possível auxílio no:",
    options: [
      { t: "Aumento sustentado da tensão do assoalho pélvico", ok: false },
      { t: "Relaxamento dos músculos do assoalho pélvico", ok: true },
      { t: "Bloqueio total das contrações uterinas", ok: false },
      { t: "Aumento obrigatório da pressão sanguínea", ok: false },
      { t: "Fechamento do canal vaginal", ok: false }
    ],
    logic: "O material relaciona vocalização em tons graves a estratégias de relaxamento perineal."
  },
  {
    id: "p3-18",
    tags: ["gestacao"],
    stem: "Uma gestante apresenta aumento da frequência urinária e histórico de estase urinária. Qual conduta é mais prudente segundo os slides?",
    options: [
      { t: "Presumir que todos os sintomas são infecção sem investigar", ok: false },
      { t: "Avaliar sintomas urinários e considerar a possibilidade de infecção urinária", ok: true },
      { t: "Suspender completamente ingestão de água", ok: false },
      { t: "Iniciar exercício máximo do assoalho pélvico sem avaliação", ok: false },
      { t: "Ignorar sintomas urinários em toda gestação", ok: false }
    ],
    logic: "O material chama atenção para sintomas urinários e para a necessidade de investigar ITU diante de estase."
  },
  {
    id: "p3-19",
    tags: ["gestacao"],
    stem: "Na preparação fisioterapêutica para o parto, qual estratégia reúne princípios coerentes com o conteúdo?",
    options: [
      { t: "Apenas fortalecimento sem treinar relaxamento", ok: false },
      { t: "Educação, consciência corporal, mobilidade pélvica, respiração e relaxamento do assoalho pélvico", ok: true },
      { t: "Restrição universal de qualquer atividade cotidiana", ok: false },
      { t: "Repetição de manobra de Valsalva sustentada como única técnica", ok: false },
      { t: "Uso obrigatório de dispositivos pressóricos para evitar lacerações Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "As propostas da aula combinam educação, mobilidade, respiração e treino funcional e perineal."
  },
  {
    id: "p3-20",
    tags: ["gestacao"],
    stem: "A prolactina, juntamente com o lactogênio placentário, foi relacionada principalmente à:",
    options: [
      { t: "Produção de leite pelas glândulas mamárias", ok: true },
      { t: "Redução do volume mamário na gestação", ok: false },
      { t: "Produção do reflexo retoanal inibitório", ok: false },
      { t: "Aumento isolado da contratilidade do esfíncter anal externo", ok: false },
      { t: "Reabsorção de líquido amniótico pelos rins maternos Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A prolactina e o lactogênio placentário participam da estimulação da produção mamária de leite."
  },
  {
    id: "p7-03",
    tags: ["gestacao", "revisao"],
    stem: "Qual alternativa distingue adequadamente a produção de progesterona no começo da gestação e posteriormente?",
    options: [
      { t: "A placenta produz desde a fecundação e o ovário assume ao final.", ok: false },
      { t: "A hipófise produz até a 8ª semana e o útero assume depois.", ok: false },
      { t: "A prolactina estimula sua produção exclusiva no intestino.", ok: false },
      { t: "O corpo lúteo predomina inicialmente e a placenta assume progressivamente.", ok: true },
      { t: "A relaxina transforma-se em progesterona no segundo trimestre.", ok: false }
    ],
    logic: "A aula descreve produção inicial pelo corpo lúteo e posterior predomínio placentário."
  },
  {
    id: "p7-04",
    tags: ["gestacao", "revisao"],
    stem: "Uma estudante associa remodelação do colágeno, alterações da extensibilidade articular e amadurecimento cervical a um mesmo hormônio. Qual é ele?",
    options: [
      { t: "HCG.", ok: false },
      { t: "Relaxina.", ok: true },
      { t: "Prolactina.", ok: false },
      { t: "Insulina.", ok: false },
      { t: "Ocitocina. Revisão direcionada | Fisioterapia em saúde da mulher", ok: false }
    ],
    logic: "A relaxina é descrita na aula em associação com remodelação do tecido conjuntivo e amadurecimento cervical."
  },
  {
    id: "p7-05",
    tags: ["gestacao", "revisao"],
    stem: "Em uma discussão sobre desenvolvimento mamário e crescimento uterino, qual associação está mais adequada ao conteúdo da aula?",
    options: [
      { t: "HCG — crescimento dos ductos mamários como função principal.", ok: false },
      { t: "Relaxina — produção exclusiva de leite maduro.", ok: false },
      { t: "Progesterona — ejeção de leite pelo reflexo neuroendócrino.", ok: false },
      { t: "Prolactina — aumento primário do tamanho uterino.", ok: false },
      { t: "Estrogênio — crescimento uterino e desenvolvimento dos ductos mamários.", ok: true }
    ],
    logic: "O estrogênio está associado ao crescimento do útero e dos ductos mamários."
  },
  {
    id: "p8-02",
    tags: ["gestacao", "revisao"],
    stem: "Logo após a implantação embrionária, qual hormônio sustenta a atividade secretora do corpo lúteo?",
    options: [
      { t: "Prolactina", ok: false },
      { t: "HCG", ok: true },
      { t: "Ocitocina", ok: false },
      { t: "HPL", ok: false },
      { t: "Estrogênio isoladamente", ok: false }
    ],
    logic: "O HCG sustenta inicialmente a atividade do corpo lúteo."
  },
  {
    id: "p8-03",
    tags: ["gestacao", "revisao"],
    stem: "Qual sequência representa melhor a principal origem da progesterona na gestação?",
    options: [
      { t: "Placenta e depois hipófise", ok: false },
      { t: "Hipófise e depois útero", ok: false },
      { t: "Corpo lúteo e depois placenta", ok: true },
      { t: "Rins e depois placenta", ok: false },
      { t: "Placenta e depois corpo lúteo", ok: false }
    ],
    logic: "O corpo lúteo predomina no início, e posteriormente a placenta assume a produção."
  },
  {
    id: "p8-04",
    tags: ["gestacao", "revisao"],
    stem: "A remodelação do colágeno e a maior extensibilidade dos tecidos pélvicos durante a gestação estão mais associadas a:",
    options: [
      { t: "HCG", ok: false },
      { t: "Prolactina", ok: false },
      { t: "HPL", ok: false },
      { t: "Relaxina", ok: true },
      { t: "Ocitocina Prova 8 — revisão objetiva", ok: false }
    ],
    logic: "A relaxina participa da remodelação do colágeno e do tecido conjuntivo."
  },
  {
    id: "p8-05",
    tags: ["gestacao", "revisao"],
    stem: "Qual pareamento corresponde aos efeitos descritos nas aulas?",
    options: [
      { t: "Estrogênio: crescimento uterino; progesterona: relaxamento da musculatura lisa", ok: true },
      { t: "Estrogênio: redução dos ductos mamários; progesterona: aumento de peristaltismo", ok: false },
      { t: "HCG: ejeção do leite; prolactina: implantação", ok: false },
      { t: "Relaxina: contração ligamentar; HPL: teste de gravidez", ok: false },
      { t: "Progesterona: interrupção da gestação; estrogênio: inibição uterina", ok: false }
    ],
    logic: "Estrogênio estimula crescimento uterino e ductal, e progesterona reduz o tônus da musculatura lisa."
  },
  {
    id: "pg-03",
    tags: ["gestacao", "revisao"],
    stem: "Uma gestante relata constipação, redução da motilidade intestinal e maior predisposição à estase urinária. Qual mecanismo hormonal, conforme a aula, explica melhor a associação desses achados?",
    options: [
      { t: "A relaxina aumenta o peristaltismo e promove contração contínua da musculatura lisa vesical.", ok: false },
      { t: "A progesterona reduz o tônus da musculatura lisa intestinal e urinária, contribuindo para trânsito lento e estase.", ok: true },
      { t: "A prolactina reduz a filtração glomerular e provoca contração sustentada do colo vesical.", ok: false },
      { t: "O hCG bloqueia a absorção intestinal de água e aumenta o esvaziamento vesical.", ok: false },
      { t: "O estrogênio paralisa a musculatura estriada do assoalho pélvico, impedindo a micção. FISIOTERAPIA PÉLVICA | SIMULADO INTEGRADO", ok: false }
    ],
    logic: "A progesterona promove relaxamento da musculatura lisa, com redução do peristaltismo e do tônus das vias urinárias; a aula relaciona esses efeitos à constipação e à estase urinária."
  },
  {
    id: "pg-08",
    tags: ["gestacao", "revisao"],
    stem: "Uma gestante com aproximadamente seis semanas de gestação pergunta por que a produção hormonal do corpo lúteo ainda é importante. Qual alternativa articula corretamente hCG, corpo lúteo e placenta segundo a aula?",
    options: [
      { t: "O hCG interrompe a secreção do corpo lúteo e a placenta já é a única fonte de progesterona desde a fecundação.", ok: false },
      { t: "A prolactina mantém o corpo lúteo e substitui a progesterona durante o primeiro trimestre.", ok: false },
      { t: "A relaxina é o hormônio detectado no beta-hCG e bloqueia a produção placentária.", ok: false },
      { t: "O estrogênio elimina o corpo lúteo antes da implantação para evitar contrações uterinas.", ok: false },
      { t: "O hCG estimula a manutenção da atividade secretora do corpo lúteo; posteriormente, a placenta assume a produção de progesterona.", ok: true }
    ],
    logic: "A aula atribui ao hCG o estímulo do corpo lúteo após implantação. A progesterona é produzida inicialmente pelo corpo lúteo, e a placenta assume posteriormente essa função."
  },
  {
    id: "pg-13",
    tags: ["gestacao", "revisao"],
    stem: "Uma gestante apresenta aumento do fluxo plasmático renal e da taxa de filtração glomerular. Qual conjunto de achados é compatível com as adaptações renais descritas na aula?",
    options: [
      { t: "Redução da filtração, aumento obrigatório da creatinina e ausência de glicosúria.", ok: false },
      { t: "Redução do fluxo renal, aumento da ureia e maior tônus das vias urinárias.", ok: false },
      { t: "Aumento da creatinina sérica como consequência direta do maior fluxo renal.", ok: false },
      { t: "Redução das concentrações de ureia e creatinina, com possibilidade de glicosúria e necessidade de atenção à ITU.", ok: true },
      { t: "Eliminação completa do risco de estase urinária pelo aumento da filtração.", ok: false }
    ],
    logic: "A aula associa o aumento do fluxo renal e da filtração à diminuição de ureia e creatinina e menciona glicosúria. A estase urinária permanece motivo para investigar infecção urinária."
  },
  {
    id: "pg-18",
    tags: ["gestacao", "revisao"],
    stem: "Na preparação fisioterapêutica para o parto, uma gestante pergunta sobre expansor perineal, treinamento do assoalho pélvico e cinta pélvica. Qual orientação é a mais fiel ao conteúdo da aula?",
    options: [
      { t: "O expansor perineal comprovadamente previne todas as lacerações e deve ser prescrito de rotina.", ok: false },
      { t: "Não há evidência robusta apresentada para prevenção de laceração com expansor; TMAP e consciência perineal são abordados, e a cinta não é indicada rotineiramente.", ok: true },
      { t: "O TMAP deve ser evitado em toda gestação, pois impede o relaxamento no parto.", ok: false },
      { t: "A cinta pélvica é obrigatória para toda gestante independentemente de sintomas ou função muscular.", ok: false },
      { t: "A respiração costodiafragmática é contraindicada e deve ser substituída por apneia prolongada.", ok: false }
    ],
    logic: "A aula não apresenta evidência robusta de prevenção de laceração pelo expansor; admite uso para percepção/biofeedback, inclui TMAP e respiração e não recomenda cinta pélvica rotineira."
  },
  {
    id: "pg-20",
    tags: ["gestacao", "revisao"],
    stem: "Após tratamento do câncer de próstata, um paciente apresenta disfunção erétil. Qual associação neurofisiológica está correta segundo o material?",
    options: [
      { t: "Nervos cavernosos: liberação de óxido nítrico e vasodilatação; pudendo: músculos estriados perineais; simpático: detumescência.", ok: true },
      { t: "Nervos cavernosos: contração dos músculos glúteos; pudendo: produção de testosterona; simpático: lubrificação uretral.", ok: false },
      { t: "Nervo pudendo: produção direta de óxido nítrico na próstata; simpático: manutenção exclusiva da ereção.", ok: false },
      { t: "Sistema simpático: relaxamento vascular peniano para iniciar ereção; nervos cavernosos: detumescência.", ok: false },
      { t: "Nervos cavernosos: controle voluntário do reto; nervo pudendo: inibição completa da musculatura perineal. FISIOTERAPIA PÉLVICA | SIMULADO INTEGRADO GABARITO • USO APÓS A PROVA Gabarito e justificativas Respostas confe…", ok: false }
    ],
    logic: "O material atribui aos nervos cavernosos liberação de óxido nítrico e vasodilatação; ao pudendo, controle dos músculos estriados perineais; ao simpático, ação vasoconstritora associada à detumescência."
  },
  {
    id: "p4-01",
    tags: ["sexo"],
    stem: "Ao abordar a sexualidade em atendimento fisioterapêutico, qual alternativa segue a concepção apresentada a partir da OMS?",
    options: [
      { t: "Sexualidade é sinônimo exclusivo de ato sexual", ok: false },
      { t: "A sexualidade é definida apenas pela anatomia genital", ok: false },
      { t: "A sexualidade resulta da interação de dimensões biológicas, psicológicas, sociais e culturais, entre outras", ok: true },
      { t: "Somente pessoas adultas possuem sexualidade", ok: false },
      { t: "Fatores históricos e religiosos não interferem na sexualidade", ok: false }
    ],
    logic: "A aula adota uma concepção multidimensional da sexualidade."
  },
  {
    id: "p4-02",
    tags: ["sexo"],
    stem: "Paciente evita falar sobre dor sexual devido a constrangimento. Qual conduta melhor corresponde às diretrizes iniciais de acolhimento?",
    options: [
      { t: "Insistir em exame físico íntimo imediatamente", ok: false },
      { t: "Empregar escuta qualificada, compromisso e construção de vínculo", ok: true },
      { t: "Encerrar a consulta por ausência de informação", ok: false },
      { t: "Pressupor causa exclusivamente psicológica", ok: false },
      { t: "Desconsiderar as preferências da paciente", ok: false }
    ],
    logic: "O material apresenta escuta qualificada, compromisso e vínculo como pilares do acolhimento."
  },
  {
    id: "p4-03",
    tags: ["sexo"],
    stem: "Segundo a distinção apresentada no material, qual afirmação é correta?",
    options: [
      { t: "Sexualidade equivale sempre à penetração", ok: false },
      { t: "Sexo e sexualidade são termos obrigatoriamente idênticos", ok: false },
      { t: "A sexualidade é construída ao longo da vida e não se reduz ao ato sexual", ok: true },
      { t: "Sexualidade não envolve formas de relacionamento", ok: false },
      { t: "Aprendizado e contexto são irrelevantes", ok: false }
    ],
    logic: "A aula distingue sexualidade, construída nas experiências vividas, do ato sexual propriamente dito."
  },
  {
    id: "p4-04",
    tags: ["sexo"],
    stem: "Uma adolescente recebe informações fragmentadas e não possui espaço para discutir dúvidas. A aula associa essa situação a:",
    options: [
      { t: "Redução automática de vulnerabilidades", ok: false },
      { t: "Maior vulnerabilidade e dificuldade na tomada de decisões seguras", ok: true },
      { t: "Ausência de qualquer impacto sobre comportamento", ok: false },
      { t: "Proteção contra gravidez e IST independentemente de orientação", ok: false },
      { t: "Autonomia imediata sem necessidade de informação Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A ausência de diálogo e informação adequada é descrita como fator que aumenta vulnerabilidades."
  },
  {
    id: "p4-05",
    tags: ["sexo"],
    stem: "Qual combinação de fatores está contemplada na etiologia das disfunções sexuais apresentada na aula?",
    options: [
      { t: "Somente fatores orgânicos", ok: false },
      { t: "Somente transtornos endocrinológicos", ok: false },
      { t: "Fatores psicossociais, comportamentais e orgânicos", ok: true },
      { t: "Exclusivamente idade cronológica", ok: false },
      { t: "Apenas condições do parceiro", ok: false }
    ],
    logic: "O material descreve diversas dimensões envolvidas em disfunções sexuais."
  },
  {
    id: "p4-06",
    tags: ["sexo"],
    stem: "Uma paciente apresenta contração involuntária recorrente do assoalho pélvico que dificulta a penetração e causa sofrimento. Qual termo é utilizado no material?",
    options: [
      { t: "Anorgasmia", ok: false },
      { t: "Vaginismo", ok: true },
      { t: "Ejaculação precoce", ok: false },
      { t: "Cistocele", ok: false },
      { t: "Incontinência fecal", ok: false }
    ],
    logic: "Vaginismo é descrito nos slides por contração involuntária dos músculos pélvicos e dificuldade de penetração."
  },
  {
    id: "p4-07",
    tags: ["sexo"],
    stem: "Uma paciente aceita exame ginecológico com leve tensão muscular, sem impedimento à avaliação. Conforme a escala de Lamont e Pacik apresentada, classifica-se como:",
    options: [
      { t: "Grau 1", ok: true },
      { t: "Grau 2", ok: false },
      { t: "Grau 3", ok: false },
      { t: "Grau 4", ok: false },
      { t: "Grau 5 obrigatório", ok: false }
    ],
    logic: "O grau 1 corresponde à paciente cooperativa com leve tensão, permitindo exame."
  },
  {
    id: "p4-08",
    tags: ["sexo"],
    stem: "Na escala de Lamont e Pacik apresentada, tensão expressiva e resistência que dificultam a penetração, com necessidade de ajuda ou sedação, aproximam-se do:",
    options: [
      { t: "Grau 1", ok: false },
      { t: "Grau 2", ok: false },
      { t: "Grau 3", ok: true },
      { t: "Quadro sem classificação", ok: false },
      { t: "Grau zero", ok: false }
    ],
    logic: "O grau 3 é descrito por resistência muscular significativa que dificulta a penetração."
  },
  {
    id: "p4-09",
    tags: ["sexo"],
    stem: "Paciente refere dor durante a penetração; posteriormente passa a contrair involuntariamente o períneo por antecipação dolorosa. A relação clínica mais compatível é:",
    options: [
      { t: "Dispareunia crônica podendo contribuir para vaginismo", ok: true },
      { t: "Vulvodinia obrigatoriamente causada por prostatite", ok: false },
      { t: "Incontinência fecal causando sempre anorgasmia", ok: false },
      { t: "Dor sexual sem qualquer relação com defesa muscular", ok: false },
      { t: "Ereção reflexa persistente Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A aula menciona que dispareunia crônica pode estar associada ao desenvolvimento de vaginismo."
  },
  {
    id: "p4-10",
    tags: ["sexo"],
    stem: "Uma paciente descreve queimação vulvar localizada à pressão, e a fisioterapeuta planeja identificar os pontos dolorosos. Qual técnica de avaliação foi indicada na aula?",
    options: [
      { t: "Teste de Phalen", ok: false },
      { t: "Mapeamento da dor com cotonete", ok: true },
      { t: "Pad test", ok: false },
      { t: "Escore de Gleason", ok: false },
      { t: "Reflexo cremastérico", ok: false }
    ],
    logic: "O teste com cotonete permite mapear localização e provocação da dor vulvar."
  },
  {
    id: "p4-11",
    tags: ["sexo"],
    stem: "Qual alternativa descreve adequadamente a vulvodinia discutida nos slides?",
    options: [
      { t: "Dor exclusivamente anal após evacuação", ok: false },
      { t: "Desconforto vulvar frequentemente descrito como queimação, podendo ser localizado ou generalizado", ok: true },
      { t: "Ausência obrigatória de qualquer dor", ok: false },
      { t: "Processo exclusivo dos homens", ok: false },
      { t: "Alteração que pode ser classificada apenas pela intensidade urinária", ok: false }
    ],
    logic: "A aula descreve dor/queimação vulvar, com distribuição localizada ou generalizada e dor provocada ou não."
  },
  {
    id: "p4-12",
    tags: ["sexo"],
    stem: "Em paciente com dor à penetração e hipertonia dos músculos do assoalho pélvico, a intervenção mais coerente com o conteúdo é:",
    options: [
      { t: "Priorizar fortalecimento máximo sem avaliar tônus", ok: false },
      { t: "Educação e estratégias individualizadas de relaxamento, terapia manual e consciência corporal", ok: true },
      { t: "Impor dilatação rápida sem consentimento", ok: false },
      { t: "Suspender acolhimento e avaliação funcional", ok: false },
      { t: "Manter contração perineal sustentada continuamente", ok: false }
    ],
    logic: "A aula propõe avaliação funcional e seleção individualizada de recursos, inclusive terapia manual e educação."
  },
  {
    id: "p4-13",
    tags: ["sexo"],
    stem: "Qual recurso é citado como suporte para melhorar a percepção e execução adequada das contrações perineais?",
    options: [
      { t: "Biofeedback", ok: true },
      { t: "Radiografia de crânio", ok: false },
      { t: "Gesso pélvico", ok: false },
      { t: "Espirometria isolada", ok: false },
      { t: "Eletrocardiograma", ok: false }
    ],
    logic: "O biofeedback é citado para aprimorar a percepção e o controle da musculatura pélvica."
  },
  {
    id: "p4-14",
    tags: ["sexo"],
    stem: "A utilização de dilatadores vaginais no cuidado fisioterapêutico, conforme a aula, deve ocorrer:",
    options: [
      { t: "Por imposição profissional, sem orientação", ok: false },
      { t: "De forma individualizada, com acompanhamento e orientação", ok: true },
      { t: "Em todas as pacientes, independentemente de sintomas", ok: false },
      { t: "Apenas em pacientes com disfunção erétil", ok: false },
      { t: "Como substituição obrigatória do acolhimento Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "O material aborda dispositivos com orientação profissional, especialmente para ampliar tolerância e percepção. Fisioterapia | Avaliação de nível universitário Página 6"
  },
  {
    id: "p4-16",
    tags: ["sexo"],
    stem: "No modelo PLISSIT, a etapa de “permissão” corresponde inicialmente a:",
    options: [
      { t: "Prescrever medicamentos sem avaliação", ok: false },
      { t: "Criar espaço seguro para abordar preocupações sexuais", ok: true },
      { t: "Realizar cirurgia imediata", ok: false },
      { t: "Encaminhar todas as pessoas diretamente à terapia intensiva", ok: false },
      { t: "Excluir a participação da paciente nas decisões", ok: false }
    ],
    logic: "A primeira etapa do PLISSIT favorece o diálogo seguro sobre sexualidade."
  },
  {
    id: "p4-17",
    tags: ["sexo"],
    stem: "No PLISSIT, a etapa de “informação limitada” implica:",
    options: [
      { t: "Oferecer informação objetiva e direcionada às necessidades identificadas", ok: true },
      { t: "Evitar qualquer esclarecimento", ok: false },
      { t: "Entregar orientações sem relação com a queixa", ok: false },
      { t: "Exigir relato completo de experiências íntimas", ok: false },
      { t: "Restringir cuidados a exercícios de fortalecimento", ok: false }
    ],
    logic: "Informação limitada significa informação específica e pertinente, sem sobrecarga."
  },
  {
    id: "p4-18",
    tags: ["sexo"],
    stem: "Uma paciente com anorgasmia e redução de percepção genital recebe abordagem voltada a novas experiências sensoriais. Qual finalidade melhor se ajusta aos exercícios sexuais citados na aula?",
    options: [
      { t: "Diminuir a consciência corporal", ok: false },
      { t: "Desenvolver percepção sensorial e experiências associadas ao prazer, não à dor", ok: true },
      { t: "Induzir contrações dolorosas deliberadamente", ok: false },
      { t: "Evitar comunicação com o parceiro", ok: false },
      { t: "Eliminar o componente emocional do tratamento", ok: false }
    ],
    logic: "A aula relaciona exercícios sexuais a experiências sensoriais positivas e maior percepção corporal."
  },
  {
    id: "p4-19",
    tags: ["sexo"],
    stem: "A disfunção erétil, tal como apresentada nos slides, é caracterizada por:",
    options: [
      { t: "Eliminação involuntária de fezes", ok: false },
      { t: "Incapacidade ou dificuldade para obter ou manter ereção suficiente para relação satisfatória", ok: true },
      { t: "Desejo sexual obrigatoriamente ausente", ok: false },
      { t: "Dor exclusivamente vulvar", ok: false },
      { t: "Ausência de ejaculação apenas durante o sono", ok: false }
    ],
    logic: "A definição dada destaca dificuldade de obter/manter ereção satisfatória."
  },
  {
    id: "p4-20",
    tags: ["sexo"],
    stem: "Qual conjunto inclui recursos citados no tópico de fisioterapia masculina?",
    options: [
      { t: "Treinamento do assoalho pélvico, vacuoterapia, eletroestimulação e ondas de choque", ok: true },
      { t: "Massagem linfática cervical e gesso de punho exclusivamente", ok: false },
      { t: "Somente tratamento farmacológico", ok: false },
      { t: "Somente cirurgia peniana", ok: false },
      { t: "Exclusivamente imobilização do períneo Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "O slide de fisioterapia masculina enumera TMAP, vacuoterapia, ultrassom, eletroestimulação e ondas de choque."
  },
  {
    id: "pg-04",
    tags: ["sexo", "revisao"],
    stem: "Uma mulher refere dificuldade persistente de penetração, contração involuntária do assoalho pélvico e reflexo de retirada ao exame, acompanhados de medo e dor. Qual hipótese corresponde mais diretamente ao quadro descrito na aula?",
    options: [
      { t: "Vaginismo, caracterizado por contração involuntária que pode dificultar ou impedir a penetração.", ok: true },
      { t: "Vulvodínia generalizada, definida obrigatoriamente por ausência de contração muscular.", ok: false },
      { t: "Anorgasmia, definida pela impossibilidade mecânica de penetração vaginal.", ok: false },
      { t: "Desejo sexual hipoativo, definido pela contração reflexa do períneo ao toque.", ok: false },
      { t: "Disfunção da excitação, que exige resposta muscular involuntária de fechamento vaginal.", ok: false }
    ],
    logic: "A aula descreve vaginismo como contração involuntária recorrente ou persistente dos músculos do assoalho pélvico, associada à dificuldade de penetração e sofrimento. Dor pode coexistir, mas não define sozinha o quadro."
  },
  {
    id: "pg-09",
    tags: ["sexo", "revisao"],
    stem: "Uma fisioterapeuta deseja acompanhar a evolução de uma paciente com queixas simultâneas de desejo, lubrificação, orgasmo e dor. Qual conjunto reproduz os seis domínios avaliados pelo FSFI na aula?",
    options: [
      { t: "Desejo, excitação, lubrificação, orgasmo, satisfação e dor.", ok: true },
      { t: "Desejo, autoestima, lubrificação, fertilidade, satisfação e dor.", ok: false },
      { t: "Excitação, frequência urinária, orgasmo, humor, sono e dor.", ok: false },
      { t: "Desejo, excitação, sensibilidade anal, orgasmo, fertilidade e dor.", ok: false },
      { t: "Lubrificação, força muscular, excitação, postura, satisfação e ansiedade.", ok: false }
    ],
    logic: "O FSFI, conforme a aula, contempla desejo, excitação, lubrificação, orgasmo, satisfação e dor; não mede diretamente força muscular ou fertilidade."
  },
  {
    id: "pg-14",
    tags: ["sexo", "revisao"],
    stem: "Em atendimento de saúde sexual, a paciente demonstra vergonha de mencionar suas queixas. A fisioterapeuta cria um ambiente seguro para o relato e, depois, fornece explicações objetivas para desfazer uma crença equivocada. Quais etapas do modelo PLISSIT foram aplicadas, na ordem?",
    options: [
      { t: "Sugestões específicas e terapia intensiva.", ok: false },
      { t: "Informação limitada e terapia intensiva.", ok: false },
      { t: "Permissão e informação limitada.", ok: true },
      { t: "Terapia intensiva e sugestões específicas.", ok: false },
      { t: "Permissão e terapia intensiva.", ok: false }
    ],
    logic: "No PLISSIT, P (Permissão) significa criar segurança para conversar; LI (Informação Limitada) significa fornecer explicações objetivas e direcionadas."
  },
  {
    id: "p5-01",
    tags: ["prostata"],
    stem: "Após prostatectomia radical, paciente apresenta perda urinária aos esforços. Uma explicação fisiopatológica consistente com a aula é:",
    options: [
      { t: "O esfíncter uretral permanece sempre funcionalmente intocado", ok: false },
      { t: "A cirurgia pode comprometer mecanismos de continência, exigindo adaptação do assoalho pélvico", ok: true },
      { t: "A próstata produz a maior parte da contração voluntária perineal", ok: false },
      { t: "O problema ocorre somente por hiperatividade intestinal", ok: false },
      { t: "A perda exclui necessidade de avaliação funcional", ok: false }
    ],
    logic: "A cirurgia pode alterar mecanismos de continência; o treinamento busca melhorar o controle muscular adaptado."
  },
  {
    id: "p5-02",
    tags: ["prostata"],
    stem: "Na investigação do câncer de próstata, qual exame confirma histologicamente o diagnóstico, segundo a aula?",
    options: [
      { t: "PSA isolado", ok: false },
      { t: "Toque retal isolado", ok: false },
      { t: "Biópsia prostática", ok: true },
      { t: "Diário miccional", ok: false },
      { t: "Pad test", ok: false }
    ],
    logic: "O diagnóstico histológico é confirmado pela biópsia."
  },
  {
    id: "p5-03",
    tags: ["prostata"],
    stem: "Sobre o PSA, assinale a interpretação mais adequada à explicação dos slides.",
    options: [
      { t: "PSA elevado confirma isoladamente câncer", ok: false },
      { t: "PSA pode estar elevado em alterações benignas e malignas", ok: true },
      { t: "PSA não é produzido pela próstata", ok: false },
      { t: "PSA substitui obrigatoriamente a biópsia", ok: false },
      { t: "PSA é uma medida da força muscular pélvica", ok: false }
    ],
    logic: "O PSA pode aumentar por câncer ou condições benignas; não estabelece diagnóstico isoladamente."
  },
  {
    id: "p5-04",
    tags: ["prostata"],
    stem: "Segundo a abordagem citada do Ministério da Saúde, o rastreamento populacional de homens assintomáticos deve ser compreendido como:",
    options: [
      { t: "Isento de riscos de sobrediagnóstico", ok: false },
      { t: "Recomendado universalmente sem discussão", ok: false },
      { t: "Não recomendado como rotina populacional, considerando benefícios e riscos", ok: true },
      { t: "Obrigatório em qualquer faixa etária", ok: false },
      { t: "Equivalente à biópsia", ok: false }
    ],
    logic: "O material ressalta os riscos de falso positivo, sobrediagnóstico e consequências do tratamento."
  },
  {
    id: "p5-05",
    tags: ["prostata"],
    stem: "O escore de Gleason utiliza principalmente:",
    options: [
      { t: "Apenas dados de continência urinária", ok: false },
      { t: "Padrões histológicos observados ao microscópio", ok: true },
      { t: "Resultado do pad test", ok: false },
      { t: "Quantidade de contrações do assoalho pélvico", ok: false },
      { t: "Somente sintomas urinários Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "O Gleason resulta da avaliação histológica dos padrões tumorais."
  },
  {
    id: "p5-06",
    tags: ["prostata"],
    stem: "Paciente submetido à prostatectomia radical relata orgasmo sem saída de sêmen. A explicação apresentada nos slides é:",
    options: [
      { t: "Ausência obrigatória de toda sensação de orgasmo", ok: false },
      { t: "Remoção da próstata e vesículas seminais, resultando em orgasmo seco", ok: true },
      { t: "Ruptura da bexiga como única causa", ok: false },
      { t: "Efeito inevitável do biofeedback", ok: false },
      { t: "Aumento do volume seminal", ok: false }
    ],
    logic: "O orgasmo seco decorre da remoção de glândulas responsáveis por grande parte do líquido seminal."
  },
  {
    id: "p5-07",
    tags: ["prostata"],
    stem: "No pós-operatório de prostatectomia, uma queixa de disfunção erétil pode relacionar-se especialmente à:",
    options: [
      { t: "Alteração de nervos cavernosos próximos à próstata", ok: true },
      { t: "Lesão obrigatória do nervo mediano da mão", ok: false },
      { t: "Supressão do reflexo gastrocólico", ok: false },
      { t: "Exclusiva alteração da parede do reto", ok: false },
      { t: "Aumento permanente da motilidade do cólon", ok: false }
    ],
    logic: "Os nervos cavernosos passam próximos à próstata e podem ser afetados durante o tratamento."
  },
  {
    id: "p5-09",
    tags: ["prostata"],
    stem: "O IIEF-5, citado no material, destina-se à:",
    options: [
      { t: "Avaliação da gravidade da disfunção erétil", ok: true },
      { t: "Classificação de prolapso vaginal", ok: false },
      { t: "Mensuração de perda de urina por absorvente", ok: false },
      { t: "Identificação de função gastrointestinal", ok: false },
      { t: "Graduação histológica do tumor", ok: false }
    ],
    logic: "O IIEF-5 é usado para triagem e avaliação da função erétil."
  },
  {
    id: "p5-10",
    tags: ["prostata"],
    stem: "O instrumento PERFECT é utilizado no exame perineal para investigar:",
    options: [
      { t: "PSA, estágio tumoral e volume prostático", ok: false },
      { t: "Força, resistência, repetições, contrações rápidas e aspectos funcionais", ok: true },
      { t: "Somente volume de urina perdido", ok: false },
      { t: "Níveis séricos de testosterona", ok: false },
      { t: "Anatomia tumoral por imagem Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A aula descreve Power, Endurance, Repetitions, Fast e itens funcionais de elevação, cocontração e tosse."
  },
  {
    id: "p5-11",
    tags: ["prostata"],
    stem: "Paciente possui contrações rápidas preservadas, mas sustenta a contração por pouco tempo. Qual componente PERFECT está mais diretamente reduzido?",
    options: [
      { t: "Power", ok: false },
      { t: "Endurance", ok: true },
      { t: "Repetitions isoladamente", ok: false },
      { t: "Fast", ok: false },
      { t: "Teste de tosse exclusivamente", ok: false }
    ],
    logic: "Endurance representa o tempo de sustentação da contração."
  },
  {
    id: "p5-12",
    tags: ["prostata"],
    stem: "Em pad test de curta duração descrito na aula, o absorvente apresentou acréscimo de 18 g. A classificação indicada na tabela é:",
    options: [
      { t: "Negativo", ok: false },
      { t: "Leve", ok: false },
      { t: "Moderado", ok: true },
      { t: "Grave", ok: false },
      { t: "Não se aplica porque não existe tabela", ok: false }
    ],
    logic: "Na tabela do teste curto, 11 a 50 g é classificado como perda moderada."
  },
  {
    id: "p5-13",
    tags: ["prostata"],
    stem: "Em pad test de 24 horas, um ganho de 80 g corresponde, segundo a tabela específica do material, a:",
    options: [
      { t: "Continente", ok: false },
      { t: "Leve", ok: false },
      { t: "Moderado", ok: false },
      { t: "Grave", ok: true },
      { t: "Resultado negativo", ok: false }
    ],
    logic: "No protocolo de 24 horas apresentado, valores a partir de 75 g são classificados como graves."
  },
  {
    id: "p5-14",
    tags: ["prostata"],
    stem: "O estudo urodinâmico é descrito na aula como:",
    options: [
      { t: "Exame obrigatório para qualquer paciente com perda urinária", ok: false },
      { t: "Investigação com medidas de pressão vesical e abdominal, indicada conforme necessidade", ok: true },
      { t: "Teste de função sexual autoaplicado", ok: false },
      { t: "Exame que dispensa qualquer instrumentação", ok: false },
      { t: "Prova de força dos músculos glúteos", ok: false }
    ],
    logic: "A avaliação urodinâmica mede pressões e não é necessária para todos os pacientes incontinentes."
  },
  {
    id: "p5-15",
    tags: ["prostata"],
    stem: "Quanto ao momento de iniciar o treinamento do assoalho pélvico no contexto da prostatectomia, o material recomenda:",
    options: [
      { t: "Apenas após cinco anos", ok: false },
      { t: "Possível treinamento pré-operatório e reinício pós-operatório após retirada do cateter", ok: true },
      { t: "Exercitar continuamente com cateter sem orientação", ok: false },
      { t: "Nunca antes da cirurgia", ok: false },
      { t: "Somente quando a incontinência se torna grave Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A aula descreve condicionamento pré-operatório e retomada após remoção do cateter no pós-operatório. Fisioterapia | Avaliação de nível universitário Página 6"
  },
  {
    id: "p5-16",
    tags: ["prostata"],
    stem: "Na prescrição de TMAP após prostatectomia, o princípio enfatizado nos slides é:",
    options: [
      { t: "Aplicar o mesmo número fixo de repetições a todos", ok: false },
      { t: "Individualizar a prescrição conforme avaliação e qualidade da contração", ok: true },
      { t: "Treinar apenas durante apneia", ok: false },
      { t: "Aumentar carga mesmo com dor importante", ok: false },
      { t: "Ignorar capacidade de relaxamento entre contrações", ok: false }
    ],
    logic: "A prescrição deve considerar o desempenho e progressão individual, evitando apenas contar repetições."
  },
  {
    id: "p5-17",
    tags: ["prostata"],
    stem: "O paciente perde urina ao tossir. O recurso conhecido como “The Knack” consiste em:",
    options: [
      { t: "Contrair os músculos pélvicos imediatamente antes e durante o esforço", ok: true },
      { t: "Relaxar totalmente a musculatura antes da tosse", ok: false },
      { t: "Bloquear a expiração após a tosse por 30 segundos", ok: false },
      { t: "Contrair apenas os glúteos depois da perda", ok: false },
      { t: "Diminuir intencionalmente toda a ingesta de água", ok: false }
    ],
    logic: "The Knack consiste na contração antecipatória e durante o aumento da pressão intra-abdominal."
  },
  {
    id: "p5-18",
    tags: ["prostata"],
    stem: "O biofeedback pode ter maior utilidade quando o paciente:",
    options: [
      { t: "Executa contração perfeitamente e não necessita orientação", ok: false },
      { t: "Não percebe bem a musculatura ou compensa com grupos acessórios", ok: true },
      { t: "Possui contraindicação absoluta a qualquer avaliação", ok: false },
      { t: "Apresenta apenas aumento de PSA, sem queixa funcional", ok: false },
      { t: "Não concorda com qualquer estratégia de reabilitação", ok: false }
    ],
    logic: "A aula indica biofeedback para melhorar percepção, coordenação e reduzir uso indevido de músculos acessórios."
  },
  {
    id: "p5-19",
    tags: ["prostata"],
    stem: "De acordo com os slides, a eletroestimulação do assoalho pélvico pode ser considerada especialmente quando:",
    options: [
      { t: "Há recrutamento voluntário eficiente e nenhuma queixa", ok: false },
      { t: "Existe contração muito fraca ou dificuldade importante de recrutamento", ok: true },
      { t: "A cirurgia ainda não foi realizada e não houve avaliação", ok: false },
      { t: "O paciente prefere substituir totalmente o TMAP ativo", ok: false },
      { t: "O objetivo é substituir o acompanhamento oncológico", ok: false }
    ],
    logic: "O material cita eletroestimulação como recurso complementar diante de grande dificuldade de recrutamento; TMAP ativo permanece central."
  },
  {
    id: "p5-20",
    tags: ["prostata"],
    stem: "Paciente pós-prostatectomia apresenta urgência urinária, noctúria e sintomas de bexiga hiperativa. Qual modalidade adicional é mencionada na aula para esse perfil?",
    options: [
      { t: "Neuromodulação tibial ou sacral", ok: true },
      { t: "Imobilização gessada", ok: false },
      { t: "Massagem abdominal exclusiva", ok: false },
      { t: "Treino de retenção fecal", ok: false },
      { t: "Fortalecimento isolado do quadríceps Fisioterapia | Avaliação de nível universitário", ok: false }
    ],
    logic: "A neuromodulação tibial/sacral é apresentada para componentes de urgência e frequência urinária."
  },
  {
    id: "pg-05",
    tags: ["prostata", "revisao"],
    stem: "Após prostatectomia radical, um paciente apresenta perda de urina ao tossir. Em outros momentos, perde urina após desejo súbito e intenso de urinar. Como classificar, respectivamente, os dois mecanismos descritos?",
    options: [
      { t: "Transbordamento e contínua.", ok: false },
      { t: "Urgência e transbordamento.", ok: false },
      { t: "Contínua e esforço.", ok: false },
      { t: "Esforço e urgência.", ok: true },
      { t: "Urgência e esforço.", ok: false }
    ],
    logic: "Perda ao tossir caracteriza incontinência de esforço. Perda associada a necessidade súbita de urinar corresponde ao componente de urgência, conforme a classificação apresentada."
  },
  {
    id: "p7-07",
    tags: ["revisao"],
    stem: "Uma pessoa refere eliminação involuntária apenas de gases, sem relato de perda de muco ou fezes. Segundo os quatro graus apresentados na aula, como classificar?",
    options: [
      { t: "1º grau.", ok: true },
      { t: "2º grau.", ok: false },
      { t: "3º grau.", ok: false },
      { t: "4º grau.", ok: false },
      { t: "Não corresponde à classificação da aula.", ok: false }
    ],
    logic: "Na classificação apresentada, o 1º grau corresponde à perda involuntária de gases."
  },
  {
    id: "p8-07",
    tags: ["revisao"],
    stem: "Paciente perde involuntariamente gases e muco, mas não fezes. Registrando o tipo mais avançado na classificação da Aula 6, qual é o grau?",
    options: [
      { t: "1º", ok: false },
      { t: "2º", ok: true },
      { t: "3º", ok: false },
      { t: "4º", ok: false },
      { t: "Nenhum", ok: false }
    ],
    logic: "A perda de muco corresponde ao segundo grau, ainda que haja escape de gases."
  },
  {
    id: "p8-08",
    tags: ["revisao"],
    stem: "Uma paciente perde fezes líquidas semanalmente; outra perde fezes sólidas uma vez. Segundo os graus didáticos da aula, respectivamente:",
    options: [
      { t: "I e II", ok: false },
      { t: "II e III", ok: false },
      { t: "III e IV", ok: true },
      { t: "IV e III", ok: false },
      { t: "Ambas IV", ok: false }
    ],
    logic: "A aula classifica perdas de fezes líquidas como grau III e sólidas como grau IV."
  },
  {
    id: "p8-09",
    tags: ["revisao"],
    stem: "Uma pessoa tem apenas escape involuntário de flatos. Segundo a classificação apresentada na aula:",
    options: [
      { t: "Não apresenta incontinência", ok: false },
      { t: "Apresenta grau I", ok: true },
      { t: "Apresenta grau II", ok: false },
      { t: "Apresenta grau III", ok: false },
      { t: "Apresenta grau IV Prova 8 — revisão objetiva", ok: false }
    ],
    logic: "A perda de gases caracteriza o primeiro grau na classificação didática."
  },
  {
    id: "p8-15",
    tags: ["revisao"],
    stem: "Duas medidas sucessivas são −1,1 cm e −0,9 cm. Qual mudança de estágio descreve o caso?",
    options: [
      { t: "I para II", ok: true },
      { t: "II para I", ok: false },
      { t: "II para III", ok: false },
      { t: "III para IV", ok: false },
      { t: "Permanece I", ok: false }
    ],
    logic: "−1,1 cm é estágio I e −0,9 cm pertence ao estágio II."
  },
  {
    id: "p8-16",
    tags: ["revisao"],
    stem: "Paciente apresenta ponto mais distal a +2,5 cm. Para confirmar estágio III, qual dado adicional pode ser necessário?",
    options: [
      { t: "Idade gestacional", ok: false },
      { t: "Comprimento vaginal total", ok: true },
      { t: "Nível de prolactina", ok: false },
      { t: "Quantidade de flatos", ok: false },
      { t: "Frequência da amamentação", ok: false }
    ],
    logic: "O limite superior do estágio III depende do comprimento vaginal total."
  },
  {
    id: "pg-10",
    tags: ["revisao"],
    stem: "No teste do absorvente de 24 horas descrito na aula, um paciente apresenta ganho de 74 g. Outro paciente, no mesmo protocolo, apresenta ganho de 75 g. Qual é a interpretação correta?",
    options: [
      { t: "Ambos apresentam incontinência leve.", ok: false },
      { t: "Ambos apresentam incontinência moderada.", ok: false },
      { t: "O primeiro apresenta incontinência leve e o segundo, moderada.", ok: false },
      { t: "O primeiro apresenta incontinência moderada e o segundo, grave.", ok: true },
      { t: "O primeiro apresenta incontinência grave e o segundo, moderada.", ok: false }
    ],
    logic: "Na tabela de 24 horas, 21–74 g corresponde a incontinência moderada, enquanto ≥75 g corresponde a grave. Os limites são diferentes dos do outro protocolo de pad test apresentado."
  },
  {
    id: "pg-11",
    tags: ["revisao"],
    stem: "Em uma mesma semana, uma paciente relata um episódio de perda involuntária de muco e outro de perda involuntária de fezes líquidas. Na classificação didática de quatro graus apresentada na aula, como esses dois episódios são classificados, respectivamente?",
    options: [
      { t: "I e II.", ok: false },
      { t: "III e IV.", ok: false },
      { t: "II e IV.", ok: false },
      { t: "I e III.", ok: false },
      { t: "II e III. FISIOTERAPIA PÉLVICA | SIMULADO INTEGRADO", ok: true }
    ],
    logic: "A graduação didática apresentada diferencia o tipo de material perdido: muco é 2º grau; fezes líquidas, 3º grau. A classificação não é determinada apenas pela frequência dos episódios."
  },
];
