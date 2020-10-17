import { IArmasItens } from "./ArmasItens";
import { Jogador } from "./Jogador";

export class Espada implements IArmasItens {
  readonly nome: string
  dano: number

  constructor(nome: string = 'espada', dano: number = 5) {
    this.nome = nome
    this.dano = dano
  }

  _ataca(outro: Jogador, jogadorAtaque: string): void {
    if (jogadorAtaque === 'guerreiro' && this.nome === 'espada') {
      this.dano = 20
    } else {
      this.dano = 10
    }
    outro.vida -= this.dano
  }

}
