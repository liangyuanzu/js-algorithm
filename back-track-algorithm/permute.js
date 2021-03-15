// (LeetCode): 46. 全排列
/* 
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/* 
思路
要求: 1. 所有排列情况 2. 没有重复元素
有出路有死路
考虑使用回溯算法

步骤
1. 用递归模拟所有情况
2. 遇到包含重复元素的情况, 就回溯
3. 收集所有到达递归终点的情况, 并返回
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间复杂度 O(n!) n!=1*2*3*...(n-1)*n
 * 空间复杂度 O(n) n 为递归层数
 */
var permute = function (nums) {
  const res = [];

  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((n) => {
      if (path.includes(n)) return;
      backtrack(path.concat(n));
    });
  };
  backtrack([]);

  return res;
};
