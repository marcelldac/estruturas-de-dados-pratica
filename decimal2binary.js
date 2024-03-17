function decimalPBinario(numeroDecimal) {
  let restStack = [];
  let rest = 0;
  let binaryString = "";

  while (numeroDecimal > 0) {
    rest = Math.floor(numeroDecimal % 2);
    restStack.push(rest);
    numeroDecimal = Math.floor(numeroDecimal / 2);
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}
