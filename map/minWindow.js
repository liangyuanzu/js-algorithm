// (LeetCode): 76. 最小覆盖子串
/* 
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

示例 1：
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
*/

/* 
思路:
先找出所有包含T的子串
找出长度最小的子串，返回即可

步骤：
双指针维护一个滑动窗口
移动右指针，找到包含 T 的子串，移动左指针，尽量减少包含 T 的子串的长度
循环上述过程，找到包含 T 的最小子串
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 时间复杂度 O(m+n)  m 是 t 的长度, n 是 s 的最小长度
 * 空间复杂度 O(m) m 是 t 中不同字符的个数
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let need = new Map();
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }

  let needType = need.size;
  let res = "";
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) needType -= 1;
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (!res || newRes.length < res.length) res = newRes;
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }
    r += 1;
  }

  return res;
};

let str = minWindow("ADOBECODEBANC", "ABC");
console.log(str);
