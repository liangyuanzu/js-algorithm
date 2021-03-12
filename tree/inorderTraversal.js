// (LeetCode): 94. 二叉树的中序遍历
/* 
给定一个二叉树的根节点 root ，返回它的 中序 遍历。

示例 1：
输入：root = [1,null,2,3]
输出：[1,3,2]
*/

// 递归版
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];

  const inOrder = (n) => {
    if (!n) return;
    inOrder(n.left);
    res.push(n.val);
    inOrder(n.right);
  };
  inOrder(root);

  return res;
};

// 非递归版
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var inorderTraversal2 = function (root) {
  const res = [];
  const stk = [];
  let p = root;

  while (stk.length || p) {
    while (p) {
      stk.push(p);
      p = p.left;
    }
    const n = stk.pop();
    res.push(n.val);
    p = p.right;
  }

  return res;
};
