/* 
广度优先遍历
先访问离根节点最近的节点

1. 新建一个队列，把根节点入队
2. 把队头出队并访问
3. 把队头的没访问过的相邻节点入队
4. 重复第二、三步，直到队列为空
*/
const graph = require("./graph");

const bfs = (root) => {
  const visited = new Set([root]);
  const q = [root];
  while (q.length) {
    const n = q.shift();
    console.log(n);
    graph[n].forEach((c) => {
      if (!visited.has(c)) {
        q.push(c);
        visited.add(c);
      }
    });
  }
};
bfs(2);
