// map 相关操作

// 初始化
const m = new Map([
  ["1", 111],
  ["2", 222],
]);

// 增 map 可以使用任何类型作为键
m.set("a", "aa");
m.set("b", "bb");

// 删
m.delete("b");

// 清空
m.clear();

// 改
m.set("a", "aaa");
// 每次 set 会返回自身 所以可以链式调用
m.set("b", "bb").set("c", "cc");

// 查
const a = m.get("a");

// size
const size = m.size;

// 迭代
for (let key of m.keys()) console.log(key);
for (let val of m.values()) console.log(val);
for (let [key, val] of m.entries()) console.log(key, val);
m.forEach((val, key) => console.log(key, val));

// Object -> Map
let obj = {
  name: "Jason_liang",
  age: 22,
};
const map = new Map(Object.entries(obj));

// Map -> Object
let obj2 = Object.fromEntries(map.entries());
