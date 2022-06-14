function binarySearch(arr, val) {
  if (!arr.includes(val)) return -1;
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  if (val === middle) return arr.indexOf(val);

  if (middle < val) {
    while (middle !== val) {
      let start = middle;
      middle = (start + end) / 2;
      if (middle === val) return arr.indexOf(val);
    }
  } else if (middle > val) {
    while (middle !== val) {
      middle = start;
      middle = (start + middle) / 2;
      if (middle === val) return arr.indexOf(val);
    }
  }
}
