//Sistema de Votação
//Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.

//Crie duas subclasses: Election e Poll.
//Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
//Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).


abstract class VoteSystem {
  protected votes: Record<string, number> = {};

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  public voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
  }

  public getResults(): object {
    return this.votes;
  }
}

class Poll extends VoteSystem {
  public voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
  }

  public getResults(): [string, number][] {
    return Object.keys(this.votes).map(key => [key, this.votes[key]]);
  }
}

const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log("Resultados da eleição:", election.getResults());

const poll = new Poll();
poll.voteFor("Chocolate");
poll.voteFor("creme");
poll.voteFor("Chocolate");
console.log("Resultados da pesquisa:", poll.getResults());

  