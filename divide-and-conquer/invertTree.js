// (LeetCode): 226. 翻转二叉树
/* 
翻转一棵二叉树。

示例：
输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

/* 
思路:
先翻转左右子树, 再将子树换个位置
符合 "分、解、合" 特性
考虑使用分而治之

步骤
1. 分：获取左右子树
2. 解：递归地翻转左右子树
3. 合：将翻转后的左右子树换个位置放到根节点上
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
 * @return {TreeNode}
 * 时间复杂度 O(n) n 为节点数
 * 空间复杂度 O(h) h 为树的高度
 */
var invertTree = function (root) {
  if (!root) return null;
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left),
  };
};
