function longestCommonPrefix(strs) {
  let length = null;

  for (let i = 0; i < strs.length; i++) {
    if (length == null || strs[i].length < length) {
      length = strs[i].length;
    }
  }

  let common = '';

  for (let i = 0; i < length; i++) {
    const char = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return common;
      } else if (j === strs.length - 1) {
        common = common + char;
      }
    }
  }

  return common;
}

module.exports = longestCommonPrefix;
