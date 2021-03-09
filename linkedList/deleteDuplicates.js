// (LeetCode) 83. 删除排序链表中的重复元素
/* 
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
示例 1:

输入: 1->1->2
输出: 1->2
*/

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
var deleteDuplicates = function (head) {
  let p = head;

  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
