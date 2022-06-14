function factorial(num) {
  if (num === 1) return 1;
  if (num === 0) return 1;

  let result = num;

  function operation(num) {
    result *= num - 1;
    if (num === 2) {
      return;
    } else {
      operation(num - 1);
    }
  }

  operation(num);
  return result;
}

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));
// console.log(factorial(17));
