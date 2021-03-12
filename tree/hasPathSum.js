// (LeetCode): 112. 路径总和
/* 
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
*/

/* 
思路:
在深度优先遍历的过程中，记录当前路径的节点值的和
在叶子结点处，判断当前路径的节点值和是否等于目标值
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
 * @param {number} targetSum
 * @return {boolean}
 * 时间复杂度 O(n)  遍历了所有节点 n 为树的节点
 * 空间复杂度 - 函数调用堆栈 n 为树的高度
 * 最好: O(log(n)) 完全二叉树
 * 最坏: O(n) 没有分叉
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return;
  let res = false;

  const dfs = (n, s) => {
    if (!n.left && !n.right && s === targetSum) res = true;
    if (n.left) dfs(n.left, s + n.left.val);
    if (n.right) dfs(n.right, s + n.right.val);
  };
  dfs(root, root.val);

  return res;
};
