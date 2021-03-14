// (LeetCode): 70. 爬楼梯
/* 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
*/

/* 
思路
1. 爬到第 n 阶可以在第 n-1 阶爬 1 个台阶, 或者在第 n-2 阶爬 2 个台阶
2. F(n) = F(n-1) + F(n-2)
使用动态规划

步骤
1. 定义子问题: F(n) = F(n-1) + F(n-2)
2. 反复执行: 从 2 循环到 n, 执行上述公式
*/

// 方法一
/**
 * @param {number} n
 * @return {number}
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var climbStairs = function (n) {
  if (n < 2) return 1;
  let dp = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    dp[n] = dp[n - 1] + dp[n - 2];
  }
  return dp[n];
};

// 方法二
/* 
时间复杂度 O(n)
空间复杂度 O(1)
*/
var climbStairs = function (n) {
  if (n < 2) return 1;
  let dp0 = 1;
  let dp1 = 1;
  for (let i = 2; i <= n; i += 1) {
    [dp0, dp1] = [dp1, dp0 + dp1];
  }
  return dp1;
};
