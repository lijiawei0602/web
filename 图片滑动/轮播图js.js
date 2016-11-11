window.onload=function(){
	var container = document.getElementById("container");
	var pic = document.getElementById("pic");
	var button = document.getElementById("button").getElementsByTagName("span");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");	
	var index = 1;
	var animated = 0;
	var timer;
	
	function animate(offset) { 
		animated = 1;
		var newLeft = parseInt(pic.style.left) + offset;
		var time = 600; //位移总时间
		var interval = 10; //位移间隔时间
		var speed = offset/(time /interval);//每次位移量

		function go(){
			if(speed < 0 && parseInt(pic.style.left) > newLeft || speed > 0 && parseInt(pic.style.left) < newLeft){
				pic.style.left = parseInt(pic.style.left) + speed +"px";
				setTimeout(go,interval);
			}
			else{
				animated = 0;
				pic.style.left = newLeft + "px";
				if(newLeft > -500){
					pic.style.left = -3000 + "px";
				}
				if(newLeft < -3000){
					pic.style.left = -500 + "px";
				}
			}
		}
		go();
	}

	function showButton(){
		for(var i = 0; i < button.length; i++){
			if(button[i].className == "on"){
				button[i].className ="";
				break;
			}
		}
		button[index-1].className = "on";
	}

	function play(){
		timer = setInterval(function (){
			next.onclick();
		},3000);
	}

	function stop(){
		clearInterval(timer);
	}
	next.onclick = function(){
		if(index == 6){
			index = 1;
		}
		else{
			index +=1;
		}
		if (!animated) {
			animate(-500);
		}
		showButton();
	}
	prev.onclick = function(){
		if(index == 1){
			index = 6;
		}
		else{
			index -=1;
		}
		if(!animated){
			animate(500);
	}
		showButton();
	}
	for(var i=0; i < button.length; i++){
		button[i].onclick = function(){
			if(this.className == "on"){
				return;
			}

			var myIndex =parseInt(this.getAttribute("index"));
			var offset = -500 * (myIndex -index);
			if(!animated){
				animate(offset); 
			}
			index = myIndex;
			showButton();
		}
	}
	play();
	container.onmouseover = stop;
	container.onmouseout = play;

}