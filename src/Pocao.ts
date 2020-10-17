import { IArmasItens } from "./ArmasItens";
import { Jogador } from "./Jogador";

export class Pocao implements IArmasItens {
  readonly nome: string
  dano: number

  constructor(nome: string = 'pocao', dano: number = 5) {
    this.nome = nome
    this.dano = dano
  }

  _ataca(outro: Jogador, jogadorAtaque: string): void {
    if (jogadorAtaque === 'mago' && this.nome === 'pocao') {
      this.dano = 20
    } else {
      this.dano = 10
    }
    outro.vida -= this.dano
  }

}
