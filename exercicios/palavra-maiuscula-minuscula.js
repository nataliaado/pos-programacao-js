const nome = "Dogo", raca = "vira-lata"
let idade = 1, peso = 1.2, adotado = false

let nameUpperCase = nome.toUpperCase()
let racaFirstLetter = raca.slice(0,1).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirstLetter
}]

console.log(animal)
console.table(animal)