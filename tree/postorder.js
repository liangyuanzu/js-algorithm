/* 
后序遍历
1. 对根节点的左子树进行后序遍历
2. 对根节点的右子树进行后序遍历
3. 访问根节点
*/

const bt = require("./bt");

const postOrder = (root) => {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

// postOrder(bt);

/* 
非递归 
1. 将后序遍历顺序倒置：左右根 -> 根右左
2. 将根节点出栈推入输出栈中
3. 将左节点入栈
4. 将右节点入栈
5. 将输出栈输出
*/
const NonRecursivePostOrder = (root) => {
  if (!root) return;
  const stk = [root];
  const outStk = [];
  while (stk.length) {
    const n = stk.pop();
    outStk.push(n);
    if (n.left) stk.push(n.left);
    if (n.right) stk.push(n.right);
  }
  while (outStk.length) {
    const n = outStk.pop();
    console.log(n.val);
  }
};

NonRecursivePostOrder(bt);
