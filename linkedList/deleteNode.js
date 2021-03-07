// (LeetCode) 237. 删除链表中的节点
/* 
请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。

现有一个链表 -- head = [4,5,1,9]，它可以表示为:
4 -> 5 -> 1 -> 9

示例 1：

输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

提示：

链表至少包含两个节点。
链表中所有节点的值都是唯一的。
给定的节点为非末尾节点并且一定是链表中的一个有效节点。
不要从你的函数中返回任何结果。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 测试用例 [4,5,1,9] 5
 * 时间复杂度 O(1)
 * 空间复杂度 O(1)
 */
var deleteNode = function (node) {
  // 由于拿不到上个结点，所以可以直接复制下个结点并把下个结点删掉
  node.val = node.next.val;
  node.next = node.next.next;
};
