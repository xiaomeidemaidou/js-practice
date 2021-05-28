// 函数组合：compose函数（从右往左），pipe函数（从左往右）
let calculate = (x) => (x + 10) * 10; //  命令式编程
console.log(1, calculate(2));

let add = (item) => item + 10;
let multiply = (item) => item * 10;
let minus = (item) => item - 1;
console.log(2, multiply(add(2)));

let composeOld = (f, g) => {
  return function (x) {
    return f(g(x));
  };
};

console.log(3, composeOld(multiply, add)(2)); // 从右往左，先执行add，再执行multiply

let compose1 = function () {
  let args = [].slice.call(arguments);
  return function (x) {
    return args.reduceRight(function (res, cb) {
      // reduce是从左往右累加，reduceRight是从右向左累加
      return cb(res);
    }, x);
  };
};

console.log(4, compose1(multiply, add)(2));

// es6写法
const compose =
  (...args) =>
  (x) =>
    args.reduceRight((res, cb) => cb(res), x);

console.log(5, compose(multiply, add)(2));

const pipe =
  (...args) =>
  (x) =>
    args.reduce((res, cb) => cb(res), x);

console.log(6, pipe(add, multiply)(2));

let compose2 = (...args) => {
  if (args.length === 0) {
    return (arg) => arg;
  }
  return args.reduce(
    (a, b) =>
      (...x) =>
        a(b(...x))
  );
};

console.log(7, compose2(multiply, add)(2));
console.log(
  8,
  compose(multiply, add, minus)(2),
  compose2(multiply, add, minus)(2)
); //  ((2 -1) + 10 )* 10
