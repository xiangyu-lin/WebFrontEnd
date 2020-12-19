
// 添加记录

var btn = document.getElementById("add");
btn.onclick = function(){
    // 获取用户填写的员工信息
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var salary = document.getElementById("salary").value;


    // 创建一个tr

    var tr = document.createElement("tr");
    tr.innerHTML += "<td>" + name + "</td>" + 
                    "<td>" + email + "</td>" + 
                    "<td>" + salary + "</td>" + 
                    "<td><a href='javascript:;'>Delete</a></td>";
    
    var tb = document.getElementById("employeeTable");
    tb.appendChild(tr);

    // 给a绑定删除操作
    var a = tr.getElementsByTagName("a")[0];
    a.onclick = function(){
        var flag = confirm("删除?");
        if (flag) {
            var tr = a.parentNode.parentNode;
            tr.parentNode.removeChild(tr);
        }

    };
    
}

// 删除记录

// 获取所有超链接
var allA  = document.getElementsByTagName("a");
for (let i = 0; i < allA.length; i++) {
    const element = allA[i];
    element.onclick = function(){
        // 点击超链接删除所在行, 这里要用this 不能用allA[i]
        // 因为for循环会在页面加载完成立即执行 所以function 看到的i是 for i最大值加1
        var tr = this.parentNode.parentNode;

        // 获取删除员工的名字
        var name = tr.children[0].innerHTML;

        // 确认删除提示框 confirm
        var flag = confirm("确认删除"+ name + "么？")
        if (flag) {
            tr.parentNode.removeChild(tr);
        }
        // 点击超链接会默认跳转， 最后 return false 可以取消跳转 
        return false;
        // 也可以使用html中使用 JavaScript:;占位src
    }
}
