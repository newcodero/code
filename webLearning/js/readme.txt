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

3,正则表达式
链接：https://www.cnblogs.com/moqing/archive/2016/07/13/5665126.html
      http://www.jb51.net/article/97901.htm
      常用例子：https://c.runoob.com/front-end/854
定义正则：
    1 var re = new RegExp(“a”);  //RegExp对象。参数就是我们想要制定的规则。有一种情况必须用这种方式，下面会提到。
    2 var re = /a/;   // 简写方法 推荐使用 性能更好  不能为空 不然以为是注释 ，
split方法
split(‘字符串的分割正则','返回数组的最大成员数')；返回分割后各部分组成的数组 
正则的常用方法 
    1  test()  :在字符串中查找符合正则的内容，若查找到返回true,反之返回false.
       用法：正则.test(字符串) 
    2  search()  ：在字符串搜索符合正则的内容，搜索到就返回出现的位置（从0开始，如果匹配的不只是一个字母，那只会返回第一个字母的位置）， 如果搜索失        败就返回 -1 
       用法：字符串.search(正则)
    3  match()  在字符串中搜索复合规则的内容，搜索成功就返回内容，格式为数组，失败就返回null。
       用法： 字符串.match(正则)
    4 replace() :查找符合正则的字符串，就替换成对应的字符串。返回替换后的内容。
       用法： 字符串.replace(正则,新的字符串/回调函数)（在回调函数中，第一个参数指的是每次匹配成功的字符）
i 执行对大小写不敏感的匹配
g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
m 执行多行匹配
转义字符
    字符类匹配
    […] 查找方括号之间的任何字符
    [^…] 查找任何不在方括号之间的字符
    [a-z] 查找任何从小写 a 到小写 z 的字符
    [A-Z] 查找任何从大写 A 到大写 Z 的字符
    [A-z] 查找任何从大写 A 到小写 z 的字符
    . 查找单个字符，除了换行和行结束符
    \w 查找单词字符，等价于[a-zA-Z0-9]
    \W 查找非单词字符，等价于[^a-zA-Z0-9]
    \s 查找空白字符
    \S 查找非空白字符
    \d 查找数字，等价于[0-9]
    \D 查找非数字字符，等价于[^0-9]
    \b	匹配一个字边界，即字与空格间的位置。
    \B	非字边界匹配。
    \r 查找回车符
    \t 查找制表符
    \0 查找 NULL 字符
    \n 查找换行符

    \. : 真正的点
    .（点）——任意字符
    
量词：代表出现的次数
    {n,m} 匹配前一项至少n次，但不能超过m次
    {n,} 匹配前一项n次或更多次
    {n} 匹配前一项n次
    n？ 匹配前一项0次或者1次，也就是说前一项是可选的，等价于{0，1}
    n+ 匹配前一项1次或多次，等价于{1，}
    n* 匹配前一项0次或多次，等价于{0，}
    n$ 匹配任何结尾为 n 的字符串
    ^n 匹配任何开头为 n 的字符串
    ?=n 匹配任何其后紧接指定字符串 n 的字符串
    ?!n 匹配任何其后没有紧接指定字符串 n 的字符串
    
匹配特定数字
    ^[1-9]\d*$　 　 匹配正整数
    ^-[1-9]\d*$ 　 匹配负整数
    ^-?[0-9]\d*$　　 匹配整数
    ^[1-9]\d*|0$　 匹配非负整数（正整数 + 0）
    ^-[1-9]\d*|0$　　 匹配非正整数（负整数 + 0）
    ^[1-9]\d*.\d*|0.\d*[1-9]\d*$　　匹配正浮点数
    ^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$　匹配负浮点数
    ^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$　 匹配浮点数
    ^[1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0$　　 匹配非负浮点数（正浮点数 + 0）
    ^(-([1-9]\d*.\d*|0.\d*[1-9]\d*))|0?.0+|0$　　匹配非正浮点数（负浮点数 + 0）
匹配特定字符串
    ^[A-Za-z]+$　　匹配由26个英文字母组成的字符串
    ^[A-Z]+$　　匹配由26个英文字母的大写组成的字符串
    ^[a-z]+$　　匹配由26个英文字母的小写组成的字符串
    ^[A-Za-z0-9]+$　　匹配由数字和26个英文字母组成的字符串
    ^\w+$　　匹配由数字、26个英文字母或者下划线组成的字符串
4,js事件：https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events
    keyCode对照表：https://www.cnblogs.com/feifei-cyj/p/8006680.html
    html dom style 对象属性：http://www.w3school.com.cn/jsref/dom_obj_style.asp#list
    事件委托：https://www.cnblogs.com/lazychen/p/5664788.html
5,String对象属性和方法：
    http://www.w3school.com.cn/jsref/jsref_obj_string.asp
6,遍历二叉树：
    先序遍历：根左右；
    中序遍历：左根右；
    后序遍历：左右根；
7，排序问题:sort()默认按unicode排序，数字在大写字母之前，大写字母在小写字母之前。数字<大写字母<小写字母
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
8,Data对象
    http://www.w3school.com.cn/jsref/jsref_obj_date.asp

