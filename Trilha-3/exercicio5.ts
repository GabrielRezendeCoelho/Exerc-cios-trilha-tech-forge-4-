//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.

abstract class Funcionario {
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getSalario(): number {
      return this.salario;
    }
  
    public abstract calcularBonus(): number;
  
    public calcularSalarioComBonus(): number {
      const bonus = this.calcularBonus();
      return this.salario + bonus;
    }
  }
 
  class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }

    public calcularBonus(): number {
      return this.getSalario() * 0.10;
    }
  }
  
  class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }
  
    public calcularBonus(): number {
      return this.getSalario() * 0.05;
    }
  }
  
  function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach((funcionario, index) => {
      const salarioComBonus = funcionario.calcularSalarioComBonus();
      console.log(`${funcionario.getNome()} - Salário final com bônus: R$${salarioComBonus.toFixed(2)}`);
    });
  }
  
  const gerente = new Gerente("Carlos", 5000);
  const operario = new Operario("João", 3000);
  
  const funcionarios: Funcionario[] = [gerente, operario];
  
  calcularSalarioComBonus(funcionarios);
  