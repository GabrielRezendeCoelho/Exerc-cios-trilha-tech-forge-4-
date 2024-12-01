//Sistema de Tarefas e Projetos
//Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Crie duas subclasses: Project e DailyTasks.
//Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
//DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(projectName) {
        var _this = _super.call(this) || this;
        _this.projectName = projectName;
        return _this;
    }
    Project.prototype.addTask = function (task) {
        this.tasks.push("Projeto ".concat(this.projectName, ": ").concat(task));
    };
    Project.prototype.listTasks = function () {
        return this.tasks;
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyTasks.prototype.addTask = function (task) {
        this.tasks.push("Tarefa di\u00E1ria: ".concat(task));
    };
    DailyTasks.prototype.listTasks = function () {
        return this.tasks;
    };
    return DailyTasks;
}(TaskManager));
var projeto1 = new Project("Sistema Web");
projeto1.addTask("Configurar ambiente de desenvolvimento");
projeto1.addTask("Criar layout da página inicial");
console.log("Tarefas do Projeto:");
console.log(projeto1.listTasks());
var tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("Fazer a reunião matinal");
tarefasDiarias.addTask("Responder e-mails");
console.log("\nTarefas Diárias:");
console.log(tarefasDiarias.listTasks());
