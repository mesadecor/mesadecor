/*
  CONFIGURAÇÃO E PRODUTOS DA MESA DECOR
  ------------------------------------
  Para atualizar o site, edite apenas este arquivo.

  - Para adicionar um produto: copie um bloco { ... } e altere os campos.
  - foto: coloque o caminho da imagem, por exemplo "fotos/vaso-linho.jpg"
          (deixe "" para mostrar um desenho no lugar enquanto não há foto).
  - preco: número, por exemplo 89.9 (deixe null para mostrar "Consulte o valor").
  - destaque: true faz o produto aparecer primeiro.
  - disponivel: false esconde o produto sem apagar.

  ATENÇÃO: os produtos e preços abaixo são EXEMPLOS. Troque pelos reais antes de divulgar.
*/

window.LOJA = {
  nome: "Mesa Decor",
  slogan: "Decoração para deixar a casa com a sua cara",
  cidade: "Rio Brilhante - MS",
  whatsapp: "5567999378619",           // 55 + DDD + número
  whatsappExibicao: "(67) 99937-8619",
  razaoSocial: "Mesa Decor Ltda - ME",
  cnpj: "34.530.590/0001-86",
  instagram: ""                        // ex.: "https://instagram.com/mesadecor" (deixe "" para esconder)
};

window.CATEGORIAS = ["Mesa posta", "Vasos e plantas", "Quadros e espelhos", "Almofadas e mantas", "Velas e aromas"];

window.PRODUTOS = [
  { id: "mp-01", nome: "Jogo americano de fibra natural (4 un.)", categoria: "Mesa posta", preco: 89.9, descricao: "Fibra trançada, cor areia. Fácil de limpar.", foto: "", destaque: true, disponivel: true },
  { id: "mp-02", nome: "Prato raso de cerâmica", categoria: "Mesa posta", preco: 39.9, descricao: "Cerâmica esmaltada, 27 cm. Vai ao micro-ondas.", foto: "", destaque: false, disponivel: true },
  { id: "mp-03", nome: "Caminho de mesa em linho", categoria: "Mesa posta", preco: 64.9, descricao: "Linho misto, 40 x 150 cm.", foto: "", destaque: false, disponivel: true },

  { id: "vp-01", nome: "Vaso de cerâmica texturizado", categoria: "Vasos e plantas", preco: 79.9, descricao: "Altura 22 cm. Combina com plantas e flores secas.", foto: "", destaque: true, disponivel: true },
  { id: "vp-02", nome: "Cachepô de vime com forro", categoria: "Vasos e plantas", preco: 54.9, descricao: "Para vasos de até 20 cm de diâmetro.", foto: "", destaque: false, disponivel: true },
  { id: "vp-03", nome: "Planta artificial em vaso", categoria: "Vasos e plantas", preco: 99.9, descricao: "Sem rega e sem sol. Altura 45 cm.", foto: "", destaque: false, disponivel: true },

  { id: "qe-01", nome: "Espelho redondo com moldura", categoria: "Quadros e espelhos", preco: 189.9, descricao: "60 cm de diâmetro. Acompanha ferragem de fixação.", foto: "", destaque: true, disponivel: true },
  { id: "qe-02", nome: "Quadro decorativo com moldura", categoria: "Quadros e espelhos", preco: 129.9, descricao: "30 x 40 cm. Vários estampados disponíveis.", foto: "", destaque: false, disponivel: true },

  { id: "am-01", nome: "Almofada de veludo 45 x 45", categoria: "Almofadas e mantas", preco: 69.9, descricao: "Acompanha enchimento. Capa com zíper.", foto: "", destaque: false, disponivel: true },
  { id: "am-02", nome: "Manta de tricô para sofá", categoria: "Almofadas e mantas", preco: 149.9, descricao: "1,30 x 1,80 m. Lavável.", foto: "", destaque: false, disponivel: true },

  { id: "va-01", nome: "Vela aromática em pote de vidro", categoria: "Velas e aromas", preco: 44.9, descricao: "Cerca de 40 horas de queima. Perguntar fragrâncias.", foto: "", destaque: true, disponivel: true },
  { id: "va-02", nome: "Difusor de varetas", categoria: "Velas e aromas", preco: 59.9, descricao: "Frasco de 200 ml com varetas.", foto: "", destaque: false, disponivel: true }
];
