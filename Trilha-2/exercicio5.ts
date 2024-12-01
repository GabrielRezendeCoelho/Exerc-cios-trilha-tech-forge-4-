//Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.
class Agenda {
    private compromissos: string[];
  
    constructor() {
      this.compromissos = [];
    }
  
    // Método para adicionar um compromisso
    public adicionarCompromisso(compromisso: string): void {
      if (compromisso.trim()) {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado com sucesso.`);
      } else {
        console.log("O compromisso não pode estar vazio.");
      }
    }
  
    // Método para listar todos os compromissos
    public listarCompromissos(): void {
      if (this.compromissos.length === 0) {
        console.log("A agenda está vazia.");
      } else {
        console.log("Compromissos na agenda:");
        this.compromissos.forEach((compromisso, index) => {
          console.log(`${index + 1}. ${compromisso}`);
        });
      }
    }
  }
  
  // Exemplo de uso
  const minhaAgenda = new Agenda();
  minhaAgenda.listarCompromissos(); // Deve indicar que a agenda está vazia
  minhaAgenda.adicionarCompromisso("Reunião com a equipe às 10h");
  minhaAgenda.adicionarCompromisso("Consulta médica às 15h");
  minhaAgenda.listarCompromissos();
  