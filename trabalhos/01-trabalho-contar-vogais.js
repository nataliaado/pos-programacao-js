const texto = 'ola mundo'

const contarVogais = (texto) => {
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i]
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contador++
      }
    }
    return contador
  }


const resultado = contarVogais(texto)
console.log(resultado)