//A
//A.o,A.c ,A.t

window.A=$;
A.o=function(){
	return $.on();
}
A.c=function(){
	return c.css();
}

function f1(obj){
	var _default={
		name:"xxx",
		color:"red",
	}
	for(var item in _default){
		_default[i]=obj[i]||_default[i];
	}
}



var decorator=function(dom,fn){
  if(typeof dom.onclick='function'){
  	var _old=dom.onclick;
  	dom.onclick=function(){
  		_old();
  		fn();
  	}
  }
}

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

    methodsToPatch.forEach(function (method) {
    // cache original method
      arrayMethods[method]=function(){
	      var original = arrayProto[method];
	      var result = original.apply(this, args);
	      dep.notify();
	      return result
      }
 
  });

    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }


    var _data={
      imgArr:[{img:'xxxx',title:'default title1'},{img:'xxxx',title:'default title2'}],
      type:'normal',
    }
    _data.imgArr.forEach((img)=>{
    	//生成html
    })
    target.innerHTML=_html

    var createImg=(function(){
    	var action={
    	  create:function(obj){
             var htmlArr=[];
             var _htmlstring='';
             var _htmlTemplate="<div><img src='{{img-url}}' /></div><h2>{{title}}</h2>"
             var displayWay={
             	normal:function(arr){
                  return arr;
             	},
             	reverse:function(arr){
             	  return arr.reverse;
             	}
             }

             obj.imgArr.forEach((img)=>{
               var _html;
               _html=_htmlTemplate.replace('{{img-url}}',img.img).replace('{{title}}',img.title);
               htmlArr.push(_html);
             })
             htmlArr=displayWay[obj.type](htmlArr);
             _htmlstring=htmlArr.join("");
             return "<div>"+_htmlstring+"</div>";
    	  },
    	  display:function(obj){
            var _html=this.create(obj);
            obj.target.innerHTML=_html;
    	  }
    	}

        return function excute(obj){
             var _default={
             	imgArr:[{img:'xxxx',title:'default title'}],
             	type:'normal',
             	target:document.body
             };
             for(var item in _default){
             	_default[item]=obj[item]||_default[item];
             }
             action.display(_default);          
        }
    })()
    createImg({
      imgArr:[{img:'xxxx',title:'default title1'},{img:'xxxx',title:'default title2'}],
      type:'normal',
    })
    //1,用户只管输入他要的命令，不用关心api
    //2,命令和实现解耦，无论命令发生变动，还是实现发生变动，都不会彼此影响

   var myCanvas=function(){

   }
   myCanvas.prototype.drawCircle=function(){

   }
   myCanvas.prototype.drawRect=function(){

   }
   

   var canvasComand=(function(){
     var action={
     	drawCircle:function(config){

     	},
     	drawRect:function(config){

     	}
     };
     return function excute(commander){
     	commander.forEach((item)=>{
     		action[item.command](item.config);
     	})
     }
   })()