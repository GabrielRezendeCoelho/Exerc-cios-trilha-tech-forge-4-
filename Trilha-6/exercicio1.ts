///Separação de Responsabilidades em Classe de Pedido
//Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

//Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
//Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
//Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.

class Order {
    private items: { name: string; price: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: string = "Pending";
    private shippingStatus: string = "Not Shipped";
  
    public addItem(item: { name: string; price: number }): void {
      this.items.push(item);
      this.calculateTotalPrice();
    }
  
    private calculateTotalPrice(): void {
      this.totalPrice = this.items.reduce((sum, item) => sum + item.price, 0);
    }
  
    public processPayment(): void {
      if (this.totalPrice > 0) {
        this.paymentStatus = "Paid";
      } else {
        throw new Error("Cannot process payment: No items in the order.");
      }
    }
  
    public updateShippingStatus(status: string): void {
      if (this.paymentStatus === "Paid") {
        this.shippingStatus = status;
      } else {
        throw new Error("Cannot ship order: Payment not processed.");
      }
    }
  
    public getOrderDetails(): object {
      return {
        items: this.items,
        totalPrice: this.totalPrice,
        paymentStatus: this.paymentStatus,
        shippingStatus: this.shippingStatus,
      };
    }
  }
  
  const order = new Order();
  order.addItem({ name: "Laptop", price: 1500 });
  order.addItem({ name: "Mouse", price: 50 });
  console.log(order.getOrderDetails());
  
  order.processPayment();
  order.updateShippingStatus("Shipped");
  console.log(order.getOrderDetails());


  