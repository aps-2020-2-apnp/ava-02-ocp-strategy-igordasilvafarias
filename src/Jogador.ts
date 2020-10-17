import { IArmasItens } from "./ArmasItens"
import { Desarmado } from "./Desarnado"
import { Guerreiro } from "./Guerreiro"
import { ITipo } from "./Tipo"

export class Jogador {

  readonly nome: string
  readonly tipo: ITipo
  vida: number
  arma: IArmasItens
  maxVida: number = 0

  constructor(nome: string, tipo: ITipo, vida: number = 100) {
    this.nome = nome
    this.tipo = tipo
    this.vida = vida
    this.arma = new Desarmado()
    this.maxVida = vida
  }

  pega(arma: IArmasItens): void {
    console.info(`${this.nome} pegou ${arma.nome}`)
    this.arma = arma
  }

  soltaArma(): void {
    console.info(`${this.nome} soltou ${this.arma.nome}`)
    this.arma = new Desarmado()
  }

  ataca(outro: Jogador): void {
    if (this.nome === outro.nome && this.arma.nome !== 'cura') {
      console.info(`${this.nome} nao pode si atacar!`)
    } else if (this.arma.nome !== 'cura') {
        console.info(`${this.nome} ataca ${outro.nome} com ${this.arma.nome}`)
        this.arma._ataca(outro, this.tipo.nome, this.nome)
      } else {
        this.arma._ataca(outro, this.tipo.nome, this.nome)
      }
  }
}
