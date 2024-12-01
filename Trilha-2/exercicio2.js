//Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        if (lido === void 0) { lido = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
        console.log("O livro \"".concat(this.titulo, "\" foi marcado como lido."));
    };
    Livro.prototype.exibirDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("P\u00E1ginas: ".concat(this.paginas));
        console.log("Lido: ".concat(this.lido ? "Sim" : "Não"));
    };
    return Livro;
}());
// Exemplo de uso  
var livro1 = new Livro("Teste do livro que foi lido", "livro 1", 256, true);
livro1.exibirDetalhes();
