// (LeetCode): 349. 两个数组的交集
/* 
给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 时间复杂度 O(m*n)  m 为去重后的 nums1
 * 时间复杂度 O(m)
 */
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter((i) => nums2.includes(i));
};
