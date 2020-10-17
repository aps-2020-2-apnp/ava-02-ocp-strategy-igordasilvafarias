import { IArmasItens } from "./ArmasItens";
import { Jogador } from "./Jogador";

export class Desarmado implements IArmasItens {
  readonly nome: string
  dano: number

  constructor(nome: string = 'desarmado', dano: number = 0) {
    this.nome = nome
    this.dano = dano
  }

  ataca(jogador: Jogador): void {

  }

  _ataca(outro: Jogador, jogadorAtaque: string): void {
    console.log('Jogador desarmado')
  }

}
