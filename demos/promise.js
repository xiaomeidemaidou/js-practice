// 3s红灯，2s绿灯，1s黄灯依次闪烁并循环
let light = function (color, second) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(color);
      resolve();
    }, second * 1000);
  });
};

// let run = function (arr) {
//   return new Promise(function (resolve, reject) {
//     arr.forEach((item) => {
//       light(item.color, item.second).then(() => {
//         resolve();
//       });
//     });
//   });
// };

let run = function (arr) {
  let promise = Promise.resolve();
  arr.forEach((item) => {
    promise = promise.then(function () {
      return light(item.color, item.second);
    });
  });
  promise.then(function () {
    return run(arr);
  });
};

let lights = [
  {
    color: "red",
    second: 3,
  },
  {
    color: "green",
    second: 2,
  },
  {
    color: "yellow",
    second: 1,
  },
];
run(lights);
