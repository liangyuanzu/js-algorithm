// 用数组模拟栈
class ArrStack {
  constructor() {
    this.items = [];
  }
  // 入栈
  push(element) {
    this.items.push(element);
  }
  // 出栈
  pop() {
    return this.items.pop();
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 检查栈是否为空
  isEmpty() {
    return !this.items.length;
  }
  // 返回栈的长度
  size() {
    return this.items.length;
  }
  // 清空栈元素
  clear() {
    this.items = [];
  }
  // 转字符串
  toString() {
    return this.items.toString();
  }
}

// 用对象模拟栈
class ObjStack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // 入栈
  push(element) {
    this.items[this.count] = element;
    this.count += 1;
  }
  // 检查栈是否为空
  isEmpty() {
    return !this.count;
  }
  // 返回栈的长度
  size() {
    return this.count;
  }
  // 出栈
  pop() {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    const res = this.items[this.count];
    delete this.items[this.count];
    return res;
  }
  // 查看栈顶元素
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }
  // 清空栈元素
  clear() {
    this.count = 0;
    this.items = {};
  }
  // 转字符串
  toString() {
    if (this.isEmpty()) return "";
    let str = `${this.items[0]}`;
    for (let i = 1; i < this.count; i += 1) {
      str = `${str}, ${this.items[i]}`;
    }
    return str;
  }
}
