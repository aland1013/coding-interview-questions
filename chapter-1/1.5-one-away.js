const oneAway = (str1, str2) => {
  if (str1 === str2) {
    return true;
  }

  if (str2.length === str1.length - 1) {
    return offByOne(str1, str2);
  }

  if (str1.length === str2.length - 1) {
    return offByOne(str2, str1);
  }

  ht = {};
  diff = 0;

  for (let ch of str1) {
    if (ht[ch]) {
      ht[ch]++;
    } else {
      ht[ch] = 1;
    }
  }

  for (let ch of str2) {
    if (!ht[ch]) {
      diff++;
    }

    if (ht[ch]) {
      if (ht[ch] > 0) {
        ht[ch]--;
      } else {
        diff++;
      }
    }
  }

  if (diff > 1) {
    return false;
  }

  return true;
};

const offByOne = (str1, str2) => {
  ht = {};

  for (let ch of str1) {
    if (ht[ch]) {
      ht[ch]++;
    } else {
      ht[ch] = 1;
    }
  }

  for (let ch of str2) {
    if (!ht[ch] || ht[ch] === 0) {
      return false;
    } else {
      ht[ch]--;
    }
  }

  return true;
};

// tests
console.log(oneAway('pale', 'pale'), 'true');
console.log(oneAway('pale', 'ple'), 'true');
console.log(oneAway('pale', 'pales'), 'true');
console.log(oneAway('pale', 'bale'), 'true');
console.log(oneAway('pale', 'bake'), 'false');
