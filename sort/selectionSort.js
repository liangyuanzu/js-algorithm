// 选择排序
/* 
思路: 
1. 找到数组中的最小值, 选中它并将其放置在第一位
2. 接着找到第二小的值, 选中它并将其放置在第二位
3. 以此类推, 执行 n-1 轮
*/

// 时间复杂度 O(n^2)
Array.prototype.selectionSort = function () {
  for (var i = 0; i < this.length - 1; i += 1) {
    let indexMin = i;
    for (var j = i; j < this.length; j += 1) {
      if (this[j] < this[indexMin]) indexMin = j;
    }
    if (indexMin !== i) {
      [this[i], this[indexMin]] = [this[indexMin], this[i]];
    }
  }
};
const arr = [2, 3, 2, 4, 1];
arr.selectionSort();
