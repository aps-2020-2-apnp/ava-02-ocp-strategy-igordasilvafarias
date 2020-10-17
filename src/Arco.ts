import { IArmasItens } from "./ArmasItens";
import { Jogador } from "./Jogador";

export class Arco implements IArmasItens {
  readonly nome: string
  dano: number

  constructor(nome: string = 'arco', dano: number = 5) {
    this.nome = nome
    this.dano = dano
  }

  ataca(jogador: Jogador): void {

  }

  _ataca(outro: Jogador, jogadorAtaque: string): void {
    if (jogadorAtaque === 'arqueiro' && this.nome === 'arco') {
      this.dano = 20
    } else {
      this.dano = 10
    }
    outro.vida -= this.dano
  }

}
