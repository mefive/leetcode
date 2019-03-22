const checkInclusion = function(s1, s2) {
  const s1Map = {};

  for (let i = 0; i < s1.length; i++) {
    const count = s1Map[s1[i]];

    if (count == null) {
      s1Map[s1[i]] = 1;
    } else {
      s1Map[s1[i]] = count + 1;
    }
  }

  let checkMap = Object.assign({}, s1Map);

  for (let i = 0; i < s2.length; i++) {
    for (let j = i; j < i + s1.length; j++) {
      const count = checkMap[s2[j]];

      if (count != null) {
        if (count === 1) {
          delete checkMap[s2[j]];

          if (Object.keys(checkMap).length === 0) {
            return true;
          }
        } else {
          checkMap[s2[j]] = count - 1;
        }
      } else {
        checkMap = Object.assign({} , s1Map);
        break;
      }
    }
  }

  return false;
};

module.exports = checkInclusion;
