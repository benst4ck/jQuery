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

// element选择器 匹配所有p元素 css方法设置属性
$("p").css({ "color": "white", "background": "black", "padding": "3px" });  // 设置多个属性
// <p style="color: white; background: black;"></p>

$("p").css("margin", "5px");  // 设置一个属性

console.log($("p").css("height"));  // 获取匹配到的第一个p元素的height属性的值

// 通过on方法绑定click事件到匹配到的元素 当单击时执行回调函数
$(".fruit").on("click", function(){
	alert( $(this).text() );  // 这里this指向发生click事件的元素
});

function enterHandler(event) {
	console.log(event.data.foo);
}
function leaveHandler(event) {
	console.log(event.data.bar);
}
var signal = {
	foo: "enter",
	bar: "leave"
}

// 当鼠标指针移到元素上时 会发生mouseenter事件 离开时 会发生mouseleave事件
// 在给定的祖先元素(p)中匹配所有的后代元素(span)
$("p span").on("mouseenter", signal, enterHandler)  // mouseenter事件发生时 传递数据signal到事件处理函数enterHandler
$("p span").on("mouseleave", signal, leaveHandler)

// 匹配id属性为'div1'的元素 和class属性为'node'的元素 并对匹配的元素绑定一次性的双击事件
$("div#div1, p.node").one("dblclick", function(){
	alert("double hit");
})

// 在给定的父元素(form)下匹配所有的子元素(input) 父子元素之间具有直接的包含关系
// 通过val方法获取或设置所匹配元素的当前值
$("form > input").val("Hello!")

// 匹配紧跟在form元素后的input元素
$("form + input").val("cookie")

// 匹配p元素后的所有同辈span元素
// 通过append方法向匹配元素内部追加内容
$("p ~ span").append("<b>hi!</b>")

// 将id为lst1中的第一个后代li元素追加到id为lst2中的最后一个后代li元素中
$("#lst1 li:first").appendTo("#lst2 li:last")