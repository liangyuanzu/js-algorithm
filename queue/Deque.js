// 数组实现双端队列
class ArrDeque {
  constructor() {
    this.items = [];
  }
  // 队头添加新元素
  addFront(element) {
    this.items.unshift(element);
  }
  // 队尾添加元素
  addBack(element) {
    this.items.push(element);
  }
  // 移除队头元素
  removeFront() {
    return this.items.shift();
  }
  // 移除队尾元素
  removeBack() {
    return this.items.pop();
  }
  // 返回队头元素
  peekFront() {
    return this.items[0];
  }
  // 返回队尾元素
  peekBack() {
    return this.items[this.items.length - 1];
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

// 对象实现双端队列
class ObjDeque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // 队头添加新元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i -= 1) {
        this.items[i] = this.items[i - 1];
      }
      this.count += 1;
      this.lowestCount = 0;
      this.items[this.lowestCount] = element;
    }
  }
  // 队尾添加元素
  addBack(element) {
    this.items[this.count] = element;
    this.count += 1;
  }
  // 移除队头元素
  removeFront() {
    if (this.isEmpty()) return undefined;
    let res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return res;
  }
  // 移除队尾元素
  removeBack() {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    let res = this.items[this.count];
    delete this.items[this.count];
    return res;
  }
  // 返回队头元素
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  // 返回队尾元素
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }
  // 检查队列是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  // 返回队列的长度
  size() {
    return this.count - this.lowestCount;
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
    let str = this.items[this.lowestCount];
    for (let i = this.lowestCount + 1; i < this.count; i += 1) {
      str = `${str}, ${this.items[i]}`;
    }
    return str;
  }
}
