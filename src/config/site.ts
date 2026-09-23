/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * ---------------------------------------------------------------
 * Quase todo o conteúdo do site sai deste arquivo.
 * Itens marcados com  // TODO  são placeholders a substituir ou confirmar.
 */

export const site = {
  name: "NGI University",
  fullName: "Núcleo Global de Instrutores",
  url: "https://ngiuniversity.com.br", // TODO: domínio definitivo
  description:
    "Cursos Educador Oficial, Educador Internacional e Educador Elite: o Plano de Carreira NGI para nail designers que querem ensinar, liderar e formar novos profissionais. Com Gizelle Silva, AGRINGA, e Tande Carlos. Certificação com selo MEC em parceria com a FABRANI.",

  // Link oficial de WhatsApp da NGI (mesmo da bio do Instagram)
  whatsappUrl: "https://wa.me/message/43NQ3WEVQTSUJ1",
  // Se quiser mensagens pré-preenchidas por curso, informe o número (DDI + DDD, só dígitos). Ex.: 5583999999999
  whatsapp: "",

  social: {
    instagramNGI: "https://www.instagram.com/nucleoglobal.oficial/",
    instagramGringa: "https://www.instagram.com/agringaa.oficial/",
    instagramTande: "https://www.instagram.com/tandecarlos/",
  },

  email: "contato@ngiuniversity.com.br", // TODO

  certifier: {
    name: "FABRANI",
    fullName: "Faculdade Brasileira de Negócios Inovadores",
    coordinator: "Prof. Me. Elias Evangelista de Souza",
  },
};

/**
 * Link do WhatsApp.
 * - Sem número cadastrado: usa o link oficial (wa.me/message/...). Esse tipo de link não aceita mensagem pronta.
 * - Com número em `site.whatsapp`: abre a conversa já com a mensagem do curso.
 */
export function whatsappLink(message = "Olá! Vim pelo site da NGI University e quero saber mais sobre os cursos da NGI University.") {
  if (!site.whatsapp) return site.whatsappUrl;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "A NGI", href: "#sobre" },
  { label: "Plano de Carreira", href: "#plano-de-carreira" },
  { label: "Cursos", href: "#cursos" },
  { label: "Docentes", href: "#docentes" },
  { label: "Certificação", href: "#certificacao" },
  { label: "Dúvidas", href: "#faq" },
];

export const pillars = [
  {
    kicker: "Técnica",
    title: "Padrão internacional de mesa",
    text: "Naturalidade, construção, arquitetura e correção de falhas com o rigor técnico que o mercado exige de quem ensina.",
  },
  {
    kicker: "Didática",
    title: "Ensinar sem improviso",
    text: "Planejamento de aulas, metodologias de ensino e avaliação de alunos, organizados na Metodologia NGI.",
  },
  {
    kicker: "Carreira",
    title: "Educador como negócio",
    text: "Posicionamento, gestão, vendas e liderança para transformar conhecimento técnico em uma carreira sólida.",
  },
];

export type Course = {
  id: string;
  level: string;
  name: string;
  /** Caminho do selo em /public. null = usa o selo desenhado provisório (SealArt) */
  seal: string | null;
  theme: "oficial" | "internacional" | "elite";
  tagline: string;
  summary: string;
  audience: string;
  facts: { label: string; value: string }[];
  outcomes: string[];
  modules?: { title: string; topics: string[] }[];
  guests?: { name: string; origin: string; text: string; instagram?: string }[];
  highlight?: { title: string; text: string };
  cta: string;
  message: string;
};

