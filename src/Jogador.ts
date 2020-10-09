export class Jogador {

  readonly nome: string
  readonly tipo: string
  vida: number
  arma: string

  constructor(nome: string, tipo: string, vida: number = 100) {
    this.nome = nome
    this.tipo = tipo
    this.vida = vida
    this.arma = 'desarmado'
  }

  pega(arma: string): void {
    console.info(`${this.nome} pegou ${arma}`)
    this.arma = arma
  }

  soltaArma(): void {
    console.info(`${this.nome} soltou ${this.arma}`)
    this.arma = 'desarmado'
  }

  ataca(outro: Jogador): void {
    console.info(`${this.nome} ataca ${outro.nome} com ${this.arma}`)
    switch(this.arma) {
      case 'faca': {
        if (this.tipo === 'guerreiro') {
          outro.vida -= 10
        } else {
          outro.vida -= 5
        }
        break
      }
      case 'espada': {
        if (this.tipo === 'guerreiro') {
          outro.vida -= 20
        } else {
          outro.vida -= 10
        }
        break
      }
      case 'poção': {
        if (this.tipo === 'mago') {
          outro.vida -= 20
        } else {
          outro.vida -= 10
        }
        break
      }
    }


  }








}
