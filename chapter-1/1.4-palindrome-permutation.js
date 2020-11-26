const palindromePermutation = (str) => {
  str = str.toLowerCase();
  str = str.replace(/[^a-z]/g, '');

  const len = str.length;
  const ht = {};

  for (ch of str) {
    if (ht[ch]) {
      ht[ch]++;
    } else {
      ht[ch] = 1;
    }
  }

  let oddChars = 0;

  for (ch in ht) {
    if (ht[ch] % 2 !== 0) {
      oddChars++;
    }
  }

  if (len % 2 === 0) {
    return oddChars === 0;
  } else {
    return oddChars === 1;
  }
};

// tests
console.log(palindromePermutation('Tact Coa'), 'true');
console.log(palindromePermutation('Tact Boa'), 'false');
console.log(palindromePermutation("Madam I'm Adam"), 'true');
