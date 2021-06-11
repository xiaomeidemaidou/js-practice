// 工厂模式
(function () {
  // function infoPop() {}
  // function confirmPop() {}
  // function cancelPop() {}

  // 创建3个消息弹窗、3个确认弹窗、3个取消弹窗，分别有不同的颜色
  // new infoPop('hello', 'red')
  // new confirmPop()

  // 工厂模式改造
  // function pop(type, content, color) {
  //   switch (type) {
  //     case "infoPop":
  //       return new infoPop(content, color);
  //     case "confirmPop":
  //       return new confirmPop(content, color);
  //     case "cancelPop":
  //       return new cancelPop(content, color);
  //   }
  // }

  function pop(type, content, color) {
    if (this instanceof pop) {
      var s = new this[type](content, color);
    } else {
      return new pop(type, content, color);
    }

    pop.prototype.infoPop = function () {};
    pop.prototype.confirmPop = function () {};
    pop.prototype.cancelPop = function () {};
  }

  window.pop = pop;
})();

// pop('infoPop', 'hello', 'red')
var arr = [
  { type: "infoPop", word: "hello", color: "red" },
  { type: "infoPop", word: "hello", color: "red" },
  { type: "infoPop", word: "hello", color: "red" },
  { type: "confirmPop", word: "hello", color: "red" },
  { type: "confirmPop", word: "hello", color: "red" },
  { type: "confirmPop", word: "hello", color: "red" },
  { type: "cancelPop", word: "hello", color: "red" },
  { type: "cancelPop", word: "hello", color: "red" },
  { type: "cancelPop", word: "hello", color: "red" },
];

arr.forEach((item) => {
  pop(item.type, item.word, item.color);
});
