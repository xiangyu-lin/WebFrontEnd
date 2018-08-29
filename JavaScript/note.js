// JS note

// 输出
    //alert('hello JS.'); // 弹出窗口
    document.write('hello js'); // 向body输出内容
    console.log('console contents'); // 向控制台输出内容

/*  JS 编写位置
 1. 外部js文件，通过script标签引入，推荐

     写到外部文件中可以在不同的页面中同时引用，也可以利用到浏览器缓存机制,推荐使用

     <script type="text/javascript" src='js/script.js'>
        // 一旦引入文件 此处编写代码代码无效
        // 如果需要写 在下面另起一个 script 标签
     </script>
  3. 标签属性中，虽然可以写在标签属性中，但他们属于结构行为耦合，不方便维护
     可以将js代码编写到标签的onclick属性中,点击按钮执行
 	   <button onclick="alert('hello botton.');">click this botton</button>
	 也可以将js代码编写到超链接的href中,点击超链接执行js -->
	    <a href="javascript:alert('hello link.');">click This link</a>
		<a href="javascript:;">click This link</a>
 *
 */
