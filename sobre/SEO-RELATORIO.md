# Relatório de SEO e estrutura — Web Kivora

Atualizado em: 31/08/2026

## Ajustes desta versão

1. Os caminhos locais que começavam com `/` foram normalizados para caminhos relativos nos arquivos HTML. Isso evita 404 de CSS, JavaScript, logo e links quando o projeto é aberto pelo Live Server dentro de uma pasta pai.
2. A pasta física `Projetos` foi normalizada para `projetos`, em minúsculas, igual às URLs públicas. Isso evita falhas por diferença de maiúsculas/minúsculas no Vercel/Linux.
3. O projeto ClimaPro foi removido do portfólio e do diretório do projeto.
4. O antigo Prime Motors foi substituído pelo projeto Apex Motors, uma loja de veículos com home, estoque pesquisável, página de detalhes e contato.
5. Redirects preservam URLs antigas de ClimaPro e Prime Motors sem deixar visitantes em páginas 404.
6. A home recebeu alternância de seções brancas e azul-claro, mantendo o hero, CTA e rodapé escuros para preservar a identidade da Web Kivora.
7. Os projetos demonstrativos permanecem com `noindex, follow`, evitando que marcas fictícias concorram com as páginas comerciais da Web Kivora nos resultados de busca.

## Estratégia mantida

- Canonical principal em `https://www.webkivora.com/`.
- Páginas independentes para Landing Pages, Sites, Sistemas, Automação e Manutenção.
- Hub de conteúdos com links internos para páginas comerciais.
- Sitemap contendo somente páginas que devem ser indexadas.
- Dados estruturados de Organization, WebSite, WebPage, Service, BreadcrumbList e Article onde aplicável.
- Cache para assets, CSS e JS no Vercel.

## Checklist após publicar

1. Faça o deploy e confirme que `/css/style.css`, `/assets/images/web-kivora-logo.webp` e `/projetos/apex-motors/` respondem normalmente.
2. Teste a home em desktop e celular.
3. No Google Search Console, inspecione a home e reenvie `sitemap.xml`.
4. Confirme que as páginas comerciais principais continuam indexáveis e que os projetos demonstrativos aparecem como `noindex`.
5. Teste os redirects antigos de `/projetos/climapro/` e `/projetos/prime-motors/`.
