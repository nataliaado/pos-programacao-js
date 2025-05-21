const listaInteiroStrings = [5, 'olá', 8, 'mundo', 13]

const filtrarInteiros = (lista) => {
  const listaInteiros = []
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] * 1 === lista[i]) {
      listaInteiros[listaInteiros.length] = lista[i]
    }
  }
  return listaInteiros
}

const novaLista = filtrarInteiros(listaInteiroStrings)
console.log(novaLista)