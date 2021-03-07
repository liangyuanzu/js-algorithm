// 有效的括号(leetCode题号: 20)
/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

1.左括号必须用相同类型的右括号闭合。
2.左括号必须以正确的顺序闭合。

示例 1：
输入：s = "{[]}"
输出：true

示例 2：
输入：s = "([)]"
输出：false
*/

/**
 * @param {string} s
 * @return {boolean}
 * 测试用例: ([}}]) -> false
 * 执行用时：76 ms
 * 内存消耗：37.8 MB
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const isValid = (s) => {
  if (s.length % 2 === 1) return false; // 奇数括号

  const stk = [];
  for (let i = 1; i < s.length; i += 1) {
    const ch = s[i];
    if (ch === "(" || ch === "[" || ch === "{") {
      stk.push(ch);
    } else {
      const t = stk[stk.length - 1];
      if ((t === "(" && ch === ")") || (t === "[" && ch === "]") || (t === "{" && ch === "}")) {
        stk.pop();
      } else {
        return false;
      }
    }
  }

  return !stk.length;
};
