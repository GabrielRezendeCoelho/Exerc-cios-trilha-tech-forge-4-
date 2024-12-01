//Cadastro e Busca de Produtos em uma Loja:
var Loja = /** @class */ (function () {
    function Loja(produtos) {
        this.produtos = produtos;
    }
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (produto) { return produto.codigo === codigo; });
    };
    return Loja;
}());
var produtos = [
    { codigo: 101, nome: "Camiseta" },
    { codigo: 102, nome: "Calça Jeans" },
    { codigo: 103, nome: "Tênis" }
];
var loja = new Loja(produtos);
var produto1 = loja.buscarProdutoPorCodigo(102);
console.log(produto1);
var produto2 = loja.buscarProdutoPorCodigo(104);
console.log(produto2);
