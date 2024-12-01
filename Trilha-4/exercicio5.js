//Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:
var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao(livros) {
        this.livros = livros;
    }
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero === genero; });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor === autor; });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: false },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Literatura Brasileira", disponivel: true },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Distopia", disponivel: true }
];
var biblioteca = new BibliotecaGestao(livros);
var livrosFantasia = biblioteca.filtrarPorGenero("Fantasia");
console.log("Livros de Fantasia:", livrosFantasia);
var livrosGeorgeOrwell = biblioteca.buscarPorAutor("George Orwell");
console.log("Livros de George Orwell:", livrosGeorgeOrwell);
var livrosDisponiveis = biblioteca.obterLivrosDisponiveisOrdenados();
console.log("Livros disponíveis ordenados:", livrosDisponiveis);
