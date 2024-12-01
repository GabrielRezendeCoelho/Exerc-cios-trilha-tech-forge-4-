//Gerenciamento de Usuários e Notificações
//Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.
//Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
//Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
//Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.createUser = function (name, email) {
        var user = { name: name, email: email };
        this.users.push(user);
        this.sendEmailNotification(email, "Bem-vindo!", "Ol\u00E1 ".concat(name, ", bem-vindo ao nosso sistema!"));
    };
    UserManager.prototype.sendEmailNotification = function (to, subject, body) {
        console.log("Enviando email para ".concat(to, ":"));
        console.log("Assunto: ".concat(subject));
        console.log("Corpo: ".concat(body));
    };
    UserManager.prototype.listUsers = function () {
        return this.users;
    };
    return UserManager;
}());
var userManager = new UserManager();
userManager.createUser("Alice", "alice@example.com");
userManager.createUser("Bob", "bob@example.com");
console.log(userManager.listUsers());
