// 回文检查
/**
 *
 * @param {string} str
 * @return {boolean}
 */
const palindromeChecker = (str) => {
  if (!str) return false;
  const queue = [];
  let lowerStr = str.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerStr.length; i += 1) {
    queue.push(lowerStr.charAt(i));
  }

  while (queue.length > 1 && isEqual) {
    firstChar = queue.shift();
    lastChar = queue.pop();
    if (firstChar !== lastChar) isEqual = false;
  }

  return isEqual;
};
