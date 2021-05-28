// --------------------------- thunk函数：实现传名调用，可实现自动执行generator函数

const fs = require("fs");
const Thunk = function (fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    };
  };
};

const readFileThunk = Thunk(fs.readFile);

function run(fn) {
  var gen = fn();
  function next(err, data) {
    var result = gen.next(data);
    console.log(result.value, next);
    if (result.done) return;
    result.value(next); // -------------关键, 第一次result.value是个function：fs.readFile
  }
  next();
}

const g = function* () {
  const s1 = yield readFileThunk("./data/1.json");
  console.log(s1.toString());
  // const s2 = yield readFileThunk("./data/2.json");
  // console.log(s2.toString());
  // const s3 = yield readFileThunk("./data/3.json");
  // console.log(s3.toString());
};

run(g);
