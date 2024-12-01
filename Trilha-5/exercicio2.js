//Inventário de Itens
//Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript
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
//Crie duas subclasses WarehouseInventory e StoreInventory.
//WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
//StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
//Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = {};
    }
    Inventory.prototype.getInventory = function () {
        return this.items;
    };
    return Inventory;
}());
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarehouseInventory.prototype.addItem = function (item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            delete this.items[item];
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado no invent\u00E1rio."));
        }
    };
    return WarehouseInventory;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxQuantityPerItem = 10;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        var currentQuantity = this.items[item] || 0;
        var newQuantity = currentQuantity + quantity;
        if (newQuantity > this.maxQuantityPerItem) {
            console.log("Quantidade excede o limite de ".concat(this.maxQuantityPerItem, " unidades para \"").concat(item, "\". Adicionando at\u00E9 o limite."));
            this.items[item] = this.maxQuantityPerItem;
        }
        else {
            this.items[item] = newQuantity;
        }
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            delete this.items[item];
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado no invent\u00E1rio."));
        }
    };
    return StoreInventory;
}(Inventory));
var warehouse = new WarehouseInventory();
warehouse.addItem("Caixa de Parafusos", 100);
warehouse.addItem("Chave Inglesa", 50);
console.log("Armazém - Inventário:", warehouse.getInventory());
warehouse.removeItem("Caixa de Parafusos");
console.log("Armazém - Após Remoção:", warehouse.getInventory());
var store = new StoreInventory();
store.addItem("Camiseta", 8);
store.addItem("Camiseta", 5); // Excede o limite
store.addItem("Boné", 3);
console.log("\nLoja - Inventário:", store.getInventory());
store.removeItem("Camiseta");
console.log("Loja - Após Remoção:", store.getInventory());
