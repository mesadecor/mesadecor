/*
  CONFIGURAÇÃO E PRODUTOS DA MESA DECOR
  ------------------------------------
  Para atualizar o site, edite apenas este arquivo.

  - Para adicionar um produto: copie um bloco { ... } e altere os campos.
  - foto: coloque o caminho da imagem, por exemplo "fotos/bola-6pcs.jpg"
          (deixe "" para mostrar um desenho no lugar enquanto não há foto).
  - preco: número com PONTO, por exemplo 89.9 (deixe null para mostrar "Consulte o valor").
  - destaque: true faz o produto aparecer primeiro.
  - disponivel: false esconde o produto sem apagar.
  - A categoria do produto precisa estar escrita igual à lista CATEGORIAS.
*/

window.LOJA = {
  nome: "Mesa Decor",
  slogan: "Decoração para deixar a casa com a sua cara",
  cidade: "Rio Brilhante - MS",
  whatsapp: "5567999378619",           // 55 + DDD + número
  whatsappExibicao: "(67) 99937-8619",
  razaoSocial: "Mesa Decor Ltda - ME",
  cnpj: "34.530.590/0001-86",
  instagram: "https://instagram.com/mesa.decoracao"
};

window.CATEGORIAS = ["Itens natalinos"];

window.PRODUTOS = [
  { id: "nat-01", nome: "Bola decorada 6 pcs",  categoria: "Itens natalinos", preco: 33.0,   descricao: "", foto: "", destaque: false, disponivel: true },
  { id: "nat-02", nome: "Bola decorada 3 pcs",  categoria: "Itens natalinos", preco: 72.81,  descricao: "", foto: "", destaque: false, disponivel: true },
  { id: "nat-03", nome: "Bola decorada 4 pcs",  categoria: "Itens natalinos", preco: 45.0,   descricao: "", foto: "", destaque: false, disponivel: true },
  { id: "nat-04", nome: "Bola decorada 24 pcs", categoria: "Itens natalinos", preco: 126.0,  descricao: "", foto: "", destaque: false, disponivel: true }
];
