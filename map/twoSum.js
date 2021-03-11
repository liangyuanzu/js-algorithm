// (LeetCode): 1. 两数之和
/* 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
*/

/**
 * 方法一 使用 Map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums; i += 1) {
    const n1 = nums[i];
    const n2 = target - n1;
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      map.set(n1, i);
    }
  }
};

/**
 * 方法二 使用哈希
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i += 1) {
    const n1 = nums[i];
    const n2 = target - n1;
    const index = obj[n2];
    if (index !== undefined) {
      return [index, i];
    } else {
      obj[n1] = i;
    }
  }
};
