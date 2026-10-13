# Site da Mesa Decor

Catálogo de produtos que leva o cliente ao WhatsApp. Não precisa de servidor nem de banco de dados.

## Arquivos

- `index.html` – a página (visual e funcionamento). Normalmente você não precisa mexer.
- `products.js` – **dados da loja e produtos**. É o único arquivo que você edita no dia a dia.
- `fotos/` – crie esta pasta e coloque as fotos dos produtos (por exemplo `fotos/vaso-ceramica.jpg`).

## Como atualizar produtos

Abra `products.js` e copie um bloco `{ ... }` de produto:

```js
{ id: "vp-04", nome: "Vaso de vidro", categoria: "Vasos e plantas", preco: 49.9,
  descricao: "Altura 18 cm.", foto: "fotos/vaso-vidro.jpg", destaque: false, disponivel: true },
```

- `preco: null` mostra "Consulte o valor".
- `foto: ""` mostra um desenho no lugar da foto.
- `disponivel: false` esconde o produto sem apagar.
- `destaque: true` coloca o produto no começo, com selo "Destaque".
- A categoria precisa estar escrita igual à lista `CATEGORIAS`.

Dica de fotos: quadradas, fundo limpo, até 150 KB cada (use squoosh.app para reduzir).

> Os produtos e preços que vêm no arquivo são **exemplos**. Troque pelos reais antes de divulgar.

## Publicar no GitHub Pages (grátis)

1. Crie uma conta em github.com.
2. Clique em **New repository**, dê o nome `mesadecor` e deixe como **Public**.
3. Clique em **uploading an existing file**, arraste `index.html`, `products.js` e a pasta `fotos`, e clique em **Commit changes**.
4. Vá em **Settings > Pages**. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
5. Em cerca de 1 a 2 minutos o site abre em `https://SEU-USUARIO.github.io/mesadecor/`.

Para atualizar depois: abra o arquivo no GitHub, clique no lápis, edite e salve (**Commit changes**). O site atualiza sozinho em instantes.

## Ligar o domínio mesadecor.com.br

1. Em **registro.br**, pesquise `mesadecor.com.br`. Se estiver livre, registre (para `.com.br` pede o CNPJ da empresa: 34.530.590/0001-86). Custa em torno de R$ 40 por ano.
2. No GitHub, em **Settings > Pages > Custom domain**, digite `mesadecor.com.br` e salve. O GitHub cria um arquivo `CNAME` no repositório.
3. No Registro.br, em **DNS** do domínio, crie estes registros:
   - 4 registros do tipo **A** para `mesadecor.com.br` (raiz) apontando para: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 registro **CNAME** de `www` apontando para `SEU-USUARIO.github.io`
4. Aguarde a propagação (de alguns minutos até algumas horas) e, em **Settings > Pages**, marque **Enforce HTTPS**.

Confira os endereços atuais na documentação do GitHub Pages ("Managing a custom domain for your GitHub Pages site"), pois eles podem mudar.

## Onde o WhatsApp está configurado

No topo do `products.js`, em `window.LOJA`:

- `whatsapp`: formato `55` + DDD + número, sem espaços (hoje: `5567999378619`).
- `instagram`: cole o link do perfil para aparecer no rodapé.

Cada botão "Pedir no WhatsApp" abre a conversa já com o nome e o preço do produto na mensagem.
