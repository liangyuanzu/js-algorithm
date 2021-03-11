// set 相关操作
// add
let set = new Set();
set.add(1);
set.add(5);
set.add(5);
set.add("text");
let obj = { a: 1, b: 2 };
set.add(obj);
set.add({ a: 1, b: 2 });

// has
const has = set.has(obj);

// delete
set.delete(5);

// 清空
// set.clear();

// 迭代
for (let val of set) {
  console.log(val);
}

set.forEach((val) => console.log(val));

for (let key of set.keys()) {
  console.log(key);
}

for (let val of set.values()) {
  console.log(val);
}

for (let [key, val] of set.entries()) {
  console.log(key, val);
}

// Set -> Array
let arr = [...set];
arr = Array.from(set);

// Array -> Set
const set2 = new Set([1, 2, 3]);

// 交集
const intersection = new Set([...set].filter((i) => set2.has(i)));

// 差集
const difference = new Set([...set].filter((i) => !set2.has(i)));
