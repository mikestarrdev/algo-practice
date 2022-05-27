function power(base, exp) {
  if (exp === 0) return 1;

  let result = base;

  function multiply(exp) {
    console.log("exp:", exp);
    if (exp === 1) {
      //   console.log(`exp = 0, result=${result}`);
      return result;
    } else {
      result *= base;
      //   console.log(exp, result);
      multiply(exp - 1);
    }
  }
  multiply(exp);
  //   console.log("result", result);
  return result;
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
