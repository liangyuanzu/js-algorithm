/* 
堆是一种特殊的完全二叉树
所有节点都大于等于(最大堆)或小于等于(最小堆)它的子节点

JS 通常用数组来表示堆
左侧子节点的位置是 2*index + 1
右侧子节点的位置是 2*index + 2
父节点的位置是 (index - 1) / 2

应用
1. 堆能高校、快速地找出最大值和最小值 时间复杂度 O(1)
2. 找出第 K 个最大(小)元素
*/
/* 
找出第 K 个最大元素
1. 构建一个最小堆，并将元素依次插入堆中
2. 当堆中容量超过 K，就删除堆顶
3. 插入结束，堆顶就是第 K 个最大元素
*/