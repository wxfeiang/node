// 引入文件系统 创建文件
var fs = require('fs')
// 2 使用模块 删除文件  回调函数
/* fs.unlink('writ.txt',function(err,data){
    if(err){
        throw err +"这个文件已经删除 或着没有找到此文件"
    }
})  */


// 同步创建文件 文件夹
//fs.mkdirSync('stuff')

// 同步删除文件 文件夹
//fs.rmdirSync('stuff')

// 异步 创建文件
/* fs.mkdir('stuff',function(){
 fs.readFile('read.txt','utf8',function(err,data){
     if(err){
         throw err
     }
     fs.writeFile('./stuff/write.txt',data)
     console.log('文件夹以及文件创建成功了')


 })

}) */

// 异步删除



//  文件夹中有内容 先删除文件夹的文件 在删除文件夹  顺序
fs.unlink('./stuff/write.txt',function(){

    fs.rmdir('stuff',function(err){
        if(err){
            throw err
        }
        console.log('文件夹以及对应的文件删除成功')

    })
})

