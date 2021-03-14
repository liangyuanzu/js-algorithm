// (LeetCode): 101. 对称二叉树
/* 
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
*/

/* 
思路:
转化为: 左右子树是否镜像
分解为: 树1的左子树和树2的左子树是否镜像, 树1的右子树和树2的左子树是否镜像
符合 "分、解、合" 特性, 考虑选择分而治之

步骤
1. 分: 获取两个树的左子树和游子树
2. 解: 递归地判断树1的左子树和树2的右子树是否镜像, 树1的右子树是否和树2的左子树是否镜像
3. 合: 如果上述都成立, 且根节点值也相同, 两个树就成立
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
 * @return {boolean}
 * 时间复杂度 O(n)
 * 空间复杂度 最好 O(logN) 最坏 O(n)
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (l, r) => {
    if (!l && !r) return true;
    if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)) {
      return true;
    }
    return false;
  };

  return isMirror(root.left, root.right);
};
