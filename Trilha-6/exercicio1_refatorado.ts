
//Exercicio 1 refatorado

class Cart {
    private items: { name: string; price: number }[] = [];
  
    public addItem(item: { name: string; price: number }): void {
      this.items.push(item);
    }
  
    public calculateTotalPrice(): number {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  
    public getItems(): { name: string; price: number }[] {
      return this.items;
    }
  }
  
  class Payment {
    private status: string = "Pending";
  
    public processPayment(amount: number): void {
      if (amount > 0) {
        this.status = "Paid";
      } else {
        throw new Error("Cannot process payment: Total amount is zero.");
      }
    }
  
    public getStatus(): string {
      return this.status;
    }
  }
  
  class Shipping {
    private status: string = "Not Shipped";
  
    public updateStatus(status: string): void {
      this.status = status;
    }
  
    public getStatus(): string {
      return this.status;
    }
  }
  
  class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;
  
    constructor() {
      this.cart = new Cart();
      this.payment = new Payment();
      this.shipping = new Shipping();
    }
  
    public addItem(item: { name: string; price: number }): void {
      this.cart.addItem(item);
    }
  
    public processPayment(): void {
      const totalPrice = this.cart.calculateTotalPrice();
      this.payment.processPayment(totalPrice);
    }
  
    public updateShippingStatus(status: string): void {
      if (this.payment.getStatus() === "Paid") {
        this.shipping.updateStatus(status);
      } else {
        throw new Error("Cannot ship order: Payment not processed.");
      }
    }
  
    public getOrderDetails(): object {
      return {
        items: this.cart.getItems(),
        totalPrice: this.cart.calculateTotalPrice(),
        paymentStatus: this.payment.getStatus(),
        shippingStatus: this.shipping.getStatus(),
      };
    }
  }
  
  const orderRefactored = new Order();
  orderRefactored.addItem({ name: "Laptop", price: 1500 });
  orderRefactored.addItem({ name: "Mouse", price: 50 });
  console.log(orderRefactored.getOrderDetails());
  
  orderRefactored.processPayment();
  orderRefactored.updateShippingStatus("Shipped");
  console.log(orderRefactored.getOrderDetails());
  