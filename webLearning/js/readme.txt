js基础总结：http://ife.baidu.com/note/detail/id/1398

1，事件监听函数需要传递参数时，使用"匿名函数"调用带参数的函数
document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
});

2，Array数组对象
w3c链接:http://www.w3school.com.cn/jsref/jsref_obj_array.asp
对象属性：
（1）constructor:返回对创建此对象的数组函数的引用
（2）length：设置或返回数组中元素的数目
（3）prototype：使你有能力向对象添加属性和方法
对象方法
（1）arr1.concat(arr2);数组拼接，结果为将arr2拼接到arr1的最后；
（2）arr.join()；数组字符串输出，括号内可以指定元素连接的符号；
（3）arr.pop();切除数组的最后一个元素，返回值为该元素；
（4）arr.slice(start,end)获取，获取数组的指定片段，start必须有，如果参数为负数则从末尾开始选取；返回值为该片段组成的，一个新的数组；
（5）arr.push添加，用于向数组的末尾添加新的元素，参数可以是多个；返回值为数组的新长度；
（6）arr.splice
    1、用于向数组中指定的索引添加元素；
    2、用于替换数组中的元素；       
    3、用于删除数组中的元素；        
（7）arr.indexOf(element);查找，在数组中查找element，返回值为索引，如果没有该元素返回-1；
（8）arr.sort(function);对数组的元素进行排序
（9）reverse() 颠倒数组中元素的顺序
（10）shift() 删除并返回数组的第一个元素
（11）toSource() 返回该对象的源代码
（12）toString() 把数组转换为字符串，并返回结果
（13）toLocaleString()把数组转换为本地数组，并返回结果
（14）unshift() 向数组的开头添加一个或更多元素，并返回新的长度
（15）valueOf() 返回数组对象的原始值
