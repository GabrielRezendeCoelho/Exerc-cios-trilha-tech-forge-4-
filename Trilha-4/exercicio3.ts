//Cadastro e Busca de Produtos em uma Loja:

//Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string). Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja. Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined

interface ProdutoLoja {
    codigo: number;
    nome: string;
  }
  
  class Loja {
    private produtos: ProdutoLoja[];
  
    constructor(produtos: ProdutoLoja[]) {
      this.produtos = produtos;
    }
  
    public buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
      return this.produtos.find(produto => produto.codigo === codigo);
    }
  }
  
  const produtos: ProdutoLoja[] = [
    { codigo: 101, nome: "Camiseta" },
    { codigo: 102, nome: "Calça Jeans" },
    { codigo: 103, nome: "Tênis" }
  ];
 
  const loja = new Loja(produtos);
 
  const produto1 = loja.buscarProdutoPorCodigo(102);
  console.log(produto1);
  
  const produto2 = loja.buscarProdutoPorCodigo(104);
  console.log(produto2);
  