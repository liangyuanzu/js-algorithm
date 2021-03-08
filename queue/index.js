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
}

// let q = new Queue();
// q.enqueue(3);
// q.enqueue(2);
// q.enqueue(4);
// q.dequeue();
// let t = q.peek();
// let isEmpty = q.isEmpty();
// let size = q.size();
// q.clear();

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
  // 出队
}
