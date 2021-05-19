(function (root) {
  var _ = function (options) {
    if (!(this instanceof _)) {
      return new _(options); // 构造函数
    }
    this.wrapper = options;
  };

  _.unique = function (source = [], callback) {
    var ref = [];
    for (var i = 0; i < source.length; i++) {
      var item = callback ? callback(source[i]) : source[i];
      if (ref.indexOf(item) === -1) {
        ref.push(item);
      }
    }
    return ref;
  };

  _.add = function(data, age) {
    data.push('max')
    data.push(age)
    return data
  }

  _.filter = function (arr, callback) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback && callback(arr[i])) {
        res.push(arr[i]);
      }
    }
    return res;
  };

  _.template = function () {};

  // Object.keys(target)
  _.possess = function (target) {
    var res = [];
    for (var name in target) {
      res.push(name);
    }
    return res;
  };

  // 无法传递参数
  // _.prototype = {
  //   unique: _.unique,
  //   filter: _.filter,
  // };

  // 无法传递参数
  // _.mixin = function (target) {
  //   for (var name in target) {
  //     _.prototype[name] = target[name];
  //   }
  // };

  var beforeHook = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  };

  // _.mixin = function (target) {
  //   for (let i = 0; i < Object.keys(target).length; i++) {
  //     let key = Object.keys(target)[i];
  //     let func = target[key];
  //     _.prototype[key] = function () {
  //       return func.apply(this, [this.wrapper, ...arguments]);
  //     };
  //   }
  // };

  _.chain = function(data) {
    var instance = _(data)
    instance._chain = true
    return instance
  }

  var model = function(data, outcome) {
    if (data._chain) {
      this.wrapper = data.wrapper
      return data
    }
    return outcome
  }

  _.prototype.ending = function() {
    return this.wrapper
  }

  _.mixin = function (target) {
    beforeHook(_.possess(target), function (key) {
      var func = target[key];
      _.prototype[key] = function () {
        // return func.apply(this, [this.wrapper, ...arguments]);

        var decon = [this.wrapper];
        Array.prototype.push.apply(decon, arguments); // func.apply(this, arr)
        // arguments 是类数组
        return model(this, func.apply(this, decon));
      };
    });
  };

  _.mixin(_);
  root._ = _;
})(this);
