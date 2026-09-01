WEB KIVORA — VERSÃO SEO 2026

Como executar localmente:
1. Abra a pasta no VS Code.
2. Use o Live Server.
3. Para testar URLs como /criacao-de-landing-pages/, prefira um servidor local que respeite pastas com index.html.

Principais páginas públicas:
- /
- /criacao-de-landing-pages/
- /criacao-de-sites/
- /desenvolvimento-de-sistemas/
- /automacao-para-empresas/
- /manutencao-de-sites/
- /criacao-de-sites-abc-paulista/
- /conteudos/
- /sobre/

Portfólio demonstrativo:
- /projetos/aurea-clinica/
- /projetos/apex-motors/
- /projetos/vertice-imoveis/

Os projetos demonstrativos estão com noindex, follow. Eles continuam acessíveis aos visitantes, mas não devem competir com as páginas comerciais da Web Kivora no Google.

IMPORTANTE — PASTA projetos NO GIT/ WINDOWS:
O projeto original rastreava a pasta como "Projetos" (P maiúsculo). A versão SEO usa "projetos" (p minúsculo), igual às URLs públicas. Em Windows, o Git pode não registrar uma troca somente de maiúscula/minúscula. Use Git Bash na raiz do repositório:

  git mv Projetos projetos-temp
  git mv projetos-temp projetos
  git add .
  git commit -m "Melhora SEO e normaliza URLs"
  git push

Se você substituir toda a pasta do projeto antes de executar os comandos, confira `git status` para garantir que a mudança de casing foi reconhecida.

WhatsApp:
- O número usado pelo formulário da home fica em js/script.js, na constante WHATSAPP_NUMBER.

SEO:
- Domínio canônico adotado nesta versão: https://www.webkivora.com/
- Motivo: o domínio público atualmente redireciona https://webkivora.com/ para https://www.webkivora.com/.
- robots.txt e sitemap.xml ficam na raiz.
- Após publicar, envie https://www.webkivora.com/sitemap.xml no Google Search Console.
- Consulte SEO-RELATORIO.md para o checklist completo pós-publicação.
