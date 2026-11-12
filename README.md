# Perfortec — site institucional

Projeto front-end criado com React + Vite.

## Requisitos
- Node.js 18 ou superior
- npm

## Como executar
1. Extraia o arquivo ZIP.
2. Abra a pasta `perfortec-react` no VS Code.
3. No terminal, execute:

```bash
npm install
npm run dev
```

4. Abra o endereço local informado pelo Vite (normalmente `http://localhost:5173`).

## Como gerar a versão de produção

```bash
npm run build
npm run preview
```

Os arquivos finais serão gerados na pasta `dist`.

## Estrutura

```text
perfortec-react/
├── public/
├── src/
│   ├── assets/
│   │   └── logo-perfortec.png
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── SectionHeading.jsx
│   │   └── WhatsAppButton.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Personalizações importantes antes de publicar

1. Em `src/components/WhatsAppButton.jsx`, substitua `5511999999999` pelo WhatsApp oficial.
2. Em `src/sections/Contact.jsx`, substitua o mesmo número pelo WhatsApp oficial.
3. Atualize os dados de e-mail, localização e atendimento em `Contact.jsx`.
4. Confirme e ajuste a lista de serviços em `Services.jsx` para refletir exatamente o que a Perfortec oferece.
5. Substitua as imagens ilustrativas de `Hero.jsx`, `About.jsx` e `Projects.jsx` por fotos autorizadas de projetos reais.
6. Atualize os textos institucionais conforme a história e os diferenciais reais da empresa.

## Observação
O formulário está preparado para montar uma mensagem e abrir o WhatsApp. Ele não armazena dados nem envia e-mail automaticamente. Para isso, será necessário integrar um back-end ou serviço de formulários.
