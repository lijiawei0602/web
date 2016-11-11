window.onload=function(){
	var container = document.getElementById("container");
	var small_box = document.getElementById("small_box");
	var float_box = document.getElementById("float_box");
	var big_box = document.getElementById("big_box");
	var big_boxImg = big_box.getElementsByTagName("img")[0];

	small_box.onmouseover = function(){
		float_box.style.display = "block";
		big_box.style.display = "block";
	}
	small_box.onmouseout = function(){
		float_box.style.display = "none";
		big_box.style.display = "none";
	}

	small_box.onmousemove = function(ev){
        var _event = ev || window.event; 
        //兼容多个浏览器的event参数模式
        //
		var left = _event.clientX - container.offsetLeft - float_box.offsetWidth/2;
		var top = _event.clientY - container.offsetTop - float_box.offsetHeight/2;
		
		if(left < 0){
			left = 0;
		}
		if(left > small_box.offsetWidth - float_box.offsetWidth){
			left = small_box.offsetWidth - float_box.offsetWidth;
		}
		if(top < 0){
			top = 0;
		}
		if(top > small_box.offsetHeight - float_box.offsetHeight){
			top= small_box.offsetHeight - float_box.offsetHeight;
		}
		float_box.style.left = left +"px";
		float_box.style.top = top +"px";

		var percentX = left / (small_box.offsetWidth - float_box.offsetWidth);
		var percentY = top / (small_box.offsetHeight - float_box.offsetHeight);

		big_boxImg.style.left = - percentX * (big_boxImg.offsetWidth  - big_box.offsetWidth ) + "px";
		big_boxImg.style.top  = - percentY * (big_boxImg.offsetHeight - big_box.offsetHeight) + "px";
	}
}
