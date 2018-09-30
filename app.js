console.log("hellow node.js");
var time = 0;
var timer =setInterval(function(){

    time +=2;
    console.log(time +"秒时间到了")
    if(time>=10){
        clearInterval(timer);
    }
},2000);
console.log(__dirname +"当前文件的路径") 
console.log(__filename +"当前文件名的路径")

// 引入 返回对象
//require('./suttf'); 单个
 //var counter = require('./suttf')
 //  多个方法处理 对象方式 (自定义引入方法)
 var suttf = require('./suttf');
 console.log(suttf.counter([1,2,3]))
 console.log(suttf.add(suttf.pi,6));






 

