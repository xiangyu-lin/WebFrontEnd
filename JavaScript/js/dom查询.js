/**
 *  DOM  Document Object Model 文档对象模型
 *      就是使用js操作网页
 *      -   文档 就是一个网页
 *      -   对象 将网页的每一个部分都转换成对象 （标签 注释  等）
 *      -   模型  用模型来表示对象之间的关系， 方便获取对象
 *              - 比如网页是文档对象
 *                      -  文档对象中包括
 *                              -   html
 *                                      -   head 
 *                                                  title 
 *                                                  meta
 *                                      -   body
 *                                                  p
 *                                                  a         
 *             根据这些关系可以查询对象 （s3c HTML DOM 树）     
 * 
 * 
 *      节点 Node 网页中每一个部分都是一个节点
 *          - 文档节点  整个文档
 *          - 元素节点  标签
 *          - 属性节点  元素属性
 *          - 文本节点  文本内容
 *             
 *      浏览器已经提供文档节点， 可以直接使用 ducment 就是文档节点（整个网页）
 */


//  获取一个对象 getElementById("btn")
var btn  = document.getElementById("btn");
//  修改按钮文字
btn.innerHTML = "我是innerHtml修改后的btn";
// innerText 返回没有标签的文本

/**
 * 事件 用户和浏览器交互的行为 如点击 移动 关闭窗口
 * 处理事件： 事件对应属性中设置一些js， 事件触发时， 执行这些js代码
 * 可以为按钮对应事件绑定处理函数的形式来相应函数, 事件被触发时即调用函数。
 */

 btn.onclick = function(){
     alert("click2");
 };

//  onload 页面加载完成之后，再执行该函数。
//  如果想把script标签写在head里， 就把代码下载onload里
// window.onload = function(){
// };


/**
 * 获取元素节点， 都是通过ducument
 *  getElementById() 获取一个元素几点
 *  getElementsByTagName() 通过标签名获取一组元素节点对象
 *  getElementsByName() 通过name属性获取一组节点对象
 */

var btnname =  document.getElementById("btn2");
btnname.onclick = function(){
    console.log(btnname.innerHTML);
};

//  可以通过对象.属性 去获取对应的属性值
btnname.onclick = function(){
    console.log(btnname.name);
};


//  练习 切换图片 未完成
var  btn_prev = document.getElementById("prev");
btn_prev.onclick = function(){
    alert("prev");
}

var  btn_next= document.getElementById("next");
btn_next.onclick = function(){
    alert("next");
}


// 获取父节点的子节点
btn_next.getElementsByTagName("name"); //方法  返回制定标签名后代节点
btn_next.childNodes;  // 属性 表示当前节点的所有自节点
btn_next.firstChild; // 第一个子节点
//  lastChild 最后一个子节点
//  parentNode 父节点
//  previousSibling 前一个兄弟节点
//  nextSibling 后一个兄弟节点


//  全选练习

var chkAllBtn = document.getElementById("checkedAllBtn");
chkAllBtn.onclick = function(){
    // 设置4个多选框变成选中状态
    var allBtn = document.getElementsByName("items");
    for (var i = 0;  i < allBtn.length; i++){
        // checked 属性可以设置是否为选中状态
        allBtn[i].checked  = true;
    }
}

var chkNoBtn = document.getElementById("checkedNoBtn");
chkNoBtn.onclick = function(){
        // 设置全部为不选中
        var allBtn = document.getElementsByName("items");
        for (let i = 0; i < allBtn.length; i++) {
            allBtn[i].checked = false;
        }
}

//  反选
var chkRevBtn = document.getElementById("checkedRevBtn");
chkRevBtn.onclick = function(){
    var allBtn = document.getElementsByName("items");
    for (var i = 0;  i < allBtn.length; i++){
        // if( ! allBtn[i].checked) {
        //     allBtn[i].checked  = true;
        // } else {
        //     allBtn[i].checked  = false;
        // }
        allBtn[i].checked = ! allBtn[i].checked;

    }
}

//  提交
var sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function(){
    var allBtn = document.getElementsByName("items");
    for (var i = 0;  i < allBtn.length; i++){
        if(allBtn[i].checked){
            alert(allBtn[i].value)
        }
    }
}

//  全选 全不选多选框
var checkedAllBox = document.getElementById("checkedAllBox");
checkedAllBox.onclick = function(){
    var allBtn = document.getElementsByName("items");

    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].checked = checkedAllBox.checked;
    }
}

// 为4个多选框绑定函数， 4个全选 则全选按钮打钩 有一个不选则 取消全选钩。
//  略


// 查询的剩余操作

//  body
var body = document.body;
// html 根标签
var html = document.documentElement;
// all 代表页面中所有元素
var all = document.all;
console.log(all)

// getElementsByClassName() 不支持IE8及一下

// 获取所有div 
var divs = document.getElementsByTagName("div")
// ### 获取class 为box1中的div, 通过css 选择器查询元素节点对象, 如果返回多个 只会返回第一个。
var divInBox1 = document.querySelector(".box1 div")
console.log(divInBox1);

var divInBoxList = document.querySelectorAll(".box1 div")
console.log(divInBoxList);

