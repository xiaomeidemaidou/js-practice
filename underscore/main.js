//  underscore提供了一个对象  _

      // console.log(
      //   _.filter([1, 2, 3, 4, 3, 5, 3, 3, 2, 65, 4], function (item) {
      //     return item > 3;
      //   })
      // ); // _: 对象

      // console.log(
      //   _([1, 2, 3, 4, 3, 5, 3, 3, 2, 65, 4]).filter(function (item) {
      //     return item > 3;
      //   })
      // );

      // console.log(
      //   _([1, 2, 3, 4, 3, 5, 2, 65, 4, "a", "aDDDD", "adddd", "A"]).unique(
      //     function (item) {
      //       return typeof item === "string" ? item.toLowerCase() : item;
      //     }
      //   )
      // );

    // console.log(
    //     _.chain([1, 2, 3, 4, 3, 5, 2, 65, 4, "a", "aDDDD", "adddd", "A"]).unique(
    //       function (item) {
    //         return typeof item === "string" ? item.toLowerCase() : item;
    //       }
    //     ).add(33).ending()
    //   );

    
      console.log(
        _([1, 2, 3, 4, 3, 5, 2, 65, 4, "a", "aDDDD", "adddd", "A"]).chain().unique(
          function (item) {
            return typeof item === "string" ? item.toLowerCase() : item;
          }
        ).add(33).ending()
      );

      // 创建实例，调用uniqe，类似于jquery: $(xxx).css()
      // _：函数，函数也是一种对象

      // console.log(_());