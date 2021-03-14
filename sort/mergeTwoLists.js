// (LeetCode): 21. 合并两个有序链表
/* 
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
*/

/* 
思路
1. 与归并排序中合并两个有序数组很相似
2. 将数组替换成链表即可解此题

步骤
1. 新建一个新链表, 作为返回结果
2. 用指针遍历两个有序链表, 并比较两个链表的当前节点, 较小者先接入新链表, 并将指针后移一步
3. 链表遍历结束, 返回新链表
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 时间复杂度 O(m+n)
 * 空间复杂度 O(1)
 */
var mergeTwoLists = function (l1, l2) {
  const res = new ListNode(0);
  let p = res;
  let p1 = l1;
  let p2 = l2;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }

  if (p1) p.next = p1;
  if (p2) p.next = p2;

  return res.next;
};
