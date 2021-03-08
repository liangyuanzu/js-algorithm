// 使用数组模拟队列
class ArrQueue {
  constructor() {
    this.items = [];
  }
  // 入队
  enqueue(element) {
    this.items.push(element);
  }
  // 出队
  dequeue() {
    this.items.shift();
  }
  // 查看队头元素
  peek() {
    return this.items[0];
  }
  // 检查队列是否为空
  isEmpty() {
    return !this.items.length;
  }
  // 返回队列的长度
  size() {
    return this.items.length;
  }
  // 清空队列
  clear() {
    this.items = [];
  }
  // 转字符串
  toString() {
    return this.items.toString();
  }
}

// 用对象模拟队列
class ObjQueue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0; // 指向队头
    this.items = {};
  }
  // 入队
  enqueue(element) {
    this.items[this.count] = element;
    this.count += 1;
  }
  // 检查队列是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  // 返回队列长度
  size() {
    return this.count - this.lowestCount;
  }
  // 出队
  dequeue() {
    if (this.isEmpty()) return undefined;
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return res;
  }
  // 查看队头元素
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  // 清空队列
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // 转字符串
  toString() {
    if (this.isEmpty()) return "";
    let str = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i += 1) {
      str = `${str}, ${this.items[i]}`;
    }
    return str;
  }
}
