//Sistema de Tarefas e Projetos
//Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

//Crie duas subclasses: Project e DailyTasks.
//Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
//DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.

abstract class TaskManager {
    protected tasks: string[] = [];
  
    abstract addTask(task: string): void;
  
    abstract listTasks(): string[];
  }
  
  class Project extends TaskManager {
    private projectName: string;
  
    constructor(projectName: string) {
      super();
      this.projectName = projectName;
    }
  
    public addTask(task: string): void {
      this.tasks.push(`Projeto ${this.projectName}: ${task}`);
    }
  
    public listTasks(): string[] {
      return this.tasks;
    }
  }
  
  class DailyTasks extends TaskManager {
    public addTask(task: string): void {
      this.tasks.push(`Tarefa diária: ${task}`);
    }
  
    public listTasks(): string[] {
      return this.tasks;
    }
  }
  
  const projeto1 = new Project("Sistema Web");
  projeto1.addTask("Configurar ambiente de desenvolvimento");
  projeto1.addTask("Criar layout da página inicial");
  console.log("Tarefas do Projeto:");
  console.log(projeto1.listTasks());
  
  const tarefasDiarias = new DailyTasks();
  tarefasDiarias.addTask("Fazer a reunião matinal");
  tarefasDiarias.addTask("Responder e-mails");
  console.log("\nTarefas Diárias:");
  console.log(tarefasDiarias.listTasks());
  