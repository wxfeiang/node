// 引入文件系统模块  require
var fs = require('fs');

// 通过对象调用方法 (同步读取)
//var readme = fs.readFileSync('read.txt','utf8')
//console.log(readme);



// 写入
//var weite = fs.writeFileSync('write.text',"55555")



// 异步读取  w文件  格式 回调函数(错误, 数据)
fs.readFile('read.txt', 'utf8',function(err,data){
    // 有异常 抛出
    if(err){
        throw err
    }
   console.log(data)

})
console.log(1+"先出就是异步")

// 异步写入文件  // data 

fs.writeFile('writ.txt', 464651)

   


