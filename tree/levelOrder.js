// (LeetCode): 102. 二叉树的层序遍历
/* 
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
*/

/* 
思路:
层序遍历顺序就是广度优先遍历
不过在遍历的时候需要记录当前节点所处的层级，方便将其添加到不同的数组中

步骤：
1. 广度优先遍历二叉树
2. 遍历的过程中，记录每个节点的层级，并将其添加到不同的数组中
*/

// 方法一
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const q = [[root, 0]];
  let res = [];

  while (q.length) {
    const [n, level] = q.shift();
    if (!res[level]) {
      res.push([n.val]);
    } else {
      res[level].push(n.val);
    }
    if (n.left) q.push([n.left, level + 1]);
    if (n.right) q.push([n.right, level + 1]);
  }

  return res;
};

// 方法二
/* 
时间复杂度 O(n)
空间复杂度 O(n)
*/
var levelOrder2 = function (root) {
  if (!root) return [];
  const q = [root];
  const res = [];

  while (q.length) {
    let len = q.length;
    res.push([]);

    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }

  return res;
};
