//Sistema de Envio de Emails e Validação de Contato
//Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.

//Implemente a validação e o envio de email na mesma classe.
//Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
//Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.

class EmailSender {
    private contacts: { name: string; email: string }[] = [];
  
    public addContact(name: string, email: string): void {
      if (!this.isValidEmail(email)) {
        throw new Error("Email inválido.");
      }
      this.contacts.push({ name, email });
    }
  
    public sendEmail(to: string, subject: string, body: string): void {
      console.log(`Enviando email para ${to}:`);
      console.log(`Assunto: ${subject}`);
      console.log(`Corpo: ${body}`);
    }
  
    private isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    public listContacts(): { name: string; email: string }[] {
      return this.contacts;
    }
  }
  
  const emailSender = new EmailSender();
  emailSender.addContact("Alice", "alice@example.com");
  emailSender.addContact("Bob", "bob@example.com");
  emailSender.sendEmail("alice@example.com", "Olá!", "Bem-vinda, Alice!");
  console.log(emailSender.listContacts());
  