//Produtos
//Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número). Em seguida, crie uma classe ItemLoja que implemente essa interface. No construtor da classe, atribua valores às propriedades id, nome e preco.

interface Produto {
    id: number;
    nome: string;
    preco: number;
  }
  
  class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;
  
    constructor(id: number, nome: string, preco: number) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
    }

    exibirInformacoes(): void {
      console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
  }
  
  const produto1 = new ItemLoja(1, "Camiseta", 39.90);
  produto1.exibirInformacoes();
  
  const produto2 = new ItemLoja(2, "Calça Jeans", 89.99);
  produto2.exibirInformacoes();
  