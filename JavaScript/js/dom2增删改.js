// Js 增删改

function myClick(idStr, fun){
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
}

// 创建广州节点
myClick("btn001", function(){
    // 创建li元素节点， 
    var li = document.createElement("li");
    // 创建文本广州
    var gzText = document.createTextNode("广州");
    // 将文本广州设置为 li 的子节点（向父节点中添加子节点）
    li.appendChild(gzText);
    // 获取city 节点并把li添加进去
    var ct = document.getElementById("city");
    ct.appendChild(li);
});

// 将广州插入到北京前
myClick("btn002",function(){
    var gzli = document.createElement("li");
    var gzText = document.createTextNode("广州");
    gzli.appendChild(gzText);
    var bj = document.getElementById("bj");

    var ct = document.getElementById("city");
    // 在指定子节点前插入新的子节点 (父节点.insertBefore(新, 旧节点))
    ct.insertBefore(gzli, bj);

});

// 替换子节点
myClick("btn003",function(){
    var gzli = document.createElement("li");
    var gzText = document.createTextNode("广州");
    gzli.appendChild(gzText);
    var bj = document.getElementById("bj");

    var ct = document.getElementById("city");
    //  (父节点.replaceChild(新, 旧节点))
    ct.replaceChild(gzli, bj);

});

// 删除北京节点
myClick("btn004",function(){
    var bj = document.getElementById("bj");
    // 使用父元素删除（已知父元素情况）
    // var ct = document.getElementById("city");
    // ct.removeChild(bj);

    // 获取父元素并删除(这种更方便)
    bj.parentNode.removeChild(bj);
});

// 创建广州节点 innerHtml方式
myClick("btn005", function(){
    // 创建li元素节点， 
    var ct = document.getElementById("city");
    // 但是这种会影响整个city结构
    ct.innerHTML += "<li>广州</li>";

    // 可以折中， 添加个li ，在li里设置innerHtml
});
