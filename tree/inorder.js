/* 
中序遍历
1. 对根节点的左子树进行中序遍历
2. 访问根节点
3. 对根节点的右子树进行中序遍历
*/

const bt = require("./bt");

const inOrder = (root) => {
  if (!root) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};

// inOrder(bt);

/* 
非递归
原理: 用栈模拟函数调用堆栈
1. 将所有左子树入栈
2. 出栈并访问根节点
3. 将所有右子树入栈
*/
const NonRecursiveInOrder = (root) => {
  if (!root) return;
  const stk = [];
  let p = root;
  while (stk.length || p) {
    while (p) {
      stk.push(p);
      p = p.left;
    }
    const n = stk.pop();
    console.log(n.val);
    p = n.right;
  }
};

NonRecursiveInOrder(bt);
