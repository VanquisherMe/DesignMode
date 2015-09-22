/**
 * jQ 下的例子
 *
 * 设计模式 page 35页
 *
 * 例子貌似有误 *************************
 *
 */

function library(module){
    $(function(){
        console.log(module);
      if(module.init){

          module.init()
      }
    });

    return module;
}

var myLibrary = library( function(){
    return {
        init:function(){
            //module implementation
            //模块实现
            console.log("jquery 的 实现")
        }
    };
}());

console.log(myLibrary);