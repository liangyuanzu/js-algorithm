/*
函数调用堆栈
先执行 fun3, 再执行 fun2, 最后执行 fun1
*/
const fun1 = () => {
  fun2();
};
const fun2 = () => {
  fun3();
};
const fun3 = () => {};

fun1();
