import { ITipo } from "./Tipo";

export class Arqueiro implements ITipo {
  readonly nome: string

  constructor(nome: string = 'arqueiro') {
    this.nome = nome
  }

}
