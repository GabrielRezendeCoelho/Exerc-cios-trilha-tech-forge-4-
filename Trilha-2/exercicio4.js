//Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.
var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    // Método para converter para Fahrenheit
    Temperatura.prototype.paraFahrenheit = function () {
        return this.valor * 9 / 5 + 32;
    };
    // Método para converter para Kelvin
    Temperatura.prototype.paraKelvin = function () {
        return this.valor + 273.15;
    };
    Temperatura.prototype.exibirConversoes = function () {
        console.log("Temperatura: ".concat(this.valor.toFixed(2), "\u00B0C"));
        console.log("Em Fahrenheit: ".concat(this.paraFahrenheit().toFixed(2), "\u00B0F"));
        console.log("Em Kelvin: ".concat(this.paraKelvin().toFixed(2), "K"));
    };
    return Temperatura;
}());
var temp1 = new Temperatura(25);
temp1.exibirConversoes();
var temp2 = new Temperatura(-10);
temp2.exibirConversoes();
