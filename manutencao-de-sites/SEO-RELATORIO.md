# Relatório de SEO — Web Kivora

Atualizado em: 26/08/2026

## Problemas encontrados

1. O endereço público `https://webkivora.com/` redireciona para `https://www.webkivora.com/`, mas canonical, sitemap e dados estruturados apontavam para a versão sem `www`.
2. O sitemap listava `/projetos/blackcut/`, que não existe no projeto enviado, e não listava os projetos atuais Auréa e Vértice.
3. A pasta física `Projetos` tinha P maiúsculo enquanto as URLs canônicas usadas no sitemap estavam em `/projetos/`, o que é problemático em ambientes Linux/Vercel.
4. Projetos demonstrativos eram indexáveis como se fossem negócios reais de clínica, imobiliária, climatização e estética automotiva.
5. A home tentava cobrir vários serviços, mas não existiam páginas comerciais próprias para Landing Pages, Sites, Sistemas, Automação e Manutenção.
6. Existiam números de marketing sem fonte (`+38%`, `98`, `24h`), removidos para evitar afirmações não comprovadas.
7. Favicon e imagens institucionais estavam muito maiores do que o necessário para seus usos.
8. A malha de links internos era concentrada em âncoras da home; não havia hub de conteúdo nem páginas de apoio.

## Alterações realizadas

- Canonical, sitemap, Open Graph e JSON-LD alinhados para `https://www.webkivora.com/`, que é a versão atualmente servida publicamente.
- Pasta `Projetos` normalizada para `projetos` e redirects criados para URLs antigas com maiúsculas.
- Todos os projetos demonstrativos mantidos acessíveis no portfólio, porém com `noindex, follow`.
- Criadas páginas comerciais independentes e interligadas.
- Criado hub de conteúdos com três artigos úteis e originais.
- Criada uma única página regional para o ABC Paulista, evitando páginas doorway duplicadas por cidade.
- Adicionados Organization, WebSite, WebPage, Service, BreadcrumbList e Article em JSON-LD quando aplicável.
- Não foi adicionado FAQPage schema. O FAQ permanece visível para usuários, mas a marcação não é necessária para o objetivo do projeto.
- Adicionados redirects para aliases que poderiam competir com as URLs principais (`/sites-para-empresas/` e `/sistemas-web/`).
- Cache de assets, CSS e JS configurado no Vercel.
- Imagens institucionais otimizadas e dimensões explícitas adicionadas à logo do cabeçalho.

## Páginas e foco de busca

| URL | Foco principal |
|---|---|
| `/` | criação de sites, landing pages e sistemas — marca/serviços amplos |
| `/criacao-de-landing-pages/` | criação de landing pages profissionais |
| `/criacao-de-sites/` | criação de sites profissionais para empresas |
| `/desenvolvimento-de-sistemas/` | sistemas web personalizados |
| `/automacao-para-empresas/` | automação de processos para pequenas empresas |
| `/manutencao-de-sites/` | manutenção de sites e landing pages |
| `/criacao-de-sites-abc-paulista/` | criação de sites no ABC Paulista |
| `/conteudos/quanto-custa-uma-landing-page/` | quanto custa uma landing page |
| `/conteudos/landing-page-ou-site/` | landing page ou site |
| `/conteudos/o-que-uma-landing-page-precisa-ter/` | elementos de uma landing page |
| `/sobre/` | contexto institucional da Web Kivora |

## Links internos

- Home → páginas comerciais e artigos.
- Landing Pages ↔ artigos de preço/estrutura/comparação.
- Sites ↔ página regional do ABC.
- Sistemas ↔ Automação.
- Artigos → páginas comerciais correspondentes.
- Footer → serviços, conteúdos e página Sobre.

## Google Search Console após publicar

1. Confirme que a propriedade que representa o domínio cobre a versão pública com `www`. Se usar propriedade de prefixo de URL, confirme `https://www.webkivora.com/`.
2. Em **Sitemaps**, envie `sitemap.xml`.
3. Use **Inspeção de URL** para testar a home e as páginas comerciais principais.
4. Solicite indexação primeiro de `/`, `/criacao-de-landing-pages/`, `/criacao-de-sites/` e `/desenvolvimento-de-sistemas/`.
5. Em **Indexação > Páginas**, verifique erros, páginas excluídas e divergências de canonical.
6. Em **Desempenho > Resultados da pesquisa**, acompanhe consultas, impressões, cliques, CTR e posição média.
7. Depois que houver dados suficientes, procure consultas com muitas impressões e CTR baixo; títulos e snippets podem ser refinados nessas páginas.
8. Procure páginas com posição média próxima da primeira página e melhore conteúdo, links internos e prova de experiência real.

## Ações externas importantes

- Criar/otimizar Google Business Profile somente com dados empresariais reais e verificáveis.
- Conseguir menções e links genuínos de parceiros, clientes e diretórios relevantes; não comprar pacotes de backlinks.
- Publicar cases reais conforme surgirem, explicando problema, solução e resultado comprovável.
- Adicionar depoimentos somente quando forem reais e autorizados.
- Medir conversões (cliques no WhatsApp, envio de formulário e contatos) com Analytics/Tag Manager quando desejar.

## Próximos conteúdos recomendados

- Como conseguir clientes com uma landing page?
- Quanto custa criar um site para empresa?
- Como colocar WhatsApp em um site?
- Quanto custa manter um site?
- O que é um sistema web e quando vale criar um?

Evite publicar todos de uma vez apenas para aumentar volume. Priorize conteúdos em que a Web Kivora consiga acrescentar exemplos, experiência prática e informação original.
