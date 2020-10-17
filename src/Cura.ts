import { IArmasItens } from "./ArmasItens";
import { Jogador } from "./Jogador";

export class Cura implements IArmasItens {
  readonly nome: string
  dano: number

  constructor (nome: string = 'cura', dano: number = 20) {
    this.nome = nome
    this.dano = dano
  }

  _ataca(jogador: Jogador, jogadorAtaqueTipo: string, jogadorAtaqueNome: string): void {
    if (jogador.vida >= jogador.maxVida || jogador.nome !== jogadorAtaqueNome) {
      console.info(`${jogador.nome} vida no maximo`)
    } else {
      this.dano = 20
      jogador.vida += this.dano
      if (jogador.vida > jogador.maxVida) {
        jogador.vida = jogador.maxVida
      }
    }
  }

}
