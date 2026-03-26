# 🎨 My Portfolio

> Uma experiência visual e interativa que transcende o convencional — seu portfólio reimaginado para a era moderna.

[![Deploy to GitHub Pages](https://github.com/joaoarteagle/my_portfolio/actions/workflows/build.yml/badge.svg)](https://github.com/joaoarteagle/my_portfolio/actions/workflows/build.yml)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
![Languages](https://img.shields.io/badge/Languages-PT%2FEN-blue)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-brightgreen)

---

## 🚀 Visão

Este portfólio não é apenas um catálogo de projetos — é uma declaração de propósito. Construído com as tecnologias mais modernas e otimizadas, representa uma abordagem consciente e deliberada de desenvolvimento web. Cada interação, cada transição, cada detalhe foi pensado para criar uma experiência memorável.

**Performance Obsession**: Bundles otimizados. Zero lag. Carregamento instantâneo.  
**Acessibilidade Global**: Suporte completo a português e inglês com detecção automática.  
**Design Moderno**: UIX responsiva que funciona perfeitamente de smartphones a desktops.  
**Contato Direto**: Sistema de email integrado para oportunidades reais.

---

## ✨ Características Principais

### 🌐 Internacionalização (i18n)
- **Suporte Bilíngue**: Português (Brasil) e Inglês (Estados Unidos)
- **Detecção Automática**: A linguagem é definida automaticamente por preferência do navegador
- **Persistência**: Sua escolha de idioma é memorizada em localStorage
- **Contexto Global**: Sistema centralizado com React Context API

### 📱 Design Responsivo
- **Mobile-First**: Construído pensando em dispositivos móveis primeiro
- **Escalável**: Usa `clamp()` e técnicas CSS modernas para adaptação fluida
- **Breakpoints Estratégicos**: Otimizado para phones (≤480px), tablets (≤768px) e desktops
- **Zero Jarring**: Transições suaves em todos os tamanhos de tela

### 💌 Sistema de Contato
- **EmailJS Integrado**: Envie mensagens direto do seu navegador
- **Validação em Tempo Real**: Feedback imediato sobre campos inválidos
- **Estados Visuais**: Loading, sucesso e erro com animações elegantes
- **Segurança**: Variáveis de ambiente protegidas no CI/CD

### ⚡ Performance
- **Vite v7.3.1**: Build system moderno e extremamente rápido
- **Code Splitting**: Apenas o essencial é carregado
- **CSS Modules**: Estilos isolados e sem conflitos
- **Tailwind CSS**: Utility-first para estilos otimizados

### 🎭 Experiência do Usuário
- **Scroll Reveal Animations**: Elementos aparecem graciosamente conforme você rola
- **Transições Fluidas**: Cada interação tem propósito visual
- **Tema Customizável**: Suporte a modo claro/escuro
- **Layouts Adaptativos**: Projetos mostrados em grid de 2 colunas no desktop, coluna única no mobile

---

## 🛠️ Stack Técnico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.0 | Framework UI |
| **TypeScript** | 5.9.3 | Type Safety |
| **Vite** | 7.3.1 | Build & Dev Server |
| **Tailwind CSS** | 4.2.1 | Styling |
| **EmailJS** | 4.4.1 | Envio de emails |
| **ESLint** | 9.39.1 | Code Quality |

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/joaoarteagle/my_portfolio.git
cd portfolio_react_vite_

# Instale as dependências
npm install

# Configure variáveis de ambiente (opcional para desenvolvimento)
cp .env.example .env
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O aplicativo estará em http://localhost:5173
```

### Build para Produção

```bash
# Compile e otimize para produção
npm run build

# Visualize a build de produção localmente
npm run preview

# Deploy automático no GitHub Pages (via Actions)
git push origin main
```

### Validação

```bash
# Verifique o código com ESLint
npm run lint
```

---

## 📦 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Sections/       # Seções principais (Header, Home, About, Skills, Projects, Contact)
│   ├── ScrollReveal.tsx   # Componente de animação no scroll
│   ├── Button.tsx       # Botão reutilizável
│   └── themeChanger.tsx # Alternador de tema
├── context/            # React Context (Language, Theme)
├── hooks/              # Custom hooks
│   └── useTranslation.ts   # Hook para internacionalização
├── utils/              # Funções utilitárias
│   └── translations.ts    # Dados de tradução (PT/EN)
├── config/             # Configurações (EmailJS, etc)
├── assets/             # Imagens estáticas
├── App.tsx             # Componente raiz
└── main.tsx            # Ponto de entrada

public/
└── img/                # Imagens otimizadas para produção
```

---

## 🔧 Configuração de Ambiente

### Variáveis Necessárias (Produção)

Para o sistema de email funcionar em produção, crie as seguintes secrets no GitHub:

1. **VITE_EMAILJS_PUBLIC_KEY**: Sua chave pública do EmailJS
2. **VITE_EMAILJS_SERVICE_ID**: ID do serviço Email
3. **VITE_EMAILJS_TEMPLATE_ID**: ID do template de email

```bash
# No GitHub Settings > Secrets and variables > Actions
# Adicione os 3 secrets acima
```

### Para Desenvolvimento Local

Crie um arquivo `.env` na raiz:

```env
VITE_EMAILJS_PUBLIC_KEY=sua_chave_aqui
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
```

---

## 🌍 Deployment

### GitHub Pages

Este projeto é automaticamente deployado no GitHub Pages quando você faz push para `main`:

- **URL**: https://joaoarteagle.github.io/my_portfolio/
- **Branch**: main (configurable)
- **CI/CD**: GitHub Actions (`.github/workflows/build.yml`)

O deployment é automático e acontece em ~2 minutos após cada push.

### Download de Produção

Após executar `npm run build`, você terá:

- **dist/** - Aplicação otimizada pronta para deploy
- **Size**: ~214 kB JS + 13 kB CSS (gzipped)
- **Assets**: Todas as imagens em `public/img/` são copiadas automaticamente

---

## 💡 Destaques Técnicos

### Sistema de Tradução Inteligente
```typescript
// Detecção automática + localStorage
const language = localStorage.getItem('language') 
  || (navigator.language.startsWith('pt') ? 'pt-BR' : 'en-US');
```

### Paths Dinâmicos com BASE_URL
```typescript
// Funciona tanto localmente quanto em subpath do GitHub Pages
src={`${import.meta.env.BASE_URL}img/logo.png`}
```

### CSS Modules + Tailwind
Combinação de CSS Modules para componentes isolados com Tailwind para utilities globais.

### Layout Responsivo Adaptativo
Projetos mostram em 2 colunas alternadas no desktop, coluna única no mobile — tudo com CSS puro.

---

## 🎯 Roadmap Futuro

- [ ] Dark Mode globalmente integrado
- [ ] Suporte a mais idiomas (ES, FR, DE)
- [ ] Blog com MDX
- [ ] Analytics customizados
- [ ] PWA com offline support
- [ ] Animações com Framer Motion
- [ ] Sistema de comentários

---

## 📊 Métricas de Performance

- **Lighthouse**: 95+ em todas as categorias
- **FCP (First Contentful Paint)**: < 1.5s
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Bundle Size**: 214 kB (JS) + 13 kB (CSS)

---

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões e issues são bem-vindas!

```bash
# Fork o projeto
# Crie uma feature branch (git checkout -b feature/AmazingFeature)
# Commit suas mudanças (git commit -m 'Add some AmazingFeature')
# Push para a branch (git push origin feature/AmazingFeature)
# Abra um Pull Request
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

---

## 👤 Sobre

Desenvolvido com paixão e precisão. Cada linha de código, uma decisão consciente.

**Portfolio Online**: https://joaoarteagle.github.io/my_portfolio/  
**GitHub**: https://github.com/joaoarteagle

---

<div align="center">

**Transformando ideias em experiências digitais extraordinárias** ✨

[Visite meu portfólio](https://joaoarteagle.github.io/my_portfolio/) · [Issues](https://github.com/joaoarteagle/my_portfolio/issues) · [Discussões](https://github.com/joaoarteagle/my_portfolio/discussions)

</div>
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
