// 引入  express 框架得 模块  直接使用方法
var express = require('express');

//  实例化  express 对象

var app = express();

// 通过对象调用对应得方法  

//  app.get('/',function(req,res){

//      res.send("This is houme page  ")

//  })

 // 设置到不同得 路由得路劲
 app.get('/cantant',function(req,res){

    res.send("This is houme cantant  ")

})
// 设置路由参数
app.get('/home/:id',function(req,res){

    res.send("您所访问得路由参数为   "+ req.params.id)

})
// 识别 具体得 文件

app.get('/',function(req,res){

    res.sendFile(__dirname +'/index.html');

})

//  监听服务端口
app.listen(8888)