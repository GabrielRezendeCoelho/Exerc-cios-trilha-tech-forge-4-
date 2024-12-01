//Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularValorEstoque = function () {
        return this.preco * this.quantidade;
    };
    Produto.prototype.exibirDetalhes = function () {
        console.log("Produto: ".concat(this.nome));
        console.log("Pre\u00E7o: R$".concat(this.preco.toFixed(2)));
        console.log("Quantidade em estoque: ".concat(this.quantidade));
        console.log("Valor total em estoque: R$".concat(this.calcularValorEstoque().toFixed(2)));
    };
    return Produto;
}());
// Exemplo de uso
var produto1 = new Produto("Notebook", 3500.00, 10);
produto1.exibirDetalhes();
var produto2 = new Produto("Mouse", 50.00, 150);
produto2.exibirDetalhes();
