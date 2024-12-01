//Exercicio 1 refatorado
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Cart.prototype.calculateTotalPrice = function () {
        return this.items.reduce(function (sum, item) { return sum + item.price; }, 0);
    };
    Cart.prototype.getItems = function () {
        return this.items;
    };
    return Cart;
}());
var Payment = /** @class */ (function () {
    function Payment() {
        this.status = "Pending";
    }
    Payment.prototype.processPayment = function (amount) {
        if (amount > 0) {
            this.status = "Paid";
        }
        else {
            throw new Error("Cannot process payment: Total amount is zero.");
        }
    };
    Payment.prototype.getStatus = function () {
        return this.status;
    };
    return Payment;
}());
var Shipping = /** @class */ (function () {
    function Shipping() {
        this.status = "Not Shipped";
    }
    Shipping.prototype.updateStatus = function (status) {
        this.status = status;
    };
    Shipping.prototype.getStatus = function () {
        return this.status;
    };
    return Shipping;
}());
var Order = /** @class */ (function () {
    function Order() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    Order.prototype.addItem = function (item) {
        this.cart.addItem(item);
    };
    Order.prototype.processPayment = function () {
        var totalPrice = this.cart.calculateTotalPrice();
        this.payment.processPayment(totalPrice);
    };
    Order.prototype.updateShippingStatus = function (status) {
        if (this.payment.getStatus() === "Paid") {
            this.shipping.updateStatus(status);
        }
        else {
            throw new Error("Cannot ship order: Payment not processed.");
        }
    };
    Order.prototype.getOrderDetails = function () {
        return {
            items: this.cart.getItems(),
            totalPrice: this.cart.calculateTotalPrice(),
            paymentStatus: this.payment.getStatus(),
            shippingStatus: this.shipping.getStatus(),
        };
    };
    return Order;
}());
var orderRefactored = new Order();
orderRefactored.addItem({ name: "Laptop", price: 1500 });
orderRefactored.addItem({ name: "Mouse", price: 50 });
console.log(orderRefactored.getOrderDetails());
orderRefactored.processPayment();
orderRefactored.updateShippingStatus("Shipped");
console.log(orderRefactored.getOrderDetails());
