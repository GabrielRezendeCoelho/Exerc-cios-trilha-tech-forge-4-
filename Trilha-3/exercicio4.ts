//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.

abstract class Animal {
    protected energia: number;
  
    constructor(energiaInicial: number) {
      this.energia = energiaInicial;
    }
  
    public comer(): void {
      this.energia += 10;
      console.log(`O animal comeu e agora tem ${this.energia} de energia.`);
    }
  
    public statusEnergia(): void {
      console.log(`Energia atual: ${this.energia}`);
    }
  
    public abstract realizarAtividade(): void;
  }
  
  class Leao extends Animal {
    constructor(energiaInicial: number) {
      super(energiaInicial);
    }
  
    public comer(): void {
      console.log("O leão vai caçar...");
      this.energia -= 5;
      super.comer();
    }

    public realizarAtividade(): void {
      console.log("O leão está caçando.");
      this.comer();
    }
  }
  
  class Passaro extends Animal {
    constructor(energiaInicial: number) {
      super(energiaInicial);
    }
  
    public comer(): void {
      super.comer();
    }
  
    public realizarAtividade(): void {
      console.log("O pássaro está cantando.");
      this.comer();
    }
  }
  
  function atividadeAnimal(animais: Animal[]): void {
    animais.forEach((animal, index) => {
      console.log(`Animal ${index + 1}:`);
      animal.realizarAtividade();
      animal.statusEnergia();
      console.log('--------------------');
    });
  }
  
  const leao = new Leao(20);
  const passaro = new Passaro(10);
  
  const animais: Animal[] = [leao, passaro];
  
  atividadeAnimal(animais);
  