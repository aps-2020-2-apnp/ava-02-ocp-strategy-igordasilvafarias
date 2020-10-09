import { Jogador } from './Jogador'

const jog1 = new Jogador('Dave', 'guerreiro', 90)

console.log(jog1.nome) // Dave
console.log(jog1.tipo) // guerreiro
console.log(jog1.vida) // 90

const jog2 = new Jogador('John', 'mago')

console.log(jog2.nome) // John
console.log(jog2.tipo) // mago
console.log(jog2.vida) // 100

console.log(jog1.arma) // desarmado
console.log(jog2.arma) // desarmado

jog1.pega('faca')
console.log(jog1.arma) // faca

jog2.pega('espada')
console.log(jog2.arma) // espada

jog1.ataca(jog2) // Dave ataca John com faca
console.log(jog2.vida) // 90

jog2.ataca(jog1) // John ataca Dave com espada
console.log(jog1.vida) // 80

jog1.pega('espada')
jog1.ataca(jog2) // Dave ataca John com espada
console.log(jog2.vida) // 70

jog1.soltaArma()
console.log(jog1.arma) // desarmado
jog1.ataca(jog2) // Dave está desarmado
console.log(jog2.vida) // 70

jog2.pega('poção')
jog2.ataca(jog1) // John ataca Dave com poção
console.log(jog1.vida) // 60

const jog3 = new Jogador('Peter', 'arqueiro', 70)
console.log(jog3.arma) // desarmado
jog3.pega('arco')
jog3.ataca(jog1)
console.log(jog1.vida) // 40
jog3.pega('faca')
jog3.ataca(jog1)
console.log(jog1.vida) // 30
