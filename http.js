//  通过http 创建服务器
var http = require('http')

// 创建服务器方法  回调函数

var server = http.createServer(function(req,res){
    console.log("客户端向服务器发送了请求 " +".........."+ req.url);
    // 设置相应头  返回纯文本
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("server is working")


})

// 服务对象监听服务器地址,端口号
server.listen(8888,"127.0.0.1")

//  在浏览器输入地址 查看

console.log("sever is runing ")