// generator函数

//  ------------------------ 迭代器：有next方法，执行返回结果对象（有value和done）
function createIterator(items) {
  var i = 0;
  return {
    // next: function () {
    //   var done = i >= items.length;
    //   var value = !done ? items[i++] : undefined;
    //   return {
    //     done: done,
    //     value: value,
    //   };
    // },
    next: function () {
      return i < items.length ? { value: items[i++] } : { done: true };
    },
  };
}

var iterator = createIterator([1, 2, 3]);

// 浏览器环境不需要console，node环境需要console
console.log(iterator.next()); // { value: 1}
console.log(iterator.next()); // { value: 2}
console.log(iterator.next()); // { value: 3}
console.log(iterator.next()); // { done: true}

// ------------------------generator函数
function* createIterator2() {
  let first = yield 1;
  let second = yield first + 2;
  yield second + 3;
  // return undefined; // 默认的
}

let iterator2 = createIterator2();

// next遇到yield停下来，yield后面的值作为value
console.log(iterator2.next()); // {value: 1, done:false}
console.log(iterator2.next(4)); //  first被赋值为4，{value: 6, done: false}
console.log(iterator2.next(5)); // {value: 8, done:false}
console.log(iterator2.next()); // {value: undefined, done: true}

//  ------------------------- yield*： 委托给其他可迭代对象，作用：复用生成器

function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield 100;
  yield* generator1();
  yield 200;
  return 300;
}

let g2 = generator2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
// console.log(g2.return()); // return(param)：让生成器的遍历提前结束
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());

// --------------return(param)：让生成器的遍历提前结束
// -------------throw(param): 让生成器对象内部抛出错误，遇到yield才结束

// ----------------------------------------generator函数的实现原理
// 协程：一个线程可包括多个协程，但同时只执行一个
// Generator函数是协程在es6中的实现
// 通过yield挂起x协程（交给其他协程），next唤醒x协程
