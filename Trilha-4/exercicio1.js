//Produtos
//Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número). Em seguida, crie uma classe ItemLoja que implemente essa interface. No construtor da classe, atribua valores às propriedades id, nome e preco.
var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    ItemLoja.prototype.exibirInformacoes = function () {
        console.log("ID: ".concat(this.id, ", Nome: ").concat(this.nome, ", Pre\u00E7o: R$ ").concat(this.preco.toFixed(2)));
    };
    return ItemLoja;
}());
var produto1 = new ItemLoja(1, "Camiseta", 39.90);
produto1.exibirInformacoes();
var produto2 = new ItemLoja(2, "Calça Jeans", 89.99);
produto2.exibirInformacoes();
