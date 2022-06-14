function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let z = 0;
  while (z < num) {
    maxSum += arr[z];
    z++;
  }
  let x = 0;
  let y = num - 1;
  while (y < arr.length) {
    x++;
    y++;
    if (maxSum - x + y > maxSum) {
      maxSum - x + y;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
