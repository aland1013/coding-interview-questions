const URLify = (str, length) => {
  str = str.trim().split(' ').join('%20');

  return str;
};

// tests
console.log(
  URLify('Mr John Smith    ', 13),
  'Mr%20John%20Smith',
  URLify('Mr John Smith    ', 13) == 'Mr%20John%20Smith'
);
