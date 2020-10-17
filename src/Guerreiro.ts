import { ITipo } from "./Tipo";

export class Guerreiro implements ITipo {
  readonly nome: string

  constructor(nome: string = 'guerreiro') {
    this.nome = nome
  }

}
