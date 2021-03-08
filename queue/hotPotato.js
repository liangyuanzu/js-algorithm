/* 
击鼓传花游戏
在这个游戏中，孩子们围成一个圆圈，把话尽快传递给旁边的人。某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。
重复这个过程，知道只剩下一个孩子（胜者）
*/

/**
 * @param {Array} list
 * @param {number} num
 */
const hotPotato = (list, num) => {
  let queue = [];
  let eliminatedList = [];

  for (let i = 0; i < list.length; i += 1) {
    queue.push(list[i]);
  }

  while (queue.length > 1) {
    for (let i = 0; i < num; i += 1) {
      let res = queue.shift();
      queue.push(res);
    }
    eliminatedList.push(queue.shift());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.shift(),
  };
};
