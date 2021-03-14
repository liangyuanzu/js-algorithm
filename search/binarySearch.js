// 二分搜索
/* 
思路
1. 从有序数组的中间元素开始, 如果中间元素正好是目标值, 则搜索结束
2. 如果目标值大于或者小于中间元素, 则在大于或小于中间元素的那一半数组中搜索
*/

/* 
由于每一次比较都使搜索范围缩小一半
时间复杂度 O(logN)
*/
Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (this[mid] < item) {
      low = mid + 1;
    } else if (this[mid] > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(5);
