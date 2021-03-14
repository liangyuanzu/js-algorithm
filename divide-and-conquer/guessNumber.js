// (LeetCode): 374. 猜数字大小
/* 
猜数字游戏的规则如下：
每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。

你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：
-1：我选出的数字比你猜的数字小 pick < num
1：我选出的数字比你猜的数字大 pick > num
0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
返回我选出的数字。

示例 1：
输入：n = 10, pick = 6
输出：6
*/

/* 
思路
二分搜索, 同样具备 "分、解、合" 特性
考虑选择分而治之

步骤
分: 计算中间元素, 分割数组
解: 递归地在较大或者较小子数组进行二分搜索
合: 不需要此步, 因为在子数组中搜索到就返回了
*/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * 时间复杂度 O(logN)
 * 空间复杂度 O(logN)
 */
var guessNumber = function (n) {
  const rec = (low, high) => {
    if (low > high) return;
    const mid = Math.floor((low + high) / 2);
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      return rec(mid + 1, high);
    } else {
      return rec(low, mid - 1);
    }
  };

  return rec(1, n);
};
