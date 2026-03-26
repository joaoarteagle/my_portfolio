import type { Language } from '../context/LanguageContext';

export interface Translations {
  nav: {
    skills: string;
    aboutMe: string;
    home: string;
    projects: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
  };
  aboutMe: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  skills: {
    designer: {
      title: string;
      description: string;
      tools: string;
    };
    code: {
      title: string;
      description: string;
      stacks: string;
    };
  };
  projects: {
    project1: {
      name: string;
      description: string;
    };
    project2: {
      name: string;
      description: string;
    };
    project3: {
      name: string;
      description: string;
    };
  };
  contact: {
    title: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    configErrorMessage: string;
    contactInfoText: string;
    hiringMessage: string;
  };
  languageSwitcher: {
    portuguese: string;
    english: string;
    tooltip: string;
  };
}

const ptBR: Translations = {
  nav: {
    skills: 'Habilidades',
    aboutMe: 'Sobre Mim',
    home: 'Início',
    projects: 'Projetos',
    contact: 'Contato',
  },
  home: {
    title: 'DESENVOLVEDOR FULL-STACK',
    subtitle: 'João Paulo Andrade',
  },
  aboutMe: {
    paragraph1: 'Sou graduando em Engenharia de Software e pós-graduando em Desenvolvimento de Sistemas com Java, focado no desenvolvimento frontend.',
    paragraph2: 'Trabalho principalmente com React, TypeScript e Tailwind CSS, construindo interfaces responsivas, limpas e amigáveis ao usuário.',
    paragraph3: 'Tenho experiência em projetos reais como freelancer e dentro de equipes de desenvolvimento, sempre buscando código bem estruturado e soluções que realmente agregam valor para os usuários. Sou curioso, colaborativo e em constante evolução como desenvolvedor.',
  },
  skills: {
    designer: {
      title: 'Designer',
      description: 'Gosto de criar meus designs com uma estrutura meio simples, mas com um toque único.',
      tools: 'Ferramentas',
    },
    code: {
      title: 'Código',
      description: 'Sempre procuro melhorar minha forma de resolver problemas porque é muito importante para codificar efetivamente.',
      stacks: 'Tecnologias',
    },
  },
  projects: {
    project1: {
      name: 'Projeto Squirtle',
      description: 'Um projeto de uma Landing Page sobre um Pokemon chamado Squirtle. Uma página moderna e responsiva desenvolvida com foco em design atrativo e funcionalidade.',
    },
    project2: {
      name: 'Projeto Java SpringBoot',
      description: 'Desenvolvido com Java SpringBoot, CRUD completo de listagem de contatos com validador de dados. Uma aplicação robusta para gerenciamento de informações.',
    },
    project3: {
      name: 'AQUI📍',
      description: 'Um projeto inovador de localização e mapeamento. Sistema desenvolvido para facilitar a navegação e localização de pontos específicos.',
    },
  },
  contact: {
    title: 'Contato',
    description: 'Vamos conversar! Deixe seus dados abaixo que entrarei em contato.',
    namePlaceholder: 'Seu Nome',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Telefone',
    sendButton: 'Enviar',
    sending: 'Enviando...',
    successMessage: '✓ Mensagem enviada com sucesso! Obrigado pelo contato.',
    errorMessage: '✗ Erro ao enviar mensagem. Tente novamente.',
    configErrorMessage: '✗ Configure o EmailJS antes de enviar mensagens.',
    contactInfoText: 'Ou me encontre em:',
    hiringMessage: 'Vi que voce tem interesse em me contratar.',
  },
  languageSwitcher: {
    portuguese: 'Português',
    english: 'English',
    tooltip: 'Alterar idioma',
  },
};

const enUS: Translations = {
  nav: {
    skills: 'Skills',
    aboutMe: 'About Me',
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
  },
  home: {
    title: 'FULL-STACK DEVELOPER',
    subtitle: 'João Paulo Andrade',
  },
  aboutMe: {
    paragraph1: "I'm a Software Engineering undergraduate and a postgraduate student in Systems Development with Java, focused on frontend development.",
    paragraph2: 'I mainly work with React, TypeScript, and Tailwind CSS, building responsive, clean, and user-friendly interfaces.',
    paragraph3: 'I have experience in real-world projects as a freelancer and within development teams, always aiming for well-structured code and solutions that truly add value for users. I\'m curious, collaborative, and constantly evolving as a developer.',
  },
  skills: {
    designer: {
      title: 'Designer',
      description: 'I like to create my designs with a somewhat simple structure, but with a unique touch.',
      tools: 'Tools',
    },
    code: {
      title: 'Code',
      description: "I always try to improve my way of solving problems because it's so important for code effectively.",
      stacks: 'Stacks',
    },
  },
  projects: {
    project1: {
      name: 'Squirtle Project',
      description: 'A Landing Page project about a Pokemon called Squirtle. A modern and responsive page developed with focus on attractive design and functionality.',
    },
    project2: {
      name: 'Java SpringBoot Project',
      description: 'Developed with Java SpringBoot, complete CRUD for contact listing with data validator. A robust application for information management.',
    },
    project3: {
      name: 'AQUI📍',
      description: 'An innovative location and mapping project. System developed to facilitate navigation and location of specific points.',
    },
  },
  contact: {
    title: 'Contact',
    description: 'Let\'s talk! Leave your information below and I\'ll get in touch.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Phone',
    sendButton: 'Send',
    sending: 'Sending...',
    successMessage: '✓ Message sent successfully! Thank you for reaching out.',
    errorMessage: '✗ Error sending message. Please try again.',
    configErrorMessage: '✗ Configure EmailJS before sending messages.',
    contactInfoText: 'Or find me at:',
    hiringMessage: 'I noticed that you are interested in hiring me.',
  },
  languageSwitcher: {
    portuguese: 'Português',
    english: 'English',
    tooltip: 'Change language',
  },
};

export const translations: Record<Language, Translations> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export default translations;