export const courses: Course[] = [
  {
    id: "educador-oficial",
    level: "Nível 2",
    name: "Educador Oficial",
    seal: "/images/selo-educador-oficial.png",
    theme: "oficial",
    tagline: "Desenvolva gestão, posicionamento, vendas, criação de cursos, eventos e uma carreira sólida.",
    summary:
      "Uma imersão prática, intensiva e presencial para nail designers que querem atuar na linha de frente da educação no mercado da beleza. A formação traduz técnicas de mesa de alto nível e didática em ferramentas de ensino, unindo conhecimento técnico, pedagógico e postura profissional.",
    audience:
      "Profissionais atuantes em nail design que querem fazer a transição ou se aprimorar na carreira de educador, ensinando com excelência e padronização.",
    facts: [
      { label: "Carga horária", value: "30 horas" },
      { label: "Modalidade", value: "Presencial" },
      { label: "Estrutura", value: "9 módulos" },
      { label: "Certificação", value: "Selo MEC · FABRANI" },
    ],
    outcomes: [
      "Refinar técnicas avançadas de mesa com padrão internacional",
      "Planejar e conduzir aulas de forma lógica e progressiva",
      "Avaliar alunos e dar feedbacks técnicos assertivos",
      "Criar cursos presenciais e online, com material e certificação",
      "Posicionar sua marca, captar alunos e vender",
      "Organizar treinamentos, workshops e imersões",
    ],
    modules: [
      { title: "Mentalidade e carreira do educador", topics: ["O novo papel do educador", "Construção de carreira", "Posicionamento profissional", "Autoridade e propósito"] },
      { title: "Didática, metodologia e aprendizagem", topics: ["Didática para educadores", "Estruturação de aulas", "Metodologias de ensino", "Experiência de aprendizagem"] },
      { title: "Desenvolvimento de cursos", topics: ["Criação de cursos presenciais e online", "Planejamento de conteúdo", "Materiais didáticos e apostilas", "Certificação", "Experiência do aluno"] },
      { title: "Comunicação, oratória e gestão de sala", topics: ["Comunicação de impacto", "Oratória", "Linguagem corporal", "Condução de turmas", "Gestão de conflitos", "Feedback"] },
      { title: "Gestão empresarial do educador", topics: ["Planejamento estratégico", "Processos", "Organização", "Indicadores", "Precificação", "Gestão financeira"] },
      { title: "Marketing, posicionamento e vendas", topics: ["Marca pessoal", "Redes sociais", "Produção de conteúdo", "Captação de alunos", "Estratégias de vendas", "Fidelização"] },
      { title: "Jurídico e contabilidade", topics: ["Contratos", "Direitos autorais", "Uso de imagem", "LGPD", "Formalização", "Tributação", "Nota fiscal", "Obrigações contábeis"] },
      { title: "Eventos, experiência e expansão", topics: ["Organização de treinamentos", "Workshops", "Imersões", "Formaturas", "Experiência do aluno", "Gestão de equipes", "Escalabilidade"] },
      { title: "Projeto final e plano de ação", topics: ["Plano de carreira", "Plano de crescimento", "Metas para 12 meses", "Diagnóstico individual", "Estratégia de implementação"] },
    ],
    cta: "Quero ser Educador Oficial",
    message: "Olá! Quero saber as próximas turmas, datas e valores do curso Educador Oficial da NGI University.",
  },
  {
    id: "educador-internacional",
    level: "Nível 3",
    name: "Educador Internacional",
    seal: "/images/selo-educador-internacional.png",
    theme: "internacional",
    tagline: "Expanda sua atuação, fortaleça sua autoridade e alcance novos mercados.",
    summary:
      "Conectar o educador brasileiro às maiores referências da educação internacional. Em 2026, a NGI University traz ao Brasil a educadora russa Elena Lakutina para uma formação exclusiva de cinco dias, compartilhando sua metodologia, experiência e técnicas reconhecidas mundialmente, sem você sair do Brasil.",
    audience:
      "Educadores que querem aprender diretamente com uma referência internacional e levar padrão global para a própria carreira e para as suas turmas.", // TODO: confirmar pré-requisito
    facts: [
      { label: "Duração", value: "5 dias" },
      { label: "Data", value: "25 a 29 de outubro de 2026" },
      { label: "Local", value: "João Pessoa – PB" },
      { label: "Certificação", value: "Selo MEC · FABRANI" },
    ],
    outcomes: [
      "Aprender diretamente com uma referência internacional do nail design",
      "Conhecer a metodologia, a experiência e as técnicas de Elena Lakutina",
      "Levar padrão internacional para a sua mesa e para as suas aulas",
      "Fortalecer sua autoridade como educador",
      "Expandir sua atuação e alcançar novos mercados",
      "Viver uma experiência internacional sem sair do Brasil",
    ],
    guests: [
      {
        name: "Elena Lakutina",
        origin: "Rússia · Educadora internacional convidada",
        text: "Conduz a formação exclusiva, compartilhando metodologia, experiência e técnicas reconhecidas mundialmente.",
        instagram: "https://www.instagram.com/lakutinaelena/",
      },
    ],
    highlight: {
      title: "Formação exclusiva em 2026",
      text: "Cinco dias de formação em João Pessoa, de 25 a 29 de outubro, com Elena Lakutina e a curadoria de AGRINGA e Tande Carlos.",
    },
    cta: "Quero ser Educador Internacional",
    message: "Olá! Quero saber valores e condições do Educador Internacional com Elena Lakutina (25 a 29 de outubro, João Pessoa).",
  },
  {
    id: "educador-elite",
    level: "Nível 4",
    name: "Educador Elite",
    seal: "/images/selo-educador-elite.png",
    theme: "elite",
    tagline: "Lidere. Expanda. Influencie. Desenvolva novos educadores.",
    summary:
      "O nível mais alto do Plano de Carreira NGI. Uma imersão presencial focada em liderança, mentoria de novos educadores, auditoria da Metodologia NGI e gestão de resultados, que termina em uma banca de certificação.",
    audience:
      "Educadores que já trilharam o Plano de Carreira NGI e querem liderar equipes, formar outros educadores e representar a metodologia com excelência.", // TODO: confirmar pré-requisito
    facts: [
      { label: "Carga horária", value: "30 horas" },
      { label: "Modalidade", value: "Presencial" },
      { label: "Estrutura", value: "8 módulos" },
      { label: "Certificação", value: "Selo MEC + Banca Elite" },
    ],
    outcomes: [
      "Diagnosticar sua performance e montar um Plano Individual de Desenvolvimento",
      "Liderar e formar equipes de alta performance",
      "Conduzir mentorias e desenvolver novos educadores",
      "Auditar a aplicação da Metodologia NGI e corrigir desvios",
      "Gerir indicadores de carreira, alunos, cursos e eventos",
      "Representar a NGI com ética, postura e visão de expansão",
    ],
    modules: [
      { title: "Diagnóstico e performance profissional", topics: ["Apresentação do portfólio profissional", "Análise da evolução desde o NGI Educador", "Indicadores de desempenho", "Diagnóstico dos pontos fortes e oportunidades de melhoria", "Plano Individual de Desenvolvimento (PID)"] },
      { title: "Liderança de excelência", topics: ["Liderança estratégica", "Formação de equipes de alta performance", "Comunicação para líderes", "Inteligência emocional", "Gestão de conflitos", "Tomada de decisão"] },
      { title: "Mentoria e desenvolvimento de educadores", topics: ["Condução de mentorias", "Acompanhamento da evolução dos alunos", "Feedback de alto impacto", "Formação de novos líderes", "Desenvolvimento contínuo"] },
      { title: "Auditoria da Metodologia NGI", topics: ["Padronização do ensino", "Aplicação correta da metodologia", "Avaliação da experiência do aluno", "Indicadores de qualidade", "Correção de desvios"] },
      { title: "Gestão de resultados", topics: ["Crescimento da carreira", "Desenvolvimento dos alunos", "Organização de cursos e eventos", "Indicadores de performance", "Planejamento estratégico"] },
      { title: "Representatividade institucional", topics: ["Ética profissional", "Cultura e valores da NGI", "Postura institucional", "Relacionamento com parceiros", "Expansão da marca"] },
      { title: "Laboratório Elite", topics: ["Ministrar uma aula", "Conduzir uma mentoria", "Resolver estudos de caso", "Liderar uma equipe", "Apresentar um projeto estratégico", "Defender decisões perante a banca"] },
      { title: "Banca de certificação Elite", topics: ["Critérios: trajetória, aplicação da Metodologia NGI, resultados (carreira, alunos e projetos) e liderança (formação de pessoas, ética e influência positiva)", "Concessão do título NGI Educador Elite"] },
    ],
    highlight: {
      title: "Um título que se conquista",
      text: "O título NGI Educador Elite é concedido apenas a quem demonstra excelência em trajetória, aplicação da metodologia, resultados e liderança diante da banca.",
    },
    cta: "Quero ser Educador Elite",
    message: "Olá! Quero saber as próximas turmas, datas e valores do curso Educador Elite da NGI University.",
  },
];

