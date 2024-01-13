function decimalPBinario(numeroDecimal) {
  var pilhaDeRestos = [],
    restoDivisao,
    stringBinaria = "";
  while (numeroDecimal > 0) {
    restoDivisao = Math.floor(numeroDecimal % 2);
    pilhaDeRestos.push(restoDivisao);
    numeroDecimal = Math.floor(numeroDecimal / 2);
  }
  while (pilhaDeRestos.length > 0) {
    stringBinaria += pilhaDeRestos.pop().toString();
  }
  return stringBinaria;
}
