//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.

class ContaBancaria {
    private titular: string;
    private saldo: number;
  
    constructor(titular: string, saldoInicial: number) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    public depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else {
        console.log("O valor do depósito deve ser positivo.");
      }
    }
  
    public sacar(valor: number): void {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else if (valor > this.saldo) {
        console.log("Saldo insuficiente para realizar o saque.");
      } else {
        console.log("O valor do saque deve ser positivo.");
      }
    }
  
    public exibirSaldo(): void {
      console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
  }
  
  // Exemplo de uso
  const minhaConta = new ContaBancaria("João Silva", 500);
  minhaConta.exibirSaldo();
  minhaConta.depositar(200);
  minhaConta.exibirSaldo();
  minhaConta.sacar(100);
  minhaConta.exibirSaldo();
  minhaConta.sacar(700); // Tentativa de saque maior que o saldo
  