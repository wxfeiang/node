//  node  路由模块的使用


// 引入服务器模块
var http = require('http')

// 1 引入文件系统 模块
var fs = require('fs');
// 读  数据流    (文件路径   回调函数) 也可以路径拼接


// 搭建服务器
 var server = http.createServer(function(req,res){

   
   if(req.url !== 'favicon.ico'){
       //  判断地址 跳不同的路由页面
       if(req.url === '/' || req.url==='/index'){ // 跟路径
        res.writeHead(200,{"Content-type":"text/html"})
        fs.createReadStream(__dirname +'/index.html').pipe(res);
        

       } else if(req.url === '/contsnt'){
        res.writeHead(200,{"Content-type":"text/html"})
        fs.createReadStream(__dirname +'/contant.html').pipe(res);


       }else if(req.url === '/api/doc'){
        res.writeHead(200,{"Content-type":"text/html"})
        fs.createReadStream(__dirname +'/api/doc.html').pipe(res);


       }





  

   }

 })
//  读取 json 文件把 对应得文件合适换掉


//  监听端口

server.listen(8888,"127.0.0.1")


console.log("sever is runing ")