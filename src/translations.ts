export type Language = "en" | "pt";

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      techStack: "Tech Stack",
      projects: "Projects",
      contact: "Contact",
      connect: "Connect",
    },
    hero: {
      available: "Available from Angola",
      tagline: "Building products that people love to use.",
      subline: "Full Stack Developer focused on crafting modern digital experiences using React, Next.js, Node.js and TypeScript.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      connectLabel: "Connect with me",
      portraitAlt: "João Conquia - Professional Developer Portrait",
      avatarLabel: "Your Real Photo Here",
      avatarSub: "Replace the photo file in your project to update automatically with the grayscale-to-color hover effect.",
    },
    about: {
      category: "01 / Philosophy",
      title: "In Pursuit of Simplicity",
      roleLabel: "Full Stack Developer — focused on Frontend Engineering",
      storyTitle: "Behind the code, a story of design, execution, and purpose.",
      storyParagraphs: [
        "I am a developer from Angola who believes that code is merely a tool to solve human problems, and that software should be as beautiful as it is robust.",
        "Specializing in Frontend Engineering, I dedicate my days to crafting fluid interfaces, rich visual systems, and high-performance full-stack architectures. I combine a passion for performance optimization with meticulous attention to detail.",
        "Whether developing responsive UI modules, setting up backend pipelines, or defining interactive brand stories, I approach every pixel with editorial intent: simplicity, balance, and flow."
      ],
      yearsExperience: "Years of Full-Stack Dev Experience",
      shippedProjects: "Shipped Projects & Integrations",
      figureCaption: "Figure 1.0 — Minimalist Workspace Composition & Visual Flow",
    },
    experience: {
      category: "02 / Chapters",
      title: "Professional Journey",
      intro: "Curating high-performance architectures and leading user interface standards.",
      philosophyTitle: "Experience Philosophy",
      philosophyDesc: "My career is guided by deep engineering discipline, precise architectural execution, and continuous optimization of user-facing systems.",
      techCoreTitle: "Technical Core",
      techCoreDesc: "Building modular, reusable systems. Integrating fast client states and reliable server pipelines.",
      history: [
        {
          id: "exp-1",
          role: "Lead Full Stack Developer",
          company: "Tech Angola Initiative",
          location: "Luanda, Angola",
          period: "2023 — Present",
          description: [
            "Pioneering frontend architecture, creating robust component libraries and establishing premium interaction design standards.",
            "Developing high-performance, responsive full-stack modules with Next.js, Node.js, and Supabase.",
            "Optimizing core web vitals and bundle delivery, reducing load times by over 40% across key platforms."
          ]
        },
        {
          id: "exp-2",
          role: "Frontend Engineer",
          company: "Builders Angola Platform",
          location: "Luanda, Angola (Remote)",
          period: "2023",
          description: [
            "Designed and launched the core community interface, enhancing mobile responsiveness and interactive user workflows.",
            "Integrated key third-party developer integrations and client-side dashboards using TailwindCSS and TypeScript.",
            "Collaborated with local tech leaders to deliver clean, engaging layout structures for Angola's premier builder circle."
          ]
        },
        {
          id: "exp-3",
          role: "Full Stack Developer",
          company: "Software Solutions Studio",
          location: "Luanda, Angola",
          period: "2021 — 2023",
          description: [
            "Engineered responsive UI components and unified state-management schemas for diverse client platforms.",
            "Developed secure, scalable RESTful API endpoints and schema pipelines in Node.js, Express, and PostgreSQL.",
            "Maintained pristine codebases through rigorous linting, static analysis, and CI/CD automated deployments."
          ]
        }
      ]
    },
    tech: {
      category: "03 / Tools",
      title: "Technical Arsenal",
      intro: "No progress bars. Pure architectural fluency in modern software engineering frameworks.",
      badgeVerified: "verified",
      techCore: "Core Technology"
    },
    projects: {
      category: "04 / Works",
      title: "Featured Creations",
      intro: "Meticulously crafted interactive layouts combining editorial aesthetics with robust logic.",
      yearLabel: "Year",
      visitSite: "Visit Site",
      repository: "Repository",
      additionalTitle: "Additional Public Repositories",
      additionalSub: "Synchronized from GitHub profile @C0nqu14",
      buildersDesc: "A digital hub and community uniting developers, founders, and creators in Angola. Designed to showcase local talent, spark collaboration, and drive tech innovation across the region.",
      lionsecDesc: "A premium cybersecurity platform representing penetration testing services, vulnerability logs, and defense schemas. Focuses on minimal layouts and security-inspired aesthetics.",
      vocatiDesc: "An interactive, vocational profiling system designed to guide students and professionals toward educational and career paths tailored to their skills and interests.",
      mockups: {
        buildersTitle: "Builders Community",
        buildersOnline: "members online",
        buildersTag: "Angola Talent Directory",
        lionSecTitle: "SECURE MONITOR",
        lionSecStatus: "STATUS: PROTECTED",
        lionSecActive: "ACTIVE SHIELD • MONITORING",
        vocatiTitle: "Vocational Profile",
        vocatiQuestion: "What is your ideal engineering area?",
        vocatiAptitude: "Code Aptitude Score"
      }
    },
    contact: {
      category: "05 / Connect",
      title: "Start a Conversation",
      intro: "Let's build something beautiful together. Open to freelance projects and full-time opportunities.",
      directoryTitle: "Contact Directory",
      directoryDesc: "Feel free to email me directly, schedule a meeting, or message me via any social media. I usually respond within a few hours.",
      emailLabel: "Electronic Mail",
      locationLabel: "Current Coordinates",
      coordinates: "Luanda, Angola",
      elsewhere: "Elsewhere",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Message Details",
      placeholderName: "e.g. John Doe",
      placeholderEmail: "e.g. john@example.com",
      placeholderMessage: "Tell me about your product concept, timeline, or inquiries...",
      successMessage: "Message received. Thank you, I will contact you shortly!",
      sendButton: "Send Message"
    }
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      techStack: "Tecnologias",
      projects: "Projetos",
      contact: "Contacto",
      connect: "Contactar",
    },
    hero: {
      available: "Disponível a partir de Angola",
      tagline: "Construindo produtos que as pessoas adoram usar.",
      subline: "Desenvolvedor Full Stack focado em criar experiências digitais modernas usando React, Next.js, Node.js e TypeScript.",
      viewProjects: "Ver Projetos",
      downloadCv: "Baixar CV",
      connectLabel: "Conecte-se comigo",
      portraitAlt: "João Conquia - Retrato de Desenvolvedor Profissional",
      avatarLabel: "Sua Foto Real Aqui",
      avatarSub: "Substitua o arquivo de foto no seu projeto para atualizar automaticamente com o efeito cinza ao passar o mouse.",
    },
    about: {
      category: "01 / Filosofia",
      title: "Em Busca da Simplicidade",
      roleLabel: "Desenvolvedor Full Stack — focado em Engenharia de Frontend",
      storyTitle: "Por trás do código, uma história de design, execução e propósito.",
      storyParagraphs: [
        "Sou um desenvolvedor de Angola que acredita que o código é meramente uma ferramenta para resolver problemas humanos, e que o software deve ser tão bonito quanto robusto.",
        "Especializado em Engenharia de Frontend, dedico os meus dias a criar interfaces fluidas, sistemas visuais ricos e arquiteturas full-stack de alta performance. Combino a paixão pela otimização com uma atenção meticulosa aos detalhes.",
        "Seja a desenvolver módulos de UI responsivos, a configurar pipelines de backend ou a definir histórias interativas de marca, abordo cada pixel com intenção editorial: simplicidade, equilíbrio e fluidez."
      ],
      yearsExperience: "Anos de Experiência Full-Stack",
      shippedProjects: "Projetos & Integrações Entregues",
      figureCaption: "Figura 1.0 — Composição Minimalista do Espaço de Trabalho",
    },
    experience: {
      category: "02 / Capítulos",
      title: "Percurso Profissional",
      intro: "Desenvolvendo arquiteturas de alto desempenho e liderando padrões de interfaces de utilizador.",
      philosophyTitle: "Filosofia de Trabalho",
      philosophyDesc: "A minha carreira é guiada por uma profunda disciplina de engenharia, execução arquitetónica precisa e otimização contínua de sistemas voltados para o utilizador.",
      techCoreTitle: "Núcleo Técnico",
      techCoreDesc: "Construindo sistemas modulares e reutilizáveis. Integrando estados rápidos no cliente e pipelines de backend altamente confiáveis.",
      history: [
        {
          id: "exp-1",
          role: "Desenvolvedor Full Stack",
          company: "Flix Home",
          location: "Luanda, Angola",
          period: "2023 — Presente",
          description: [
            "Pioneirismo na arquitetura de frontend, criando bibliotecas de componentes robustas e estabelecendo padrões premium de design de interação.",
            "Desenvolvimento de módulos full-stack de alto desempenho com Next.js, Node.js e Supabase.",
            "Otimização das Web Vitals e pacotes de entrega, reduzindo o tempo de carregamento em mais de 40%."
          ]
        },
        {
          id: "exp-2",
          role: "Engenheiro de Frontend",
          company: "Plataforma Builders Angola",
          location: "Luanda, Angola (Remoto)",
          period: "2023",
          description: [
            "Concebi e lancei a interface principal da comunidade, melhorando a responsividade móvel e os fluxos de trabalho interativos.",
            "Integrei integrações chave de desenvolvedores externos e painéis de controlo de clientes usando TailwindCSS e TypeScript.",
            "Colaborei com líderes de tecnologia locais para fornecer estruturas limpas e envolventes para a comunidade de criadores de Angola."
          ]
        },
        {
          id: "exp-3",
          role: "Desenvolvedor Full Stack",
          company: "2B Digital",
          location: "Luanda, Angola",
          period: "2021 — 2023",
          description: [
            "Desenvolvi componentes responsivos de UI e esquemas unificados de gestão de estado para diversas plataformas de clientes.",
            "Desenvolvi endpoints de API RESTful seguros e escaláveis em Node.js, Express e PostgreSQL.",
            "Mantive as bases de código limpas através de análises estáticas rigorosas e pipelines automatizados de CI/CD."
          ]
        }
      ]
    },
    tech: {
      category: "03 / Ferramentas",
      title: "Arsenal Técnico",
      intro: "Sem barras de progresso. Fluência arquitetónica absoluta em frameworks modernos de engenharia de software.",
      badgeVerified: "verificado",
      techCore: "Tecnologia Principal"
    },
    projects: {
      category: "04 / Trabalhos",
      title: "Criações de Destaque",
      intro: "Layouts interativos meticulosamente desenhados, combinando estética editorial com lógica robusta.",
      yearLabel: "Ano",
      visitSite: "Visitar Site",
      repository: "Repositório",
      additionalTitle: "Repositórios Públicos Adicionais",
      additionalSub: "Sincronizados a partir do perfil do GitHub @C0nqu14",
      buildersDesc: "Um hub digital e comunidade que une desenvolvedores, fundadores e criadores em Angola. Projetado para apresentar talentos locais, impulsionar a colaboração e promover a inovação tecnológica.",
      lionsecDesc: "Uma plataforma premium de segurança cibernética que representa serviços de testes de penetração, relatórios de vulnerabilidade e esquemas de defesa.",
      vocatiDesc: "Um sistema interativo de orientação vocacional inteligente concebido para guiar estudantes e profissionais em direção a caminhos educacionais e de carreira adaptados.",
      mockups: {
        buildersTitle: "Comunidade Builders",
        buildersOnline: "membros online",
        buildersTag: "Diretório de Talentos de Angola",
        lionSecTitle: "MONITOR DE SEGURANÇA",
        lionSecStatus: "ESTADO: PROTEGIDO",
        lionSecActive: "ESCUDO ATIVO • MONITORIZANDO",
        vocatiTitle: "Perfil Vocacional",
        vocatiQuestion: "Qual é a sua área de engenharia ideal?",
        vocatiAptitude: "Pontuação de Aptidão de Código"
      }
    },
    contact: {
      category: "05 / Conectar",
      title: "Inicie uma Conversa",
      intro: "Vamos construir algo incrível juntos. Disponível para projetos de freelance e oportunidades de tempo integral.",
      directoryTitle: "Diretório de Contactos",
      directoryDesc: "Sinta-se à vontade para enviar um e-mail diretamente ou mandar uma mensagem através de qualquer rede social. Costumo responder em poucas horas.",
      emailLabel: "Correio Eletrónico",
      locationLabel: "Coordenadas Atuais",
      coordinates: "Luanda, Angola",
      elsewhere: "Outros canais",
      formName: "Seu Nome",
      formEmail: "Seu E-mail",
      formMessage: "Detalhes da Mensagem",
      placeholderName: "ex: João Silva",
      placeholderEmail: "ex: joao@exemplo.com",
      placeholderMessage: "Fale-me sobre o conceito do seu produto, cronograma ou dúvidas...",
      successMessage: "Mensagem recebida com sucesso. Obrigado! Entrarei em contacto em breve.",
      sendButton: "Enviar Mensagem"
    }
  }
};
