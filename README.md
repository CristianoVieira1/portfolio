# Cristiano Borges — Engenharia de software

Site comercial e portfólio em React + Vite, publicado em [cristianovieira1.github.io/portfolio](https://cristianovieira1.github.io/portfolio/).

O objetivo principal é captação de projetos (aplicativos, sites, sistemas, SaaS e consultoria). Recrutadores têm a página `/carreira/`.

## Desenvolvimento

```bash
yarn install
cp .env.example .env
yarn dev
```

## Variáveis e secrets

Preencha no `.env` local e nos secrets do GitHub Actions:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_GA_MEASUREMENT_ID` (opcional; só um ID real `G-...`, nunca inventado)

Sem EmailJS, o formulário avisa e o WhatsApp permanece como canal. Sem GA, analytics não carrega.

O template EmailJS deve aceitar pelo menos: `name`, `email`, `phone`, `subject`, `message`. Campos extras enviados: `whatsapp`, `projectType`, `budget`, `timeline`, `description`.

## Deploy (GitHub Pages)

O workflow `.github/workflows/build.yml` gera `dist` (incluindo HTML estático por rota e `sitemap.xml`) e publica em `gh-pages`.

```bash
yarn deploy:pages
```

O plugin de build cria `index.html` em cada URL comercial para o GitHub Pages responder sem depender só do JavaScript. O `404.html` da pasta `dist` é o shell da SPA, para rotas client-side que não tiverem arquivo próprio.

## Google Search Console (depois do deploy)

1. Adicionar a propriedade `https://cristianovieira1.github.io/portfolio/`.
2. Enviar `https://cristianovieira1.github.io/portfolio/sitemap.xml`.
3. Inspecionar a home, uma página de serviço e um case.
4. Conferir se `hreflang` pt-BR e en apontam para URLs distintas (`/` e `/en/`, etc.).

## Checklist de validação manual (não executei build, servidor nem Lighthouse)

- [ ] `yarn build` conclui sem erro.
- [ ] Abrir `dist/index.html` e conferir título/description comerciais.
- [ ] Conferir se existem pastas em `dist/servicos/`, `dist/projetos/`, `dist/en/`, `dist/orcamento/`, `dist/carreira/`.
- [ ] `dist/sitemap.xml` lista as URLs reais, não só a home.
- [ ] No GitHub Pages, `/portfolio/servicos/desenvolvimento-de-aplicativos/` abre direto (não 404).
- [ ] Alternância PT/EN troca a URL (`/en/...`).
- [ ] Formulário: validação, consentimento, sucesso EmailJS (com secrets) e fallback WhatsApp com mensagem preenchida.
- [ ] Eventos GA só disparam depois do consentimento e depois de clique/envio real (`click_whatsapp`, `form_submit_success`, `generate_lead`).
- [ ] Hero, serviços, cases, carreira e orçamento no desktop e no celular.
- [ ] `prefers-reduced-motion` não deixa a primeira tela inutilizável.
- [ ] CV PDF em `/carreira/` abre.

## O que não está neste repositório

Não há case **OrderFlow** no código nem nas imagens públicas. Não foi inventado um projeto para preencher essa sugestão da auditoria.
