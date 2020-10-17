import { IArmasItens } from "./ArmasItens";
import { Jogador } from "./Jogador";
import { Guerreiro } from "./Guerreiro"

export class Faca implements IArmasItens {
  readonly nome: string
  dano: number

  constructor(nome: string = 'faca', dano: number = 5) {
    this.nome = nome
    this.dano = dano
  }

  _ataca(outro: Jogador, jogadorAtaque: string): void {
    if (jogadorAtaque === 'guerreiro' || jogadorAtaque === 'arqueiro' && this.nome === 'faca') {
      this.dano = 10
    } else {
       this.dano = 5
    }
    outro.vida -= this.dano
  }

}
