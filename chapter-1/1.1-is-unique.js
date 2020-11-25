// O(n) solution
const isUnique = (str) => {
  const ht = {};

  for (ch of str) {
    if (ht[ch] && ht[ch] === 1) {
      return false;
    } else {
      ht[ch] = 1;
    }
  }

  return true;
};

// O(n^2) solution
// const isUnique = (str) => {
//   for (let i = 0; i < str.length - 1; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// tests
console.log(isUnique('aaa'), 'false');
console.log(isUnique('abc'), 'true');
console.log(isUnique('abca'), 'false');
