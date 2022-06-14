// Write a function that takes an array of numbers and returns the product of them all

function productOfArray(arr) {
  if (arr.length === 0) return undefined;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] * arr[1];

  let results = arr[0];

  function sliceArr(arr) {
    if (arr.length > 2) {
      results *= arr[1];
      return sliceArr(arr.slice(1));
    }
    
  }
  sliceArr(arr);
  return results;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
