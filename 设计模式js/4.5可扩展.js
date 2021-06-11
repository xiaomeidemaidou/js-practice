//观察者模式-转盘
//初始化html-》最终结果选定-》运动（动画，运动控制）；
//运动控制模块检测到赚了一圈-》通知到观察者-》通知到动画改变运动
function observe() {
  this.message = {};
}
observe.prototype.regist = function (type, fn) {
  this.message[type] = fn;
};
observe.prototype.fire = function (type) {
  this.message[type]();
};

var _domArr = [];
var observeOb = new observe();
function htmlInit(target) {
  for (var i = 0; i <= 9; i++) {
    var _div = document.createElement("div");
    _div.setAttribute("class", "item");
    _div.innerHTML = i;
    target.appendChild(_div);
    _domArr.push(_div);
  }
}
function getFinal() {
  var _num = Math.random() * 10 + 40;
  return Math.floor(_num, 0);
}

function mover(moveConfig) {
  var nowIn = 0;
  var removeNum = 9;

  var timer = setInterval(function () {
    if (nowIn != 0) {
      removeNum = nowIn - 1;
    }
    _domArr[removeNum].setAttribute("class", "item");
    _domArr[nowIn].setAttribute("class", "item item-on");
    nowIn++;
    if (nowIn == moveConfig.moveTime) {
      clearInterval(timer);
      if (moveConfig.moveTime == 10) {
        observeOb.fire("finish");
      }
    }
  }, moveConfig.speed);
}

function moveControll() {
  var final = getFinal();
  var _circle = Math.floor(final / 10, 0);
  var _runCircle = 0;
  var stopNum = final % 10;
  var _speed = 200;
  mover({
    moveTime: 10,
    speed: _speed,
  });
  observeOb.regist("finish", function () {
    var _time = 0;
    _speed -= 50;
    _runCircle++;
    if (_runCircle <= _circle) {
      _time = 10;
    } else {
      _time = stopNum;
    }

    mover({
      moveTime: _time,
      speed: _speed,
    });
  });
}
htmlInit(document.getElementById("app"));
moveControll();

//观察者模式-不同模块沟通
function comment() {
  var self = this;
  this.commentList = [
    {
      type: "normal",
      content: "xxxxx",
    },
  ];
  observeOb.regist("indexComment", function () {
    var _arr = [];
    self.commentList.forEach((item) => {
      if (item.type == "hot") {
        _arr.push(_item);
      }
    });
    return _arr;
  });
}

function index() {
  observeOb.fire("indexComment");
}

//职责链模式-axios源码
function Axios(instanceConfig) {
  this.default = instanceConfig;
  this.interceptors = {
    request: new interceptorsManner(),
    response: new interceptorsManner(),
  };
}
Axios.prototype.request = function () {
  var chain = [dispatchRequeset, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.handlers.forEach(function (interceptor) {
    chain.unshift(interceptor.fulfilled.interceptor.injected);
  });
  this.interceptor.response.handlers.forEach(function (interceptor) {
    chain.push(interceptor.fulfilled, intersecor.rejected);
  });
  while (chain.length) {
    promise = promise.then(chain.shift, chain.shift());
  }
  return promise;
};

function interceptorsManner() {
  this.handlers = []; //存放use加入的方法
}
interceptorsManner.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
  });
};

//职责链模式-表单颜值
//表单事件绑定-> >表单前端验证-》表单后端验证

input.onblur = function () {
  var _value = input.value;
  var _arr = [font, back];
  async function test() {
    var _result = _value;
    while (_arr.length > 0) {
      _result = await _arr.shift()(_result);
    }
    return _result;
  }
  test().then((res) => {
    console.log(res);
  });
};

function font(_result) {
  return (_result += 1);
}
function back(_result) {
  return new Promise((resolve, reject) => {
    resolve((_result += 3));
  });
}

//访问者模式-不同角色访问财务
function report() {
  this.income = "";
  this.cost = "";
  this.profit = "";
}

function boss() {}
boss.prototype.get = function (num) {};
function account() {}
account.prototype.get = function (num1, num2) {};
function vistor(data, man) {
  var handle = {
    boss: function (data) {
      man.get(data.profit);
    },
    account: function (data) {
      account.get(data.income, data.cost);
    },
  };
  handle[man.constructor.name](data);
}
vistor(new report(), new boss());

function table() {}
table.prototype.show = function () {};
table.prototype.delete = function (id) {
  vistor(this, tableData, "delete", id);
};
table.prototype.add = function () {};

//访问者模式-表格
var tableData = [
  {
    id: 1,
    name: "xxx",
    price: "xxx",
  },
];

function vistor(table, data, handle) {
  var handleOb = {
    delete: function (id) {},
    add: function () {},
  };
  var arg = Array.prototype.splice(arguments);
  arg.splice(0, 3);
  handleOb[handle].apply(this, arg);
}
