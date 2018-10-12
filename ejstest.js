// 引入  express 框架得 模块  直接使用方法
var express = require('express');

//  实例化  express 对象

var app = express();

// 配置 EJS 视图  规定得

app.set('view engine', 'ejs')


// 识别 具体EJS 文件

/*  1
app.get('/profile/:id',function(req,res){
    //  传入变量 

   res.render('profile' , {name: "ejs 变量"})

}) */

app.get('/profile/:id',function(req,res){
   // var data= {name: "王鹏" ,age: 20,zhiye: "WEB前端工程师"}
//    <p>姓名:<%= data.name %></p>
//    <p>年龄:<%= data.age %></p>
//   <p>职业:<%= data.zhiye  %></p>

        
   
    var data = [
        {age:29, name:"heeet"},
        {age:69, name:"王鹏"}
    ];
    

   res.render('profile' , {websit:req.params.id , data:data})

})

//  监听服务端口
app.listen(8888)