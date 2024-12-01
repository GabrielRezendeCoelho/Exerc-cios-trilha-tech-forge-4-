//Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).

class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;
  
    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    public calcularValorEstoque(): number {
      return this.preco * this.quantidade;
    }
  
    public exibirDetalhes(): void {
      console.log(`Produto: ${this.nome}`);
      console.log(`Preço: R$${this.preco.toFixed(2)}`);
      console.log(`Quantidade em estoque: ${this.quantidade}`);
      console.log(`Valor total em estoque: R$${this.calcularValorEstoque().toFixed(2)}`);
    }
  }
  
  // Exemplo de uso
  const produto1 = new Produto("Notebook", 3500.00, 10);
  produto1.exibirDetalhes();
  
  const produto2 = new Produto("Mouse", 50.00, 150);
  produto2.exibirDetalhes();
  