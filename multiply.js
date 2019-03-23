function multiply(num1, num2) {
  const rows = [];

  for (let i = num1.length - 1; i >= 0; i--) {
    let arr = [];
    let carry = 0;

    if (num1[i] === 0) {
      continue;
    }

    for (let j = num2.length - 1; j >= 0; j--) {
      const m = num1[i] * num2[j] + carry;
      carry = Math.floor(m / 10);
      arr.unshift(m % 10);
    }

    if (carry) {
      arr.unshift(carry);
    }

    carry = 0;
    const index = num1.length - 1 - i;

    for (let j = 0; j < index; j++) {
      arr.push(0);
    }

    arr.reverse();

    rows.push(arr);
  }

  let str = '';
  let carry = 0;
  let length = rows[rows.length - 1].length;

  for (let i = 0; i < length; i++) {
    let sum = 0;

    for (let j = 0; j < rows.length; j++) {
      sum = sum + (+rows[j][i] || 0);
    }

    sum = sum + carry;
    carry = Math.floor(sum / 10);
    str = (sum % 10) + str;
  }

  str = carry + str;

  let start = 0;

  for (let i = 0; i < str.length; i++) {
    start = i;

    if (str[i] !== '0') {
      break;
    }
  }

  return str.slice(start, str.length);
}

module.exports = multiply;
