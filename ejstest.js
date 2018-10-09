// 引入  express 框架得 模块  直接使用方法
var express = require('express');

//  实例化  express 对象

var app = express();

// 配置 EJS 视图  规定得

app.set('view engine', 'ejs')


// 识别 具体EJS 文件

app.get('/profile/:id',function(req,res){
    //  传入变量 

   res.render('profile' , {name: "ejs 变量"})

})

//  监听服务端口
app.listen(8888)