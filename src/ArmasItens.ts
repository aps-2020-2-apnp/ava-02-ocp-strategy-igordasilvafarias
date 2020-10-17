import { Jogador } from "./Jogador";

export interface IArmasItens {
  readonly nome: string
  dano: number
  _ataca(jogador: Jogador, jogadorAtaqueTipo: string, jogadorAtaqueNome: string): void
}
