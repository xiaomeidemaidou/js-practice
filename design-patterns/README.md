### 创建一个对象的模式

- 工厂模式
  - 目的：方便大量创建对象
  - 应用场景：当某个对象需要经常创建时，比如：分页组件的页面对象、弹窗对象
  - example: 写一个方法，调用这个方法，就能拿到想要的对象

```
    function Factory(type) {
      switch(type) {
        case 'type1':
          return new Type1();
        caser 'type2':
          return new Type2();
        case 'type3':
          return new Type3();
      }
    }
```

- 建造者模式

  - 目的：需要组合出一个全局对象
  - 应用场景：当要创建单个、庞大的组合对象时，比如：复杂的轮播图
  - example：把一份复制的类各个部分，拆分成独立的类，然后再在最终类中合并到一起，最后是最后给出的类

  ```
  // 模块1
  function Module1() {

  }
  // 模块2
  function Module2() {

  }

  // 最终的使用类
  function Final() {
    this.mode1 = new Module1()
    this.mode2 = new Module2()
  }
  ```

- 单例模式
  - 目的：需要确保全局只有一个对象
  - 应用场景：为了避免重复新建，避免多个对象存在互相干扰
  - example: 通过定义一个方法，使用时只允许通过此方法拿到存在内部的同一实例化对象
  ```
  let singleton =function(name) {
    this.name = name;
  }
  singleton.getInstance = function(name) {
    if (this.instance) {
      return this.instance;
    }
    return this.instance = new singleton(name);
  }
  ```
