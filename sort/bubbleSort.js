// 冒泡排序
/* 
思路
1. 比较所有相邻元素，如果第一个比第二个大，则交换它们
2. 一轮下来，可以保证最后一个数是最大的
3. 执行 n - 1 轮，就可以完成排序
*/

// 时间复杂度 O(n^2)
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i += 1) {
    for (let j = 0; j < this.length - 1 - i; j += 1) {
      if (this[j] > this[j + 1]) {
        [[this[j], this[j + 1]]] = [[this[j + 1], this[j]]];
      }
    }
  }
};

const arr = [2, 3, 2, 4, 1];
arr.bubbleSort();
