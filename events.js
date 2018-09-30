
 // 1 事件模块  引入 系统引入 require ("events")  返回对象
 // 1 事件模块  引入
 var  events  = require('events')

 // 2创建事件  EventEmitter 对象            he jq 很像 
// new 实例化
 var myEmitter = new events.EventEmitter();

 // 3注册事件
 myEmitter.on("somEvent",function( msg){
   
    //  异步执行
   setImmediate(()=>{
    console.log(msg)

   })

   
 })
 // 4触发事件  传递参数
 myEmitter.emit('somEvent','实现事件并传递参数 ........异步执行');

 // 时间 对应的方法 异步执行
 console.log(1+"先执行");
 



