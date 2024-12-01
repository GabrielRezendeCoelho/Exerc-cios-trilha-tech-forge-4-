//Sistema de Envio de Emails e Validação de Contato
//Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
//Implemente a validação e o envio de email na mesma classe.
//Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
//Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.
var EmailSender = /** @class */ (function () {
    function EmailSender() {
        this.contacts = [];
    }
    EmailSender.prototype.addContact = function (name, email) {
        if (!this.isValidEmail(email)) {
            throw new Error("Email inválido.");
        }
        this.contacts.push({ name: name, email: email });
    };
    EmailSender.prototype.sendEmail = function (to, subject, body) {
        console.log("Enviando email para ".concat(to, ":"));
        console.log("Assunto: ".concat(subject));
        console.log("Corpo: ".concat(body));
    };
    EmailSender.prototype.isValidEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    EmailSender.prototype.listContacts = function () {
        return this.contacts;
    };
    return EmailSender;
}());
var emailSender = new EmailSender();
emailSender.addContact("Alice", "alice@example.com");
emailSender.addContact("Bob", "bob@example.com");
emailSender.sendEmail("alice@example.com", "Olá!", "Bem-vinda, Alice!");
console.log(emailSender.listContacts());
