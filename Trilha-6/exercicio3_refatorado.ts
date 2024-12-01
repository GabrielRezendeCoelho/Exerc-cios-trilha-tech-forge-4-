//código refatorado

class ContactValidator {
    public isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  
  class EmailSender {
    private contacts: { name: string; email: string }[] = [];
    private contactValidator: ContactValidator;
  
    constructor(contactValidator: ContactValidator) {
      this.contactValidator = contactValidator;
    }
  
    public addContact(name: string, email: string): void {
      if (!this.contactValidator.isValidEmail(email)) {
        throw new Error("Email inválido.");
      }
      this.contacts.push({ name, email });
    }
  
    public sendEmail(to: string, subject: string, body: string): void {
      console.log(`Enviando email para ${to}:`);
      console.log(`Assunto: ${subject}`);
      console.log(`Corpo: ${body}`);
    }
  
    public listContacts(): { name: string; email: string }[] {
      return this.contacts;
    }
  }
  
  const contactValidator = new ContactValidator();
  const emailSender = new EmailSender(contactValidator);
  
  emailSender.addContact("Alice", "alice@example.com");
  emailSender.addContact("Bob", "bob@example.com");
  emailSender.sendEmail("alice@example.com", "Olá!", "Bem-vinda, Alice!");
  console.log(emailSender.listContacts());
  