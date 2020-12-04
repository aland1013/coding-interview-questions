// returns true if s2 is a substring of s1
const isSubstring = (s1, s2) => {
  return s1.includes(s2);
};

// returns true if s2 is a rotation of s1
const isRotation = (s1, s2) => {
  // if (s1 === s2) {
  //   return true;
  // }

  // if (s1.length !== s2.length) {
  //   return false;
  // }

  // const n = s1.length;

  // let i = 0;
  // let sub = s2[i];
  // while (s1.includes(sub) && i < n) {
  //   i++;
  //   sub += s2[i];
  // }

  // let remainder = s2.slice(i);
  // return isSubstring(s1, remainder);

  return isSubstring(s1 + s1, s2);
};

// tests
console.log(isRotation('waterbottle', 'erbottlewat'), 'true');

// const isRotation = (s1, s2) => {
//   if (s1 === s2) {
//     return true;
//   }

//   if (s1.length !== s2.length) {
//     return false;
//   }

//   const n = s1.length;

//   let i = 0;
//   let sub = s2[i];
//   while (s1.includes(sub) && i < n) {
//     i++;
//     sub += s2[i];
//   }

//   let remainder = s2.slice(i);
//   return isSubstring(s1, remainder);
// };
