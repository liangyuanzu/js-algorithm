// (LeetCode) 111. 二叉树的最小深度
/* 
给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
说明：叶子节点是指没有子节点的节点。
 
示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：2
*/

/* 
思路: 
求最小深度，考虑使用广度优先遍历
在广度优先遍历过程中，遇到叶子结点，停止遍历，返回节点层级

步骤
1. 广度优先遍历整颗树，并记录每个节点的层级
2. 遇到叶子结点，返回节点层级，停止遍历
*/

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
 * @return {number}
 * 时间复杂度 O(n) n 为节点数
 * 空间复杂度 O(n) n 为节点数
 */
var minDepth = function (root) {
  if (!root) return 0;
  const q = [[root, 1]];

  while (q.length) {
    const [n, l] = q.shift();
    if (!n.left && !n.right) return l;
    if (n.left) q.push([n.left, i + 1]);
    if (n.right) q.push([n.right, i + 1]);
  }
};
