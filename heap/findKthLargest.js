// (LeetCode): 215. 数组中的第K个最大元素
/* 
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
*/

/* 
思路
看到 "第 K 个最大元素"
考虑最小堆

步骤
1. 构建一个最小堆, 并依次把数组的值插入堆中
2. 当堆的容量超过 K, 就删除堆顶
3. 插入结束后，堆顶就是第 K 个最大元素
*/

// 方法一 调用库函数
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

// 方法二 最小堆
/* 
时间复杂度 O(nlogk)
空间复杂度 O(n)
*/
const MinHeap = require("./MinHeap");
var findKthLargest2 = function (nums, k) {
  const h = new MinHeap();
  nums.forEach((n) => {
    h.insert(n);
    if (h.size() > k) h.pop();
  });

  return h.peek();
};
