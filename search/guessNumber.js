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
采用二分搜索
调用 guess 函数, 来判断中间元素是否是目标值

步骤
1. 从数组的中间元素开始, 如果这个元素正好是目标值, 则搜索过程结束
2. 如果目标值大于或者小于中间元素, 则在数组大于或者小于中间元素的那一半中查找
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
 * 空间复杂度 O(1)
 */
var guessNumber = function (n) {
  let low = 1,
    high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
