//Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:

//Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean). Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca. Implemente os seguintes métodos: filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado. buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico. obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.

interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  
  class BibliotecaGestao {
    private livros: LivroBiblioteca[];
  
    constructor(livros: LivroBiblioteca[]) {
      this.livros = livros;
    }
  
    public filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.genero === genero);
    }
  
    public buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.autor === autor);
    }
  
    public obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter(livro => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
  }
  
  const livros: LivroBiblioteca[] = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: false },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Literatura Brasileira", disponivel: true },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Distopia", disponivel: true }
  ];
  
  const biblioteca = new BibliotecaGestao(livros);
  
  const livrosFantasia = biblioteca.filtrarPorGenero("Fantasia");
  console.log("Livros de Fantasia:", livrosFantasia);
  
  const livrosGeorgeOrwell = biblioteca.buscarPorAutor("George Orwell");
  console.log("Livros de George Orwell:", livrosGeorgeOrwell);
  
  const livrosDisponiveis = biblioteca.obterLivrosDisponiveisOrdenados();
  console.log("Livros disponíveis ordenados:", livrosDisponiveis);
  
  