//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado com sucesso."));
        }
        else {
            console.log("O valor do depósito deve ser positivo.");
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor.toFixed(2), " realizado com sucesso."));
        }
        else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        }
        else {
            console.log("O valor do saque deve ser positivo.");
        }
    };
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Saldo atual de ".concat(this.titular, ": R$").concat(this.saldo.toFixed(2)));
    };
    return ContaBancaria;
}());
// Exemplo de uso
var minhaConta = new ContaBancaria("João Silva", 500);
minhaConta.exibirSaldo();
minhaConta.depositar(200);
minhaConta.exibirSaldo();
minhaConta.sacar(100);
minhaConta.exibirSaldo();
minhaConta.sacar(700); // Tentativa de saque maior que o saldo
