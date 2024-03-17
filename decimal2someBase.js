function baseConverter(decimalNumber, base) {
  let restStack = [];
  let rest;
  let baseString = "";
  let digits = "0123456789ABCDEF";

  while (decimalNumber > 0) {
    rest = Math.floor(decimalNumber % base);
    restStack.push(rest);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  while (restStack.length > 0) {
    baseString += digits[restStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(123, 2)); //base hexadecimal
