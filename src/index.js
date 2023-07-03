import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoTom = new Mago("Tom", 5, "Gelo", 6, 8);
const magoAlana = new Mago("alana", 3, "fogo", 6, 7);
const arqueiroBruno = new Arqueiro("Bruno", 7, 8);
const arqueiroMagoChico = new ArqueiroMago("Chico,", 7, 6, "Fogo", 5, 8);
const guerreiroJane = new Guerreiro("Jane", 8);
const personagens = [
  magoTom,
  magoAlana,
  arqueiroBruno,
  arqueiroMagoChico,
  guerreiroJane,
];

new PersonagemView(personagens).render();

console.log(Personagem.verificarVencedor(arqueiroMagoChico, magoAlana));
