// código refatorado
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.sendEmail = function (to, subject, body) {
        console.log("Enviando email para ".concat(to, ":"));
        console.log("Assunto: ".concat(subject));
        console.log("Corpo: ".concat(body));
    };
    return EmailNotification;
}());
var UserManager = /** @class */ (function () {
    function UserManager(emailNotificationService) {
        this.users = [];
        this.emailNotificationService = emailNotificationService;
    }
    UserManager.prototype.createUser = function (name, email) {
        var user = { name: name, email: email };
        this.users.push(user);
        this.emailNotificationService.sendEmail(email, "Bem-vindo!", "Ol\u00E1 ".concat(name, ", bem-vindo ao nosso sistema!"));
    };
    UserManager.prototype.listUsers = function () {
        return this.users;
    };
    return UserManager;
}());
var emailNotificationService = new EmailNotification();
var userManager = new UserManager(emailNotificationService);
userManager.createUser("Alice", "alice@example.com");
userManager.createUser("Bob", "bob@example.com");
console.log(userManager.listUsers());
