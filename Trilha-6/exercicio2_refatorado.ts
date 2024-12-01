// código refatorado

class EmailNotification {
  public sendEmail(to: string, subject: string, body: string): void {
    console.log(`Enviando email para ${to}:`);
    console.log(`Assunto: ${subject}`);
    console.log(`Corpo: ${body}`);
  }
}

class UserManager {
  private users: { name: string; email: string }[] = [];
  private emailNotificationService: EmailNotification;

  constructor(emailNotificationService: EmailNotification) {
    this.emailNotificationService = emailNotificationService;
  }

  public createUser(name: string, email: string): void {
    const user = { name, email };
    this.users.push(user);
    this.emailNotificationService.sendEmail(
      email,
      "Bem-vindo!",
      `Olá ${name}, bem-vindo ao nosso sistema!`
    );
  }

  public listUsers(): { name: string; email: string }[] {
    return this.users;
  }
}

const emailNotificationService = new EmailNotification();
const userManager = new UserManager(emailNotificationService);

userManager.createUser("Alice", "alice@example.com");
userManager.createUser("Bob", "bob@example.com");
console.log(userManager.listUsers());
