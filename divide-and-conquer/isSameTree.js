// (LeetCode): 100. 相同的树
/* 
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1：
输入：p = [1,2,3], q = [1,2,3]
输出：true
*/

/* 
思路:
两个树: 根节点的值相同, 左子树相同, 右子树相同
符合 "分、解、合" 特性
考虑选择分而治之

步骤
1. 分: 获取两个树的左子树和右子树
2. 解: 递归地判断两个树的左子树是否相同, 右子树是否相同
3. 合: 将上述结果合并, 如果跟节点的值也相同, 树就相同
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 时间复杂度 O(n)
 * 空间复杂度 最好 O(logN) 最坏 O(n)
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true;
  }
  return false;
};
