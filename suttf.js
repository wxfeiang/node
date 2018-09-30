var counter = function(arry){
   return  "一共有"+ arry.length +"个元素"
}
console.log(counter([1,2,3,5]))
// moude 文件模块化  输出

var pi = 3.14;
var add = function(a,b){
    return "add 方法两个数的和为"+ (a +b) ;

}
// 单个输出
//  module.exports = counter;
//  属性的方式输出
/*module.exports.counter = counter;
module.exports.add = add;
module.exports.pi = pi;
*/


// 对像 方式输出
module.exports= {
    counter: counter,
    add : add,
    pi : pi
}

