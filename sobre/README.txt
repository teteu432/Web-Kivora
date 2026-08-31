WEB KIVORA — VERSÃO ATUALIZADA 31/08/2026

Como executar localmente:
1. Abra a pasta WebKivoraOficial no VS Code.
2. Inicie o Live Server pelo index.html.
3. Os caminhos de CSS, JavaScript, logo e páginas internas agora são relativos, então o site também funciona quando a pasta está dentro de outro diretório do Live Server.

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

Portfólio demonstrativo atual:
- /projetos/aurea-clinica/
- /projetos/apex-motors/
- /projetos/vertice-imoveis/

O projeto ClimaPro foi removido. URLs antigas do ClimaPro redirecionam para a seção de portfólio. URLs do antigo Prime Motors redirecionam para o novo Apex Motors.

Apex Motors:
- index.html — página inicial da loja
- estoque.html — estoque com filtros e ordenação
- veiculo.html — detalhes do veículo por ?id=
- contato.html — formulário demonstrativo integrado ao WhatsApp

Os projetos demonstrativos usam noindex, follow. Eles continuam acessíveis aos visitantes, mas não competem com as páginas comerciais da Web Kivora no Google.

IMPORTANTE — PASTA projetos:
A pasta física agora está em minúsculas: projetos. Isso evita erro de maiúsculas/minúsculas em Linux/Vercel.

WhatsApp:
- O número usado pelo formulário da home fica em js/script.js, na constante WHATSAPP_NUMBER.
- O Apex Motors usa um número demonstrativo configurado em projetos/apex-motors/js/data.js.

SEO:
- Domínio canônico: https://www.webkivora.com/
- robots.txt e sitemap.xml ficam na raiz.
- Depois de publicar, reenvie https://www.webkivora.com/sitemap.xml no Google Search Console.
