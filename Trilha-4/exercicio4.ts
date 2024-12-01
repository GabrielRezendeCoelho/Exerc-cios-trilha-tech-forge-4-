//Sistema de Biblioteca com Checagem de Disponibilidade:

//Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean). Crie uma classe Biblioteca que contenha um array de livros que implementem Livro. Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true. 

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
  }
  
  class Biblioteca {
    private livros: Livro[];
  
    constructor(livros: Livro[]) {
      this.livros = livros;
    }
  
    public buscarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(livro => livro.disponivel);
    }
  }
  
  const livros: Livro[] = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "1984", autor: "George Orwell", disponivel: false },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: false },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: true }
  ];
  
  const biblioteca = new Biblioteca(livros);
  
  const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
  console.log("Livros disponíveis:", livrosDisponiveis);
  