/** Plano de Carreira NGI: os quatro níveis (post do Instagram @nucleoglobal.oficial) */
export const careerPlan = [
  { level: "Nível 1", name: "Educador", text: "Aprenda a ensinar com comunicação, didática e postura.", href: null as string | null, color: "#2f4f9f" }, // TODO: incluir curso "Educador NGI" (27 a 30/11) no site?
  { level: "Nível 2", name: "Educador Oficial", text: "Desenvolva gestão, posicionamento, vendas, criação de cursos, eventos e uma carreira sólida.", href: "#educador-oficial", color: "#16623f" },
  { level: "Nível 3", name: "Educador Internacional", text: "Expanda sua atuação, fortaleça sua autoridade e alcance novos mercados.", href: "#educador-internacional", color: "#6b4a82" },
  { level: "Nível 4", name: "Educador Elite", text: "Lidere. Expanda. Influencie. Desenvolva novos educadores. Construa um legado que ultrapassa a sala de aula.", href: "#educador-elite", color: "#7c1a30" },
];

export const faculty = {
  founders: [
    {
      name: "Gizelle Silva",
      alias: "AGRINGA",
      role: "Fundadora · Nail designer e educadora",
      bio: "Referência nacional em nail design e especialista em Soft Gel, Banho de Gel e Blindagem. Começou como profissional construindo o próprio caminho e hoje presenteia alunas do Plano de Carreira e prestigia as escolas das suas mentoradas. Sua didática une alto padrão estético e otimização do tempo de mesa, e é dela o desenvolvimento dos materiais didáticos da NGI.",
      quote: "Legado construído através da educação.",
      image: "/images/gizelle-silva.jpg" as string | null,
      instagram: site.social.instagramGringa,
    },
    {
      name: "Tande Carlos",
      alias: "Mentor de negócios",
      role: "Fundador · Mentor, palestrante e gestor",
      bio: "Fundador da NGI University, mentor de mentalidade e liderança. Profissional da beleza há mais de dez anos, decidiu em 2022 sair dos bastidores e liderar de frente: passou a ensinar não só técnica, mas mentalidade. Hoje prepara profissionais para otimizar o fluxo de trabalho e transformar conhecimento técnico em negócios altamente lucrativos.",
      quote: "Preparo profissionais da beleza para liderar, ensinar e transformar conhecimento em negócio.",
      image: "/images/tande-carlos.jpg" as string | null,
      instagram: site.social.instagramTande,
    },
  ],
  team: [
    {
      name: "Mariana Sena", // TODO: no PPC aparece também como "Marina Sena". Confirmar.
      role: "Especialista e educadora internacional",
      bio: "Técnica Russa, Fibra de Vidro e Moldes Avançados (F1 e Russo), com foco rigoroso no alinhamento técnico perfeito.",
      image: null as string | null,
    },
    {
      name: "Tatilene Silva",
      role: "Instrutora Master",
      bio: "Molde F1, Unhas em Gel e Nail Art Avançada: decorações complexas e tridimensionais com alta naturalidade.",
      image: null as string | null,
    },
    {
      name: "Luana Linhares",
      role: "Gestão e posicionamento",
      bio: "Precificação correta, gestão financeira e posicionamento estratégico nas redes para atrair e fidelizar clientes.",
      image: null as string | null,
    },
  ],
};

