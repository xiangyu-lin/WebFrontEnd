//
var btn = document.getElementById("btn01");
btn.onclick = function(){
    // 通过js修改元素样式
    /**
     *  语法 
     *   元素.style.样式名 = 样式值
     * 
     *  通过js修改的都是内联样式
     *    优先级比较高， 但是没有 !important优先级高, 即js修改失效。所以尽量不要用important
     * 
     * 
     */
    box1.style.width = "300px";
    box1.style.height = "100px";
    // 如果样式中含有-号， 那么这种名称不合法, 需要改成小驼峰
    box1.style.backgroundColor  =  "yellow";
}

/**
 * 通过js读取样式
 *      因为设置的是内联样式 所以也只能读取内联样式。
 * 
 */

var btn2 =  document.getElementById("btn02");
btn2.onclick = function () {
    console.log(box1.style.width);
    console.log(box1.style.backgroundColor);
}

// 获取元素当前显示的样式
var box3 = document.getElementById("box2")
var btn3 =  document.getElementById("btn03");
btn3.onclick = function () {
    // getComputedStyle(要获取的元素, 伪元素) 伪元素一般传null
    // 先获取元素对象
    var obj = getComputedStyle(box3, null);
    console.log(obj.width);
}

// 其他样式相关的属性
var box5 = document.getElementById("box5");
var btn5 = document.getElementById("btn05");
btn5.onclick = function () {
    // clientWidth、 clientHeight 等方法获取到的值不带单位 可以参与计算
    // 获取到的内容是只读的 但不能修改 改要通过style
    // 获取到的宽高不包括边框
    console.log(box5.clientWidth)

    // offsetWidth offsetHeight 包括边框

    // offsetParent
    // 获取最近的开启定位的祖先元素

    // offsetLeft 当前元素相对其开启定位父元素水平偏移量 （数字 两个元素之间的距离）
    // offsetTop 垂直偏移量

    // scrollWidth scrollHeight获取滚动区域的宽度  高度滚动条
    // scrollLeft scrollTop 获取滚动条滚动的距离
    //  scrollHeight - scrollTop =clientHeight 时， 说明滚动条滚动到底了 （比如阅读协议时可以使用）
    alert(box5.offsetLeft)

}

