function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = 1;
  return idade >= idadeMinima || porte === "P" ? true : false;
}

function calcularConsumoDeRacao(nome, idade, peso) {
  const gramasPorKg = 300;
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

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
};
