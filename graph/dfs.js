/* 
深度优先遍历
尽可能深地搜索图的分支

1. 访问根节点
2. 对根节点的没访问过的相邻节点挨个进行深度优先遍历
*/
const graph = require("./graph");

const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) dfs(c);
  });
};

dfs(2);
