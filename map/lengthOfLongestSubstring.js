// (LeetCode): 3. 无重复字符的最长子串
/* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
*/

/* 
思路: 采用双指针建立滑动窗口找出所有无重复字符的子串，然后返回子串长度即可
*/

/**
 * @param {string} s
 * @return {number}
 * 时间复杂度 O(n)
 * 空间复杂度 O(m) 字符串不重复字符的个数
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let res = 0;
  const map = new Map();

  for (let r = 0; r < s.length; r += 1) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }

  return res;
};
