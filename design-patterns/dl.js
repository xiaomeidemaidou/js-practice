// 需求：项目中有一个全局的数据存储者，这个存储者志愿后一个，不然会需要进行同步，增加复杂度；example：vue-router，必须保证全局有且只有一个，否则会乱

function store() {
  this.store = {};

  // 单例模式
  if (store.install) {
    return store.install;
  }
  store.install = this;
}

store.install = null;
var s1 = new store();
var s2 = new store();
s1.store.a = 1;
console.log(s2);
