// (LeetCode): 349. 两个数组的交集
/* 
给定两个数组，编写一个函数来计算它们的交集。

示例:
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 时间复杂度 O(m+n)
 * 空间复杂度 O(m)
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  const res = [];
  nums1.forEach((i) => map.set(i, true));
  nums2.forEach((i) => {
    if (map.get(i)) {
      res.push(i);
      map.delete(i);
    }
  });

  return res;
};
