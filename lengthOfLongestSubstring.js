function lengthOfLongestSubstring(s) {
  const diff = {};

  let max = 0;
  let counter = 0;

  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (s[j] in diff) {
      const start = diff[s[j]] + 1;

      Object.keys(diff).forEach((key) => {
        if (diff[key] < start) {
          delete diff[key];
        }
      });

      i = start;

      if (counter > max) {
        max = counter;
      }

      diff[s[j]] = j;

      counter = Object.keys(diff).length;
    } else {
      diff[s[j]] = j;
      counter++;
    }

    j++;
  }

  return Math.max(max, counter);
}

module.exports = lengthOfLongestSubstring;
