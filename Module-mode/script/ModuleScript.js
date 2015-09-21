/**
 * ModuleScript
 * Module(模块)模块
 */

/*01 demo -------------------------------------------------------
 *description：
 *私有变量的
 *开放方法接口
 */
var testModuel=(function(){
    var counter = 0 ;
    return {
        incrementCounter :function(){
            return ++counter
        },
        resetCounter : function(){
            console.log(">>"+counter);
            counter = 0;
        }
    }
}());

console.log(testModuel.incrementCounter());
console.log(testModuel.incrementCounter());
testModuel.resetCounter();

/*02 demo  -------------------------------------------------------
 *description:
 *访问 私有函数
 * */

var myNamespace=(function(){

    //私有计数器变量
    var myPrivateVar = 0;

    //记录所有参数的私有函数
    var myPrivateMethod = function(foo){
        console.log(foo)
    };

    return {
        //公有变量
        myPublicVar:"foo",

        //调用私有变量和方法的 公有函数
        myPublicFunction: function (bar) {

            //增加私有计数器值
            myPrivateVar ++;

            //传入bar调用私有方法
            myPrivateMethod(bar)
        }

    }

}());


/*03 demo  -------------------------------------------------------
 *description:
 *私有 数组
 * 公共方法
 * */

var basketModule=(function(){
    //私有
    var bastket = [];

    function doSomethingPrivate(){
        //.....
    }

    function doSomethingElsePrivate(){
        //.....
    }

    return{
        //添加Item 到购物车
        addItem:function(values){
            bastket.push(values)
        },
        //获取购物车里面 Item 数
        getItemCount:function(){
            return bastket.length;
        },
        //私有函数的公有形式别名
        doSomething:doSomethingPrivate,
        //获取购物车里面所有Item 的价格总值
        getTotal:function(){
            var itemCount=this.getItemCount(),
                total= 0;

            while(itemCount --){
                total += bastket[itemCount].price;
            }
            return total
        }
    }
})();

//basketModule 返回一个 拥有 公有API的对象

basketModule.addItem({
    item:"bread",
    price:0.5
});

basketModule.addItem({
    item:"butter",
    price:0.3
});
// >> : 2
//总个数
console.log(basketModule.getItemCount());
// >> : 0.8
//总价格
console.log(basketModule.getTotal());



