export const certification = [
  { title: "Extensão universitária", text: "Os cursos da NGI University são de extensão universitária, com projeto pedagógico da FABRANI, Faculdade Brasileira de Negócios Inovadores, e certificação com selo MEC." },
  { title: "Avaliação", text: "Questionário ao final do curso, com correção na hora. Em caso de reprovação, há exame com análise de caso concreto (nota mínima 7,0)." },
  { title: "Material e plataforma", text: "Apostila e slides. As aulas ao vivo ficam gravadas na plataforma EaD, com acesso enviado antes do início do curso." },
  { title: "Certificado", text: "Cumpridos todos os módulos e aprovado em todas as etapas, o aluno recebe o certificado de extensão universitária. No Elite, o título é concedido pela banca." },
];

export const faq = [
  {
    q: "Qual a diferença entre os cursos?",
    a: "Eles são níveis do Plano de Carreira NGI. O Educador Oficial forma para ensinar e empreender: didática, criação de cursos, oratória, gestão, marketing, jurídico e eventos. O Educador Internacional conecta você a uma referência mundial, Elena Lakutina, em cinco dias de formação. O Educador Elite é o topo: liderar e formar outros educadores, com auditoria da Metodologia NGI e banca de certificação.",
  },
  {
    q: "Preciso já trabalhar com unhas?",
    a: "Sim. Os cursos são indicados para profissionais atuantes na área da beleza e de nail design.",
  },
  {
    q: "Preciso fazer os níveis em ordem?",
    a: "Os cursos seguem a ordem do Plano de Carreira NGI. Fale com a equipe para avaliar o seu momento e o nível certo para você.", // TODO: confirmar regra
  },
  {
    q: "As aulas são presenciais?",
    a: "Sim. Educador Oficial e Educador Elite têm 30 horas presenciais cada, com aulas ao vivo gravadas na plataforma EaD. O Educador Internacional acontece em João Pessoa (PB), de 25 a 29 de outubro de 2026.",
  },
  {
    q: "O certificado tem reconhecimento do MEC?",
    a: "A certificação tem selo MEC e é feita em parceria com a FABRANI, Faculdade Brasileira de Negócios Inovadores, que assina o projeto pedagógico dos cursos de extensão. O certificado é emitido após a aprovação em todas as etapas.",
  },
  {
    q: "Quais são as datas, valores e formas de pagamento?",
    a: "Chame a equipe no WhatsApp: enviamos as próximas turmas, o local, os valores e as condições.", // TODO: se quiser, informar aqui
  },
];

