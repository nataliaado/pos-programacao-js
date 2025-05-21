/**

  Distribuidor de petiscos

  Você tem uma lista de cães: Pantera, Luna e Thor
  Crie um script que "entregue" 1 petisco para cada cão da lista.
  Exiba uma mensagem como: "Entregando petisco para Pantera"

  Mantenha os dados e a função em arquivos separados; use modularização para organizar.

 */

  import { CATS, DOGS } from './caes-dados.js'
  import { entregarPetiscos } from './distribuidor-de-petiscos-funcao.js'
  
  entregarPetiscos(DOGS)
  entregarPetiscos(CATS)
  
  