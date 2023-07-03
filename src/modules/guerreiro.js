import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
  static tipo = "Guerreiro";
  static descricao = "Forte e destemida!";
  forca;

  constructor(nome, forca) {
    super(nome);
    this.forca = forca;
  }

  obterInsignia() {
    if (this.level >= 7 && this.forca >= 7) {
      return "Guerreiro Furioso";
    }
    return super.obterInsignia();
  }
}
