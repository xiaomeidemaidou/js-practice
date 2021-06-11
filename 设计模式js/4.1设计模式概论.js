function food1(){
  
}
function food2(){
    
}
function food3(){
    
}
function food4(){
    
}
//如果依赖于具体，那么我们食物发生变动时，我们点餐方法也要发生剧烈变动
//所以我们点餐不要依赖于具体的食物，改成依赖某个抽象餐馆
function order(){
 
}
order.prototype.orderFood1=function(){

}
order.prototype.orderFood2=function(){
    
}
order.prototype.orderFood3=function(){
    
}
//所以这样做
//定义一个餐馆接口来代替直接依赖具体食物
function resturn(food){
   var list={
     food1:new food1(),
     food2:new food2(),
     food3:new food3()
   }
   return list[food];
}
//这样当食物发生变动。就不用改变点餐类
function order(food){
  return resturn(food)
}