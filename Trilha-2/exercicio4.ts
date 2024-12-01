//Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

class Temperatura {
    private valor: number; // Valor em Celsius
  
    constructor(valor: number) {
      this.valor = valor;
    }
  
    // Método para converter para Fahrenheit
    public paraFahrenheit(): number {
      return this.valor * 9 / 5 + 32;
    }
  
    // Método para converter para Kelvin
    public paraKelvin(): number {
      return this.valor + 273.15;
    }
    public exibirConversoes(): void {
      console.log(`Temperatura: ${this.valor.toFixed(2)}°C`);
      console.log(`Em Fahrenheit: ${this.paraFahrenheit().toFixed(2)}°F`);
      console.log(`Em Kelvin: ${this.paraKelvin().toFixed(2)}K`);
    }
  }
  const temp1 = new Temperatura(25);
  temp1.exibirConversoes();
  
  const temp2 = new Temperatura(-10);
  temp2.exibirConversoes();
  