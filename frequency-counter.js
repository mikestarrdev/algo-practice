function sameFrequency(n1, n2) {
  // good luck. Add any arguments you deem necessary.
  if (String(n1).length !== String(n2).length) return false;
  let str1 = n1.toString();
  let str2 = n2.toString();
  let obj = {};

  for (let n of str1) {
    if (!obj[n]) {
      obj[n] = 1;
    } else {
      obj[n]++;
    }
  }

  //   console.log(obj);

  for (let n of str2) {
    if (!obj[n]) {
      return false;
    } else {
      obj[n]--;
    }
  }

  // console.log(obj);

  for (let x in obj) {
    if (!obj.x === 0) {
      return false;
    } else {
      return true;
    }
  }
}

// console.log(sameFrequency(281, 812));
// console.log(sameFrequency(3589578, 5879385));

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let obj = {};
  for (const arg of args) {
    if (!obj[arg]) {
      obj[arg] = 1;
    } else {
      obj[arg] += 1;
    }
  }
  console.log(obj);
  for (const arg in obj) {
    if (obj[arg] !== 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 3, 3, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
