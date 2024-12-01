///Separação de Responsabilidades em Classe de Pedido
//Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.
//Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
//Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
//Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.
var Order = /** @class */ (function () {
    function Order() {
        this.items = [];
        this.totalPrice = 0;
        this.paymentStatus = "Pending";
        this.shippingStatus = "Not Shipped";
    }
    Order.prototype.addItem = function (item) {
        this.items.push(item);
        this.calculateTotalPrice();
    };
    Order.prototype.calculateTotalPrice = function () {
        this.totalPrice = this.items.reduce(function (sum, item) { return sum + item.price; }, 0);
    };
    Order.prototype.processPayment = function () {
        if (this.totalPrice > 0) {
            this.paymentStatus = "Paid";
        }
        else {
            throw new Error("Cannot process payment: No items in the order.");
        }
    };
    Order.prototype.updateShippingStatus = function (status) {
        if (this.paymentStatus === "Paid") {
            this.shippingStatus = status;
        }
        else {
            throw new Error("Cannot ship order: Payment not processed.");
        }
    };
    Order.prototype.getOrderDetails = function () {
        return {
            items: this.items,
            totalPrice: this.totalPrice,
            paymentStatus: this.paymentStatus,
            shippingStatus: this.shippingStatus,
        };
    };
    return Order;
}());
var order = new Order();
order.addItem({ name: "Laptop", price: 1500 });
order.addItem({ name: "Mouse", price: 50 });
console.log(order.getOrderDetails());
order.processPayment();
order.updateShippingStatus("Shipped");
console.log(order.getOrderDetails());
