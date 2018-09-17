# html 常用标签

## 常用

	<h1></h1> 标题 h1-6
	<p></p> 段落
	<hr> 水平线
	<center></center> 居中 不推荐使用

## 图片标签 <img>

	<img src="" alt="" width="" height="">

	<img src="./img/img2.jpg" alt="这里是一个外部图片(不能显示时的描述)" width="500" >
		src：外部图片路径
		alt: 可以用来设置图片，对图片的描述
			搜索引擎可以通过alt属性来识别不同的图片
			如果不写alt属性，则搜索引擎不会对img中的图片进行收录
		width， height : 可以用来修改图片宽度高度，一般用px作单位
		宽度和高度两个属性只设置一个，另一个也会同比例调整大小
		一般开发中除了自适应页面，不建议设置 width 和height

	图片格式
		JPEG（JPG）
			- JPEG 图片支持的颜色比较多，图片可以压缩，但不支持透明
			- 一般使用JPEG来保存照片等颜色丰富的图片
		GIF
			- GIF  支持的颜色少，只支持简单透明，支持动态图
			- 图片颜色单一或者动态图是可以使用 GIF
		PNG
			- PNG 支持的颜色多，并且支持复杂的透明
			- 可以用来显示复杂的透明的图片
	图片使用原则：
		效果不一致，使用效果好的，效果一致，使用小的。

## 超链接

	使用a标签创建一个超链接
	属性：
		href： 指向链接跳转的目标地址，可以是相对或是绝对路径
		target: 可以用来指定打开链接的位置
			_ self : 表示当前窗口中打开（默认值）
			_ blank : 在新的窗口中打开
	`<a href="http://www.doer.ren" target="_self">超链接</a>`
	`<a href="http://www.doer.ren" target="_blank">超链接</a>`

	可以设置内联框架的name属性值，链接将会在指定的内联框架中打开
	`<a href="demo03.html" target="tom">我也是一个超链接</a>``
	`<iframe src="demo01.html" name="tom"></iframe>`

	如果将链接地址设置为 #,点击会回到顶部。
	`<a id="bottom" href="#">回到顶部</a>`

	跳转到id为bottom的元素所在的位置,直接在href中写#id属性值
	`<a href="#bottom">去底部</a>`
	html 中有一个属性所有元素都能设置，该属性作为标签的唯一标识
	这个属性是 id，id属性在同一页面不能重复

	发送邮件超链接，点击打开默认邮件客户端，
	并将收件人设置为mailto后邮件地址
	href="mailto：邮件地址"
	`<a href="mailto:3139303033@qq.com">联系我们</a>`

实体

	在html中一些如<>这种特殊字符不能直接用，要使用一些特殊符号表示。
	这些符号称之为实体（转义字符串）
	浏览器解析到实体是,会自动将实体转换为对应字符
	实体的语法：
		&实体的名字;
			< 		&lt;
			> 		&gt;
			空格 	  &nbsp;
			版权符号 &copy;

内联框架

	 使用内联框架可以引用一个外部页面
		 使用 iframe 来创建一个内联框架
		 属性：
			 src: 指向一个外部页面的路径，可以使用相对路径
			 width:
			 height:
			 name: 可以为内联框架指定name属性
	 在现实开发中不推荐使用，因为内联框架中的内容不会被搜索引擎检索。
	`<iframe src="" width="500px" height="800px" ></iframe>`
