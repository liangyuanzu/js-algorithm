// 快速排序
/* 
分区: 从数组中任意选择一个 "基准", 所有比基准小的元素放在基准前面, 比基准大的元素放在基准后面
递归: 递归地对基准前后的子数组进行分区
*/

// 时间复杂度 O(n*logN)
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };

  const res = rec(this);
  res.forEach((n, i) => (this[i] = n));
};

const arr = [2, 3, 2, 4, 1];
arr.quickSort();
