window.onload=function(){
	waterfall("main","box");

	var data = {"data":[{"src":"image/17.jpg"},{"src":"image/18.jpg"},{"src":"image/19.jpg"},{"src":"image/20.jpg"}]};
	window.onscroll = function(){
		if(checkScrollSlide){
			for(var i=0; i<data.data.length; i++){
				var main = document.getElementById("main");
				var box = document.createElement("div");
				box.className = "box";
				main.appendChild(box);

				var pic = document.createElement("div");
				pic.className = "pic";
				box.appendChild(pic);

				var img = document.createElement("img");
				img.src = data.data[i].src;
				pic.appendChild(img);
			}
			waterfall("main","box");
		}
	}
}
function waterfall(parent,Class){
	var main =document.getElementById("main");
	var box = getByClass(main,Class);
	var boxWidth = box[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / boxWidth);
	//设置main的宽度
	main.style.cssText="width:" + boxWidth * cols +"px;";

	var hArr=[];
	for(var i=0; i<box.length; i++){
		if(i<cols){
			hArr.push(box[i].offsetHeight);
		}
		else{
			var minHeight = Math.min.apply(null,hArr);
			var index = getMinIndex(hArr,minHeight);
			box[i].style.position = "absolute";
			box[i].style.top = minHeight +"px";
			box[i].style.left = index * boxWidth +"px";
			hArr[index] += box[i].offsetHeight;
		}
	}
}
function getByClass(parent,clasName){
	var boxArray = new Array();
	var element = main.getElementsByTagName("*");
	for(var i=0; i<element.length; i++){
		if(element[i].className == clasName){
			boxArray.push(element[i]);
		}
	}
	return boxArray;
} 
function getMinIndex(arr,min){
	for(var i=0; i<arr.length;i++){
		if(arr[i] == min){
			 return i;
		}
	}
}

function checkScrollSlide(){
	var main = document.getElementById("main");
	var box = getByClass(main,"box");
	var lastBoxHeight = box[box.length-1].offsetTop;
	//混杂模式 || 标准模式
	var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	if(lastHeight < scrollHeight + height){
		return true;
	}
	else{
		return false;
	}
}