function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = 1;
  return idade >= idadeMinima || porte === "P" ? true : false;
}

function calcularConsumoDeRacao(nome, idade, peso) {
  let gramasPorKg;

  if (idade < 1) {
    gramasPorKg = 400;
  } else if (idade < 7) {
    gramasPorKg = 300;
  } else {
    gramasPorKg = 250;
  }

  const consumoDiario = peso * gramasPorKg;
  return consumoDiario;
}

function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case "pequeno":
      return "brincar dentro de casa";
    case "médio":
      return "caminhada no quarteirão";
    case "grande":
      return "correr no parque";
    default:
      return "porte inválido";
  }
}

const nomes = ["Pipoca", "Bolo", "Refrigerante", "Sorvete"];

async function buscarDadoAsync(indice = 0) {
  return nomes[indice];
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
};
