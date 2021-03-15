// (LeetCode): 78. 子集
/* 
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

/* 
思路
要求: 1.所有子集 2.没有重复元素
有出路、有死路
考虑使用回溯算法

步骤
1. 用递归模拟所有情况
2. 保证接的数字都是后面的元素
3. 收集所有到达递归终点的情况，并返回
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间复杂度 O(2^n) 因为每个元素都有两种可能 (存在或不存在)
 * 空间复杂度 O(n)
 */
var subsets = function (nums) {
  const res = [];

  const backtrack = (path, l, start) => {
    if (path.length === l) {
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i += 1) {
      backtrack(path.concat(nums[i]), l, i + 1);
    }
  };
  for (let i = 0; i <= nums.length; i += 1) {
    backtrack([], i, 0);
  }

  return res;
};
