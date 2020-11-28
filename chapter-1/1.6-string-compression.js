const compressString = (str) => {
  const arr = [str[0]];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    const prev = str[i - 1];
    const curr = str[i];
    if (curr !== prev) {
      arr.push(count);
      arr.push(curr);
      count = 1;
    } else {
      count++;
    }
  }

  arr.push(count);

  const compString = arr.join('');
  return compString.length < str.length ? compString : str;
};

//tests
console.log(compressString('aabcccccaaa'), 'a2b1c5a3');
console.log(compressString('aabbcc'), 'aabbcc');
