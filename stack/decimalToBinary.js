// 十进制转二进制
/**
 * @param {number} decNum
 * @return {string}
 * 测试用例: 10 -> 1010
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var decimalToBinary = function (decNum) {
  const remStk = [];
  let num = decNum;
  let rem;
  let binaryStr = "";

  while (num > 0) {
    rem = num % 2;
    remStk.push(rem);
    num = Math.floor(num / 2);
  }

  while (remStk.length) {
    binaryStr += remStk.pop().toString();
  }

  return binaryStr;
};
