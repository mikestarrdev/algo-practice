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

// Multiple Pointers - isSubsequence
function isSubsequence(str1, str2) {

}