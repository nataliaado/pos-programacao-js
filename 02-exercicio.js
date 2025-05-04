/**
Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique formatações e e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: Aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.
*/

const nomeDog = "joa@    quim!";

// Primeiro, remove caracteres especiais (mas mantém espaços) para contar palavras
let nomeComEspacos = removerCaracteresEspeciaisComEspacos(nomeDog).trim();

// Verifica se há apenas uma palavra
const valido = nomeComEspacos.split(/\s+/).length === 1;

// Agora, remove espaços para formatar como uma palavra contínua
let nomeSemEspacos = nomeComEspacos.replace(/\s+/g, "");

// Capitaliza o nome final
let nomeFormatado = capitalizarPalavra(nomeSemEspacos);

function removerCaracteresEspeciaisComEspacos(nome) {
    return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Mantém letras com acento e espaços
}

function capitalizarPalavra(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

// Exibe os resultados
console.log("Nome original:  ", nomeDog);
console.log("Nome formatado: ", nomeFormatado);
console.log("É válido?       ", valido ? "Sim" : "Não");