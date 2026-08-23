WEB KIVORA — PROJETO CORRIGIDO

Como executar localmente:
1. Abra a pasta no VS Code.
2. Use o Live Server ou abra o index.html no navegador.

Estrutura correta do portfólio:
- projetos/blackcut/
- projetos/climapro/
- projetos/prime-motors/

IMPORTANTE — CORRIGIR MAIÚSCULAS/MINÚSCULAS NO GIT:
O repositório antigo rastreava a pasta como "Projetos" (P maiúsculo), mas o site e o CSS usam "projetos" (p minúsculo).
Em Windows, o Git pode não perceber essa mudança sozinho. Depois de substituir os arquivos, execute na raiz do repositório:

  git rm -r --cached Projetos
  git add projetos
  git add .
  git commit -m "Corrige caminhos do portfolio e SEO"
  git push

Esses comandos fazem o Git registrar corretamente a pasta minúscula sem apagar os arquivos locais.

WhatsApp:
- O número utilizado pelo formulário fica em js/script.js, na constante WHATSAPP_NUMBER.

SEO:
- Domínio canônico: https://webkivora.com/
- robots.txt e sitemap.xml ficam na raiz do projeto.
- Após publicar, envie https://webkivora.com/sitemap.xml no Google Search Console.
- Depois, use Inspeção de URL para solicitar nova indexação da página inicial.
