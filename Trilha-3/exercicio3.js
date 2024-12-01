//Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento com cart\u00E3o ".concat(this.numeroCartao, " processado com sucesso."));
        }
        else {
            console.log("Falha ao processar o pagamento: N\u00FAmero do cart\u00E3o ".concat(this.numeroCartao, " inv\u00E1lido."));
        }
    };
    PagamentoCartao.prototype.validarCartao = function () {
        return /^[0-9]{16}$/.test(this.numeroCartao);
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(valor) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        return _this;
    }
    PagamentoBoleto.prototype.processar = function () {
        var codigoBoleto = this.gerarCodigoBoleto();
        console.log("Boleto gerado com o c\u00F3digo: ".concat(codigoBoleto));
        console.log("Pagamento no valor de R$".concat(this.valor.toFixed(2), " aguardando compensa\u00E7\u00E3o."));
    };
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        return Math.random().toString().slice(2, 50);
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamentos(pagamentos) {
    pagamentos.forEach(function (pagamento, index) {
        console.log("Processando pagamento ".concat(index + 1, ":"));
        pagamento.processar();
        console.log('--------------------------');
    });
}
var pagamento1 = new PagamentoCartao("1234567812345678"); // Cartão válido
var pagamento2 = new PagamentoCartao("12345678"); // Cartão inválido
var pagamento3 = new PagamentoBoleto(150.75); // Valor do boleto
var pagamentos = [pagamento1, pagamento2, pagamento3];
processarPagamentos(pagamentos);
