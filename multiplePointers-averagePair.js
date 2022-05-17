function averagePair(arr, avg) {
  if (arr.length === 0) return false;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === avg) return true;
    else if (average > avg) end--;
    else if (average < avg) start++;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([], 8));
