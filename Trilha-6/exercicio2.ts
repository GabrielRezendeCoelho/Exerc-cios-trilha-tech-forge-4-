//Gerenciamento de Usuários e Notificações
//Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.

//Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
//Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
//Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.

class UserManager {
    private users: { name: string; email: string }[] = [];
  
    public createUser(name: string, email: string): void {
      const user = { name, email };
      this.users.push(user);
      this.sendEmailNotification(email, "Bem-vindo!", `Olá ${name}, bem-vindo ao nosso sistema!`);
    }
  
    private sendEmailNotification(to: string, subject: string, body: string): void {
      console.log(`Enviando email para ${to}:`);
      console.log(`Assunto: ${subject}`);
      console.log(`Corpo: ${body}`);
    }
  
    public listUsers(): { name: string; email: string }[] {
      return this.users;
    }
  }
  
  const userManager = new UserManager();
  userManager.createUser("Alice", "alice@example.com");
  userManager.createUser("Bob", "bob@example.com");
  console.log(userManager.listUsers());
  