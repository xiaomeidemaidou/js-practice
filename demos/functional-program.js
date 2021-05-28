// 函数式编程: 将程序分解为一些更可重用、更可靠且更易理解的部分，然后再将它们组合起来，形成更易推理的程序整体
let arr = [1, 2, 3, 4];
let newArr = (arr, fn) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
};

let add = (item) => item + 3;
let multi = (item) => item * 5;

console.log(newArr(arr, add), newArr(arr, multi));
