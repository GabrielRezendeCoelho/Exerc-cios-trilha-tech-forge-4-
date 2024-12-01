//Inventário de Itens
//Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript

//Crie duas subclasses WarehouseInventory e StoreInventory.
//WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
//StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
//Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.

abstract class Inventory {
    protected items: Record<string, number> = {};
    abstract addItem(item: string, quantity: number): void;
  
    abstract removeItem(item: string): void;
    public getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  class WarehouseInventory extends Inventory {
    public addItem(item: string, quantity: number): void {
      if (this.items[item]) {
        this.items[item] += quantity;
      } else {
        this.items[item] = quantity;
      }
    }
  
    public removeItem(item: string): void {
      if (this.items[item]) {
        delete this.items[item];
      } else {
        console.log(`Item "${item}" não encontrado no inventário.`);
      }
    }
  }
  
  class StoreInventory extends Inventory {
    private readonly maxQuantityPerItem = 10;
  
    public addItem(item: string, quantity: number): void {
      const currentQuantity = this.items[item] || 0;
      const newQuantity = currentQuantity + quantity;
  
      if (newQuantity > this.maxQuantityPerItem) {
        console.log(
          `Quantidade excede o limite de ${this.maxQuantityPerItem} unidades para "${item}". Adicionando até o limite.`
        );
        this.items[item] = this.maxQuantityPerItem;
      } else {
        this.items[item] = newQuantity;
      }
    }
  
    public removeItem(item: string): void {
      if (this.items[item]) {
        delete this.items[item];
      } else {
        console.log(`Item "${item}" não encontrado no inventário.`);
      }
    }
  }
  
  const warehouse = new WarehouseInventory();
  warehouse.addItem("Caixa de Parafusos", 100);
  warehouse.addItem("Chave Inglesa", 50);
  console.log("Armazém - Inventário:", warehouse.getInventory());
  warehouse.removeItem("Caixa de Parafusos");
  console.log("Armazém - Após Remoção:", warehouse.getInventory());
  
  const store = new StoreInventory();
  store.addItem("Camiseta", 8);
  store.addItem("Camiseta", 5); // Excede o limite
  store.addItem("Boné", 3);
  console.log("\nLoja - Inventário:", store.getInventory());
  store.removeItem("Camiseta");
  console.log("Loja - Após Remoção:", store.getInventory());
  