// (LeetCode) 206. 反转链表
/* 
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
*/

// 1. 迭代
// 使用双指针遍历链表，然后反转双指针
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    // const tmp = p1.next;
    // p1.next = p2;
    // p2 = p1;
    // p1 = tmp;
    // 简化
    [p1.next, p2, p1] = [p2, p1, p1.next];
  }
  return p2;
};

// 2.递归
var reverseList2 = function (head) {
  if (!head || !head.next) return head;
  let next = head.next; // next节点，反转后是最后一个节点
  const reverseHead = reverseList2(next);
  head.next = null; // 裁减 head
  next.next = head; // 尾接
  return reverseHead;
};
