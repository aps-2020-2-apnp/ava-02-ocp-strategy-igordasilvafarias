import { ITipo } from "./Tipo";
export class Mago implements ITipo {
  readonly nome: string

  constructor(nome: string = 'mago') {
    this.nome = nome
  }

}
