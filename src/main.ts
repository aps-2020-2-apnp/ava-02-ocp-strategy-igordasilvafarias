import { Arco } from './Arco'
import { Arqueiro } from './Arqueiro'
import { Cura } from './Cura'
import { Espada } from './Espada'
import { Faca } from './Faca'
import { Guerreiro } from './Guerreiro'
import { Jogador } from './Jogador'
import { Mago } from './Mago'
import { Pocao } from './Pocao'

const jog1 = new Jogador('Dave', new Guerreiro(), 90)

console.log(jog1.nome) // Dave
console.log(jog1.tipo.nome) // guerreiro
console.log(jog1.vida) // 90

const jog2 = new Jogador('John', new Mago())

console.log(jog2.nome) // John
console.log(jog2.tipo.nome) // mago
console.log(jog2.vida) // 100

console.log(jog1.arma.nome) // desarmado
console.log(jog2.arma.nome) // desarmado

jog1.pega(new Faca())
console.log(jog1.arma.nome) // faca

jog2.pega(new Espada())
console.log(jog2.arma.nome) // espada

console.log(jog2.tipo.nome) // 90
jog1.ataca(jog2) // Dave ataca John com faca
console.log(jog2.vida) // 90

jog2.ataca(jog1) // John ataca Dave com espada
console.log(jog1.vida) // 80

jog1.pega(new Espada())
jog1.ataca(jog2) // Dave ataca John com espada
console.log(jog2.vida) // 70

jog1.soltaArma()
console.log(jog1.arma.nome) // desarmado
jog1.ataca(jog2) // Dave está desarmado
console.log(jog2.vida) // 70

jog2.pega(new Pocao())
jog2.ataca(jog1) // John ataca Dave com poção
console.log(jog1.vida) // 60

const jog3 = new Jogador('Peter', new Arqueiro(), 70)
console.log(jog3.arma.nome) // desarmado
jog3.pega(new Arco())
jog3.ataca(jog1)
console.log(jog1.vida) // 40
jog3.pega(new Faca())
jog3.ataca(jog1)
console.log(jog1.vida) // 30

// Teste jog1 si atacando
console.log(jog1.arma.nome) // Desarmado
jog1.pega(new Arco())
jog1.ataca(jog1)
console.log(jog1.vida) // 30

// Teste CURA jog1
console.log(jog1.arma.nome) // Arco
jog1.pega(new Cura())
jog1.ataca(jog1)
console.log(jog1.vida) // 50
console.log(jog1.tipo.nome) // guerreiro
console.log(jog1.maxVida) // 90
jog1.ataca(jog1)
console.log(jog1.vida) // 70
jog1.ataca(jog1)
console.log(jog1.vida) // 90
jog1.ataca(jog1)
console.log(jog1.vida) // 90
jog1.ataca(jog1)
console.log(jog1.vida) // 90

const jog4 = new Jogador('igor', new Arqueiro(), 85)

console.log(jog4.vida) // 85
jog1.ataca(jog4)
console.log(jog4.vida) // 85
jog2.ataca(jog4)
console.log(jog4.vida) // 65
jog2.pega(new Faca())
jog2.ataca(jog4)
console.log(jog4.vida) // 60

jog4.pega(new Cura())
jog4.ataca(jog4)
console.log(jog4.vida) // 80
jog4.ataca(jog4)
console.log(jog4.vida) // 85
jog4.ataca(jog4)
console.log(jog4.vida) // 85

console.log(jog2.vida) // 70
jog2.ataca(jog2)
console.log(jog2.vida) // 70

