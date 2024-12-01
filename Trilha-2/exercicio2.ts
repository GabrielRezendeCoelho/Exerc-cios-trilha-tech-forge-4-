//Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;
  
    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
      this.lido = lido;
    }
  
    public marcarComoLido(): void {
      this.lido = true;
      console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
  
    public exibirDetalhes(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Páginas: ${this.paginas}`);
      console.log(`Lido: ${this.lido ? "Sim" : "Não"}`);
    }
  } 
  const livro1 = new Livro("Teste do livro que foi lido", "livro 1", 256, true);
  livro1.exibirDetalhes();
    