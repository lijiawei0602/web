window.onload = function(){
	var container = document.getElementById("container");
	var pic = document.getElementById("pic");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");	
	var Img = pic.getElementsByTagName("img");
	var timer;

	prev.onclick = function(){
		for(var i=0; i< Img.length; i++){
			if(Img[i].style.opacity == 1){
				Img[i].style.opacity = 0;
				var j = i;
			}
		}
		console.log(Img[j].style.opacity);
		if(j>0){
			Img[j-1].style.opacity = 1;
		}
		else{
			Img[Img.length-1].style.opacity = 1;
		}
	};

	next.onclick = function(){
		for(var i=0; i< Img.length; i++){
			if(Img[i].style.opacity == 1){
				Img[i].style.opacity = 0;
				var j = i;
			}
		}
		if(j < Img.length-1){
			Img[j+1].style.opacity = 1;
		}
		else{
			Img[0].style.opacity = 1;
		}
	};

	function auto(){
		timer = setInterval(function(){
			next.onclick();
		},3000)
	}
	auto();
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover = stop;
	container.onmouseout = auto;
}