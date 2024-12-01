//Documentos
//Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string). Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".
var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibir = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Conte\u00FAdo: ").concat(this.conteudo);
    };
    return Texto;
}());
var documento1 = new Texto("Introdução ao TypeScript", "TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript.");
console.log(documento1.exibir());
var documento2 = new Texto("Conceitos de Orientação a Objetos", "A orientação a objetos é um paradigma de programação baseado no conceito de objetos.");
console.log(documento2.exibir());
