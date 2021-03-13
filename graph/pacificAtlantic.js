// (LeetCode): 417. 太平洋大西洋水流问题
/* 
给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。
规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。
请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

给定下面的 5x5 矩阵:

  太平洋 ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋

返回:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).
*/

/* 
思路: 
把矩阵想象成图
从海岸线逆流而上遍历图, 所到之处就是可以流到某个大洋的坐标.

步骤:
1. 新建两个矩阵, 分别记录能流到两个大洋的坐标
2. 从海岸线, 多管齐下, 同时深度优先遍历图, 过程中填充上述矩阵
3. 遍历两个矩阵, 找出能流到两个大洋的坐标
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 时间复杂度 O(mn)
 * 空间复杂度 O(mn)
 */
var pacificAtlantic = function (matrix) {
  if (!matrix || !matrix[0]) return [];
  const m = matrix.length;
  const n = matrix[0].length;
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(([nr, nc]) => {
      if (
        // 保证在矩阵中
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        // 防止死循环
        !flow[nr][nc] &&
        // 保证逆流而上
        matrix[nr][nc] >= matrix[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  // 沿着海岸线逆流而上
  for (let r = 0; r < m; r += 1) {
    dfs(r, 0, flow1);
    dfs(r, n - 1, flow2);
  }

  for (let c = 0; c < n; c += 1) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }

  // 收集能流到两个大洋的坐标
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }

  return res;
};
