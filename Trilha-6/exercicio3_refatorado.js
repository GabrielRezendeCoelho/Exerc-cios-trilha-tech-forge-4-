//código refatorado
var ContactValidator = /** @class */ (function () {
    function ContactValidator() {
    }
    ContactValidator.prototype.isValidEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    return ContactValidator;
}());
var EmailSender = /** @class */ (function () {
    function EmailSender(contactValidator) {
        this.contacts = [];
        this.contactValidator = contactValidator;
    }
    EmailSender.prototype.addContact = function (name, email) {
        if (!this.contactValidator.isValidEmail(email)) {
            throw new Error("Email inválido.");
        }
        this.contacts.push({ name: name, email: email });
    };
    EmailSender.prototype.sendEmail = function (to, subject, body) {
        console.log("Enviando email para ".concat(to, ":"));
        console.log("Assunto: ".concat(subject));
        console.log("Corpo: ".concat(body));
    };
    EmailSender.prototype.listContacts = function () {
        return this.contacts;
    };
    return EmailSender;
}());
var contactValidator = new ContactValidator();
var emailSender = new EmailSender(contactValidator);
emailSender.addContact("Alice", "alice@example.com");
emailSender.addContact("Bob", "bob@example.com");
emailSender.sendEmail("alice@example.com", "Olá!", "Bem-vinda, Alice!");
console.log(emailSender.listContacts());
