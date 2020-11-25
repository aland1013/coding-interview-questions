const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return str1 == str2;
};

// const checkPermutation = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i++) {
//     const j = str2.indexOf(str1[i]);

//     if (j === -1) {
//       return false;
//     }

//     str2 = str2.slice(0, j) + str2.slice(j + 1);
//   }

//   return true;
// };

// tests
console.log(checkPermutation('aba', 'aab'), 'true');
console.log(checkPermutation('aba', 'aaba'), 'false');
console.log(checkPermutation('aba', 'aa'), 'false');
