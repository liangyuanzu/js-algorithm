// 顺序搜索
/* 
思路
1. 遍历数组
2. 找到跟目标值相等的元素, 就返回它的下标
3. 遍历结束后, 如果没有搜索到目标值, 就返回 -1
*/

// 时间复杂度 O(n)
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === item) return i;
  }
  return -1;
};

const res = [1, 2, 3, 4, 5].sequentialSearch(5);
