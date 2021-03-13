// (LeetCode): 65. 有效数字
/* 
有效数字（按顺序）可以分成以下几个部分：
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数

小数（按顺序）可以分成以下几个部分：
（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字

整数（按顺序）可以分成以下几个部分：
（可选）一个符号字符（'+' 或 '-'）
至少一位数字

部分有效数字列举如下：
["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]
部分无效数字列举如下：
["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]
给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true 。

示例 1：
输入：s = "0"
输出：true
*/

/* 
步骤:
1. 构建一个表示状态的图
2. 遍历字符串，并沿着图走，如果到了某个节点无路可走就返回 false
3. 遍历结束，如果走到 3/5/6，就返回 true，否则返回 false
*/
/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
var isNumber = function (s) {
  const graph = {
    0: { blank: 0, sign: 1, ".": 2, digit: 6 },
    1: { digit: 6, ".": 2 },
    2: { digit: 3 },
    3: { digit: 3, e: 4 },
    4: { digit: 5, sign: 7 },
    5: { digit: 5 },
    6: { digit: 6, ".": 3, e: 4 },
    7: { digit: 5 },
  };

  let state = 0;
  for (let c of s.trim()) {
    if (c >= "0" && c <= "9") {
      c = digit;
    } else if (c === " ") {
      c = blank;
    } else if (c === "+" || c === "-") {
      c = sign;
    } else if (c === "e" || e === "E") {
      c = "e";
    }

    state = graph[state][c];
    if (state === undefined) return false;
  }

  if (state === 3 || state === 5 || state === 6) return true;
  return false;
};
