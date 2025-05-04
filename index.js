/**
* Console API
*/

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Natalia',
    turma: '01',
    disciplina: 'programacao JS'
}])

/**
* Constantes e Variaveis
*/

// const - para informacoes que nunca mudam
// var ou let - para informacoes que podem mudar

// informacoes de um cachorro que nao mudam
const nome = 'Joaquim'
const raca = 'SRD'
const cor = 'Mista'
const sexo = 'Macho'

// informacoes que mudam
let idade = 5   //Number
let peso = 5.4  //Number
let vacinado = true //Boolean
let tamanho = 'PP'  //String

/**
*hoisting - icamento ou elevacao
(a declaracao da variavel é movida, ou seja icada, para o topo do arquivo automaticamente pelo JS e recebe o valor de UNDEFINED)
*/

/**
* Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
* (funcoes - leia e escreva)

String - cadeia
Number - inteiro/real
Boolean - logico
Array - vetor/matriz

undefined
null

BitInt - Number para numeros extremamente grandes
Symbol - identificador unico
*/

//TypeScript - validação de tipos

/**
* Strings
*/

//'Turma 02 do PGATS' - aspas simples ou single quote
//"Turma 02 do PGATS" - aspas dupls ou double quote
//`Turma 02 do PGATS` - (crase) template strings

const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da turma " + turma + " no sábado dia 05 de Abril")

console.log(`Aula ${numeroAula} da turma ${turma} no sábado dia ${data}`)

console.log(`Aula ${numeroAula} da turma ${turma} no sábado dia ${new Date().getDate()}`)

console.log(numeroAula.length)

// split - separar a string
const nomeDeAlunos = "Natalia Lais Joaquim Lisbela"
const nomeDeAlunosSplit = nomeDeAlunos.split(" ")
console.log(nomeDeAlunosSplit)
console.log(nomeDeAlunos.toLowerCase())
console.log(nomeDeAlunos.toUpperCase())

console.log(nomeDeAlunos.includes("Natalia"))

// Chai - biblioteca de asserções

console.log(nomeDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "         inteiro real cadeia de caracteres...     "
console.log(conceitosLogica.trim())

let dataParaCortar = "05 de Abril"
console.log(dataParaCortar.slice(0, 2))