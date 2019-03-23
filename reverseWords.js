function reverseWords(s) {
  const arr = [];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      str = str + s[i];
    } else {
      if (str) {
        arr.push(str);
        str = '';
      }
    }
  }

  if (str) {
    arr.push(str);
  }

  arr.reverse();

  return arr.join(' ');
}

module.exports = reverseWords;
