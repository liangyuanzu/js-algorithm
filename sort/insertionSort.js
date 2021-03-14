// 插入排序
/* 
1. 从第二个数开始往前比
2. 比它大就往后排
3. 以此类推进行到最后一个数
*/

// 时间复杂度 O(n^2)
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i += 1) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    this[j] = temp;
  }
};

const arr = [2, 3, 2, 4, 1];
arr.insertionSort();
