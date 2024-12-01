//Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.

abstract class Pagamento {
    public abstract processar(): void;
  }
  
  class PagamentoCartao extends Pagamento {
    private numeroCartao: string;
  
    constructor(numeroCartao: string) {
      super();
      this.numeroCartao = numeroCartao;
    }

    public processar(): void {
      if (this.validarCartao()) {
        console.log(`Pagamento com cartão ${this.numeroCartao} processado com sucesso.`);
      } else {
        console.log(`Falha ao processar o pagamento: Número do cartão ${this.numeroCartao} inválido.`);
      }
    }
  
    private validarCartao(): boolean {
      return /^[0-9]{16}$/.test(this.numeroCartao);
    }
  }
  
  class PagamentoBoleto extends Pagamento {
    private valor: number;
  
    constructor(valor: number) {
      super();
      this.valor = valor;
    }

    public processar(): void {
      const codigoBoleto = this.gerarCodigoBoleto();
      console.log(`Boleto gerado com o código: ${codigoBoleto}`);
      console.log(`Pagamento no valor de R$${this.valor.toFixed(2)} aguardando compensação.`);
    }
  
    private gerarCodigoBoleto(): string {
      return Math.random().toString().slice(2, 50);
    }
  }
  
  function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento, index) => {
      console.log(`Processando pagamento ${index + 1}:`);
      pagamento.processar();
      console.log('--------------------------');
    });
  }
  
  const pagamento1 = new PagamentoCartao("1234567812345678"); // Cartão válido
  const pagamento2 = new PagamentoCartao("12345678"); // Cartão inválido
  const pagamento3 = new PagamentoBoleto(150.75); // Valor do boleto
  
  const pagamentos: Pagamento[] = [pagamento1, pagamento2, pagamento3];
  
  processarPagamentos(pagamentos);
  