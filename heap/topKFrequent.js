// (LeetCode): 347. 前 K 个高频元素
/* 
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]

提示：
你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
你可以按任意顺序返回答案。
*/

// 方法一 暴力破解
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const list = Array.from(map).sort((a, b) => b[1] - a[1]);
  return list.slice(0, k).map((n) => n[0]);
};

// 方法二 最小堆
/* 
时间复杂度 O(nlogk)
空间复杂度 O(n)
*/
const MinHeap = require("./MinHeap");
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const h = new MinHeap();
  map.forEach((n) => {
    h.insert(n);
    if (h.size() > k) h.pop();
  });

  return h.heap.map((a) => a.key);
};
