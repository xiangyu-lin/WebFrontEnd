window.onload = function(){
    // 当鼠标在area中移动时， 在showMsg 中显示坐标
    var areaDiv = document.getElementById("areaDiv");
    var showMsg = document.getElementById("showMsg");

    /**
     * 鼠标移动的事件onmousemove
     * 
     * 浏览器调用函数时每次都会将一个事件对象传递进相应函数，手动传(event)
     *  这个事件对象封装了当前事件的一切信息， 如鼠标位置 键盘按键等
     * 
     *  clientX 鼠标水平坐标
     *  clientY 鼠标垂直坐标
     * 
     *  
     */ 


    areaDiv.onmousemove = function(event) {
        // 在showMsg 显示坐标
        // 获取坐标
        var x = event.clientX;
        var y = event.clientX;
        showMsg.innerHTML = "x = " + x + ", y=" + y;
    }

    // div 跟随鼠标移动练习

    // var mvdiv = document.getElementById("mvdiv");
    // document.onmousemove = function (event) {
    //     /**
    //      * clientX clientY 是针对可见窗口的坐标 如果有滚动条会有问题
    //      * 所以要用 pageX pageY 但是不兼容IE8
    //      */

    //     var left = event.pageX;
    //     var top = event.pageY;

    //     /**
    //      * 设置div偏移量
    //      *
    //      */ 
    //     mvdiv.style.left = left + "px";
    //     mvdiv.style.top = top + "px";

    // }

    /**
     * ### 事件的冒泡（Bubble）
     *  事件的冒泡是的向上传导
     *  - 子元素事件触发时， 祖先元素相同事件也会触发
     *  - 开发中大部分情况 冒泡都是有用的
     * 
     * 如果不希望发生 可以用时间对象取消冒泡
     *
     */
    var s1 = document.getElementById("s1");
    s1.onclick = function (event) {
        alert("s1");
        // 取消冒泡 event.cancelBubble = true;
        event.cancelBubble = true;
    }

    var maopao = document.getElementById("maopao");
    maopao.onclick = function () {
        alert("div");
    }

    // document.body.onclick = function () {
    //     alert("body");
    // }



    // ### 事件的委派

    // 添加一个超链接
    var btn01 = document.getElementById("btn01");
    btn01.onclick = function () {

        var ul = document.getElementById("u1");
        // 创建li
        var li = document.createElement("li");
        li.innerHTML = "<li><a href='javascript:;' class='link'>超链接new</a></li>"
        // 添加
        ul.appendChild(li);
    }

    // 为每一个超链接绑定单击响应函数， 比较麻烦， 而且只能绑定已有的。
    var allA = document.getElementsByTagName("a");
    for (let i = 0; i < allA.length; i++) {
        const element = allA[i];
        element.onclick = function () {
            alert("i am a");
        }
    }

    // 希望只绑定一次即可应用到多个元素，哪怕是后添加的
    // 可以将其绑定给元素共同的祖先元素
    //  这是事件的委派，利用了冒泡， 通过委派可以减少

    //  为ul 绑定响应函数
    var u1 = document.getElementById("u1");
    u1.onclick = function (event) {
        // 如果触发的对象是期望的元素则执行 否则不执行
        // event 中的target表示事件的触发对象。
        //  这里有个小隐患 如果class 写多个 就取不到link了
        if (event.target.className == "link") {
            alert("a");
        }
    }

    // ### 事件的绑定
    // var btn02 = document.getElementById("btn02");
    // btn02.onclick = function () {
    //     alert(1);
    // }
    // // 绑定第二个响应函数时， 会覆盖前面的响应函数
    // btn02.onclick = function () {
    //     alert(2);
    // }

    /**
     * addEventListener()  方法也可以为事件绑定响应函数
     *  参数
     *      1. 事件的字符串 不要on
     *      2. 回调函数， 事件触发时
     *      3. 是否在捕获阶段触发事件， 一般都传false
     *
     */ 
    btn02.addEventListener("click", function () {
        alert(1);
    }, false);

    btn02.addEventListener("click", function () {
        alert(2);
    }, false);


}