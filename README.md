# demoONE
解决问题：
js中element.style只能获取到元素内部样式，也就是写在元素标签内的样式，其他地方的样式是对他来说是不可读的。
list.style.left=parseInt(list.style.left)+400+'px';改为list.style.left=list.offsetLeft-400+"px";可用。

未解决：
跨图选择，动画BUG。
