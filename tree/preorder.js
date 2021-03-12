/* 
先序遍历
1. 访问根节点
2. 对根节点的左子树进行先序遍历
3. 对根节点的右子树进行先序遍历
*/
const bt = require("./bt");

const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

// preOrder(bt);

// 非递归
/* 
原理: 用堆栈模拟递归
1. 将根节点入栈
2. 将根节点出栈访问根节点
3. 将右子树入栈(栈后进先出)
4. 将左子树入栈
*/
const NonRecursivePreOrder = (root) => {
  if (!root) return;
  const stk = [root];
  while (stk.length) {
    const n = stk.pop();
    console.log(n.val);
    if (n.right) stk.push(n.right);
    if (n.left) stk.push(n.left);
  }
};

NonRecursivePreOrder(bt);
