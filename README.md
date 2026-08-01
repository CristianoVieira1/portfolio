# Cristiano Borges — Portfolio

Portfólio pessoal em React + Vite, publicado em [cristianovieira1.github.io/portfolio](https://cristianovieira1.github.io/portfolio/).

## Desenvolvimento

```bash
yarn install
cp .env.example .env
yarn dev
```

Preencha as variáveis `VITE_EMAILJS_*` no `.env` para o formulário de contato funcionar localmente.

## Deploy (GitHub Pages)

O workflow `.github/workflows/build.yml` faz build e publica a pasta `dist` em `gh-pages`.

Configure estes secrets no repositório (Settings → Secrets and variables → Actions):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Sem esses secrets, o formulário mostra erro amigável e o WhatsApp permanece como canal alternativo.

Deploy manual:

```bash
yarn deploy:pages
```
