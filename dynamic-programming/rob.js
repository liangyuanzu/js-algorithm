// (LeetCode): 198. 打家劫舍
/* 
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
*/

/* 
思路
f(k) = 从前 k 个房屋能偷窃到的最大数额
Ak = 第 k 个房屋的钱数
f(k) = max(f(k-2) + Ak, f(k-1))
考虑动态规划

步骤
1. 定义子问题 f(k) = max(f(k-2) + Ak, f(k-1))
2. 反复执行: 从 2 循环到 n, 执行上述公式
*/

// 方法一
/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  const dp = [0, nums[0]];
  for (let i = 2; i <= nums.length; i += 1) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }
  return dp[nums.length];
};

// 方法二
/* 
时间复杂度 O(n)
空间复杂度 O(1)
*/
var rob2 = function (nums) {
  if (!nums.length) return;
  let dp0 = 0;
  let dp1 = nums[0];
  for (let i = 2; i <= nums.length; i += 1) {
    const dp2 = Math.max(dp0 + nums[i - 1], dp1);
    [dp0, dp1] = [dp1, dp2];
  }
  return dp1;
};
