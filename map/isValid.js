// (LeetCode): 20. 有效的括号
/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：
输入：s = "()"
输出：true
*/

/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stk = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let ch of s) {
    if (map.has(ch)) {
      stk.push(ch);
    } else {
      const t = stk[stk.length - 1];
      if (map.get(t) === ch) {
        stk.pop();
      } else {
        return false;
      }
    }
  }

  return !stk.length;
};
