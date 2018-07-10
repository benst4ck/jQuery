import $ from 'jquery';
// $(callback) 是 $(document).ready(callback) 的简写 它绑定一个在DOM文档载入完成后立即执行的回调函数 可以多次使用
$(function(){
	var msg = $("#div1").text();
	// "#div1" id选择器 查找id为 "div1" 的元素
	// text方法获取匹配元素的内容
	console.log(msg);
})

$(function(){
	$("#div1").text('now');
	// text方法设置匹配元素的文本内容
})

// 匹配所有p元素 css方法设置属性
$("p").css({ "color": "white", "background": "black", "padding": "3px" });  // 设置多个属性
// <p style="color: white; background: black;"></p>

$("p").css("margin", "5px");  // 设置一个属性

console.log($("p").css("height"));  // 获取匹配到的第一个p元素的height属性的值