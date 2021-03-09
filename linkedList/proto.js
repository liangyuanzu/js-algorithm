// 原型链
/* 
原型链的本质是链表
原型链上的节点是各种原型对象，比如 Function.prototype, Object.prototype
原型链通过 __proto__ 属性连接各种原型对象.

对象的原型链: obj->Object.prototype->null
函数的原型链: func->Function.prototype->Object.prototype->null
数组的原型链: arr->Array.prototype->Object.prototype->null
*/

/* 
如果 A 沿着原型链能找到 B.prototype, 那么 A instanceof B 为 true
如果在 A 对象上没有找到 x 属性，那么会沿着原型链找 x 属性
*/

/* 
面试题1: instanceof 的原理, 并用代码实现
解法: 遍历 A 的原型对象, 如果能找到 B.prototype, 返回 true, 否则返回 false
*/

/**
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const instanceOf = (a, b) => {
  let p = a;

  while (p) {
    if (p === b.prototype) return true;
    p = p.__proto__;
  }
  return false;
};

// 面试题2
/* 
解法: 明确 foo 和 F 变量的原型链, 沿着原型链找 a 属性和 b 属性
*/
var foo = {},
  F = function () {};
Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(foo.a); // value a
console.log(foo.b); // undefined

console.log(F.a); // value a
console.log(F.b); // value b
