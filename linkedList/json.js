// 使用链表指针获取 JSON 节点值
/* 
沿着指定路径获取 json 中的值
*/
const json = {
  a: {
    b: {
      c: 1,
    },
  },
  d: {
    e: 2,
  },
};

const path = ["a", "b", "c"];
let p = json;
path.forEach((k) => {
  p = p[k];
});
