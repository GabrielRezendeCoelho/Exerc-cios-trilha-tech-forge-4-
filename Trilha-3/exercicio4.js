//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
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
var Animal = /** @class */ (function () {
    function Animal(energiaInicial) {
        this.energia = energiaInicial;
    }
    Animal.prototype.comer = function () {
        this.energia += 10;
        console.log("O animal comeu e agora tem ".concat(this.energia, " de energia."));
    };
    Animal.prototype.statusEnergia = function () {
        console.log("Energia atual: ".concat(this.energia));
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(energiaInicial) {
        return _super.call(this, energiaInicial) || this;
    }
    Leao.prototype.comer = function () {
        console.log("O leão vai caçar...");
        this.energia -= 5;
        _super.prototype.comer.call(this);
    };
    Leao.prototype.realizarAtividade = function () {
        console.log("O leão está caçando.");
        this.comer();
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(energiaInicial) {
        return _super.call(this, energiaInicial) || this;
    }
    Passaro.prototype.comer = function () {
        _super.prototype.comer.call(this);
    };
    Passaro.prototype.realizarAtividade = function () {
        console.log("O pássaro está cantando.");
        this.comer();
    };
    return Passaro;
}(Animal));
function atividadeAnimal(animais) {
    animais.forEach(function (animal, index) {
        console.log("Animal ".concat(index + 1, ":"));
        animal.realizarAtividade();
        animal.statusEnergia();
        console.log('--------------------');
    });
}
var leao = new Leao(20);
var passaro = new Passaro(10);
var animais = [leao, passaro];
atividadeAnimal(animais);
