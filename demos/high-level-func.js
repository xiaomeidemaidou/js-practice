// 高阶函数：接收一个函数作为参数的函数
const arr1 = [1, 2, 3, 4];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(1, arr2);

// ------------------------map-------------------------
const arr3 = arr1.map(function (item, index, arr) {
  // console.log(item, index, arr);
  return item * 2;
});
console.log(2, arr3);

const arr4 = arr1.map((i) => i * 2);
console.log(3, arr4);

//  ------------------------reduce-------------------------
let arr = [1, 2, 3, 4, 5, 3, 2, 3];
// 数组求和
let sum = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(sum);

// 数组去重
let newArr = arr.reduce((prev, cur) => {
  prev.indexOf(cur) === -1 && prev.push(cur);
  return prev;
}, []);

console.log(newArr);

// ------------------------filter-------------------------
let person = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "doris", age: 16, active: true },
  { user: "mark", age: 33, active: false },
];

let newAge = person.filter((item) => item.age > 21);
console.log(newAge);

// ------------------------flat--------------------------
// 数组扁平化, 仅NodeJS 11及更高版本支持此方法
let arre = [1, 2, 3, [3, 3, 2, [1, [3, [4]]]]];
let arre2 = arre.flat(Infinity); // flat默认一层
console.log(arre2);

// 高阶函数的意义
