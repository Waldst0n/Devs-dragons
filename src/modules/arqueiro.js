import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  static tipo = "Arqueiro";
  static descricao = "Criado nas montanhas de Spark, ele tem opoder dos elfos";
  destreza;

  constructor(nome, destreza) {
    super(nome);
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return "Dominador de flechas";
    } else {
      return super.obterInsignia();
    }
  }
}
