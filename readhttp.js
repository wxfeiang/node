//  练习 数据流得 读写 
// 把 读到得数据  写入新的文件
//把读到得数据写入  浏览器 htnml

// 引入服务器模块
var http = require('http')



// 1 引入文件系统 模块
var fs = require('fs');
// 读  数据流    (文件路径   回调函数) 也可以路径拼接


//  打印此对象
//console.log(myReadSrome);
//  写入新文件
// var myWritestome = fs.createWriteStream(__dirname +'/mywrite2.txt');

// //  pipe  事件  pipe 左边接收  右边 输出  读写
// myReadSrome.pipe(myWritestome)

// 规定得此事件方法   返回 一小块数据vchuck
// myReadSrome.on('data',function(chuck){
//     console.log('----------------------正在接收一部分数据----------------');

//     // 写入数据chuck

//     //console.log(chuck)
//     myWritestome.write(chuck);
// })

// 搭建服务器
 var server = http.createServer(function(req,res){
 
     res.writeHead(200,{"Content-type":"text/plain"})
     var myReadSrome = fs.createReadStream(__dirname +'/liu.txt','utf8');
     myReadSrome.pipe(res)

 })
//  监听端口

server.listen(8888,"127.0.0.1")


console.log("sever is runing ")