/** Vitrine do Instagram (imagens estáticas em /public/images/instagram — troque quando quiser atualizar) */
export const instagramFeed = {
  handle: "nucleoglobal.oficial",
  name: "NGI | UNIVERSITY",
  bio: "A Universidade dos Grandes Educadores. Metodologias nacionais e internacionais · Extensão universitária MEC.",
  url: "https://www.instagram.com/nucleoglobal.oficial/",
  posts: [
    { img: "/images/instagram/post-1.jpg", url: "https://www.instagram.com/nucleoglobal.oficial/p/Da4DlrYtsKo/", alt: "Educador Internacional, 25 a 29 de outubro de 2026, João Pessoa" },
    { img: "/images/instagram/post-2.jpg", url: "https://www.instagram.com/nucleoglobal.oficial/p/DccFWH_NkWT/", alt: "Educador NGI, 27 a 30 de novembro de 2026, João Pessoa" },
    { img: "/images/instagram/post-3.jpg", url: "https://www.instagram.com/nucleoglobal.oficial/p/DcTr8nrFU3T/", alt: "Até onde a sua profissão pode te levar?" },
    { img: "/images/instagram/post-4.jpg", url: "https://www.instagram.com/nucleoglobal.oficial/p/DcOhIWnFfLW/", alt: "Plano de Carreira NGI" },
    { img: "/images/instagram/post-5.jpg", url: "https://www.instagram.com/nucleoglobal.oficial/p/Da3mZVVNPJB/", alt: "O legado: NGI e Business & Art" },
    { img: "/images/instagram/post-6.jpg", url: "https://www.instagram.com/nucleoglobal.oficial/p/Da2lyKvldG2/", alt: "Toda grande carreira precisa de um caminho" },
  ],
};
