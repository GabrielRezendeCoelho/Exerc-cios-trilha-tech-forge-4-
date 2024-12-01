//Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    // Método para adicionar um compromisso
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        if (compromisso.trim()) {
            this.compromissos.push(compromisso);
            console.log("Compromisso \"".concat(compromisso, "\" adicionado com sucesso."));
        }
        else {
            console.log("O compromisso não pode estar vazio.");
        }
    };
    // Método para listar todos os compromissos
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length === 0) {
            console.log("A agenda está vazia.");
        }
        else {
            console.log("Compromissos na agenda:");
            this.compromissos.forEach(function (compromisso, index) {
                console.log("".concat(index + 1, ". ").concat(compromisso));
            });
        }
    };
    return Agenda;
}());
// Exemplo de uso
var minhaAgenda = new Agenda();
minhaAgenda.listarCompromissos(); // Deve indicar que a agenda está vazia
minhaAgenda.adicionarCompromisso("Reunião com a equipe às 10h");
minhaAgenda.adicionarCompromisso("Consulta médica às 15h");
minhaAgenda.listarCompromissos();
