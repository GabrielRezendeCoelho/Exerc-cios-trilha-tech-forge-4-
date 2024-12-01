//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

abstract class FiguraGeometrica {
    public abstract calcularArea(): number;
  }
  
  class Circulo extends FiguraGeometrica {
    private raio: number;
  
    constructor(raio: number) {
      super();
      this.raio = raio;
    }
  
    public calcularArea(): number {
      return Math.PI * this.raio ** 2;
    }
  }
  
  class Quadrado extends FiguraGeometrica {
    private lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    public calcularArea(): number {
      return this.lado ** 2;
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    public calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  }
  function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
      console.log(`Área da Figura ${index + 1}: ${figura.calcularArea().toFixed(2)}`);
    });
  }
  
  const circulo = new Circulo(5);
  const quadrado = new Quadrado(4);
  const triangulo = new Triangulo(6, 3);
  
  const figuras: FiguraGeometrica[] = [circulo, quadrado, triangulo];
  
  imprimirAreas(figuras);
  