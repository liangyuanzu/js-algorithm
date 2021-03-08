// 十进制转 2~36 进制
/**
 * @param {number} decNum
 * @param {number} base
 * @return {string}
 * 测试用例: 10 -> 1010
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var baseConverter = function (decNum, base) {
  let remStk = [];
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = decNum;
  let rem;
  let baseStr = "";

  if (!(base >= 2 && base <= 36)) return "";

  while (num > 0) {
    rem = num % base;
    remStk.push(rem);
    num = Math.floor(num / base);
  }

  while (remStk.length) {
    baseStr += digits[remStk.pop()];
  }

  return baseStr;
};
