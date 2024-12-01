//Documentos
//Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string). Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".

interface Documento {
    titulo: string;
    conteudo: string;
  }
  
  class Texto implements Documento {
    titulo: string;
    conteudo: string;
  
    constructor(titulo: string, conteudo: string) {
      this.titulo = titulo;
      this.conteudo = conteudo;
    }
  
    exibir(): string {
      return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
  }

  const documento1 = new Texto("Introdução ao TypeScript", "TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript.");
  console.log(documento1.exibir());
  
  const documento2 = new Texto("Conceitos de Orientação a Objetos", "A orientação a objetos é um paradigma de programação baseado no conceito de objetos.");
  console.log(documento2.exibir());
  