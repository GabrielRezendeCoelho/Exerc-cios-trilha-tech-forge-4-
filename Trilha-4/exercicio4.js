//Sistema de Biblioteca com Checagem de Disponibilidade:
var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        this.livros = livros;
    }
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "1984", autor: "George Orwell", disponivel: false },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: false },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: true }
];
var biblioteca = new Biblioteca(livros);
var livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis:", livrosDisponiveis);
