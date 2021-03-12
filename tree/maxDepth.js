// (LeetCode): 104. 二叉树的最大深度
/* 
给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
*/

/* 
思路:
1. 求最大深度，考虑使用深度优先遍历
2. 在深度优先遍历过程中，记录每个节点所在的层级，找出最大的层级即可

步骤：
1. 新建一个变量，记录最大深度
2. 深度优先遍历整颗树，并记录每个节点的层级，同时不断刷新最大深度这个变量
3. 遍历结束返回最大深度这个变量
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
 * 空间复杂度 - 函数调用堆栈
 * dfs 嵌套的层数为二叉树的最大深度
 * 最好: O(logn)  完全二叉树
 * 最坏: O(n) 最大深度等于节点数(不分叉)
 */
var maxDepth = function (root) {
  let deep = 0;

  const dfs = (n, l) => {
    if (!n) return;
    if (!n.left && !n.right) deep = Math.max(deep, l);
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);

  return deep;
};
