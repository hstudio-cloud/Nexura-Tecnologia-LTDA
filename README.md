# NEXURA — Site institucional

Site institucional da Nexura: tecnologia, sites profissionais e projetos de casas em Assú/RN.

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Google Fonts (Syne + DM Sans + JetBrains Mono)

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no Vercel (recomendado)

1. Faça push para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. Framework Preset: **Vite**
4. Clique em Deploy

## Estrutura

```
src/
  components/
    Header.jsx        — Header fixo com navegação e CTA
    Hero.jsx          — Seção principal com floating cards
    Manifesto.jsx     — Posicionamento e pilares
    Services.jsx      — Cards de serviços
    HouseProjects.jsx — Projetos residenciais (Assú/RN)
    Portfolio.jsx     — Portfólio com projetos exemplo
    Process.jsx       — Etapas do processo
    Stack.jsx         — Tecnologias utilizadas
    Testimonials.jsx  — Depoimentos (substituir com reais)
    CTA.jsx           — Call to action final
    Footer.jsx        — Rodapé completo
  App.jsx
  main.jsx
  index.css
```

## WhatsApp

Link configurado em todos os botões:
`https://wa.me/5584997070028?text=Olá, vim pelo site da Nexura e quero fazer um orçamento.`

## Notas

- Depoimentos em `Testimonials.jsx` são placeholders — substituir por reais
- Link do Instagram no Footer precisa ser atualizado
- Portfólio em `Portfolio.jsx` pode ser expandido com projetos reais
