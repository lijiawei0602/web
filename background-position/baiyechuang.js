window.onload = function(){
	createImg();
	positionImg();
	setInterval(animation,5000);	
	// animation();
};
function createImg(){
	var container = document.getElementsByClassName("container")[0];
	var imgLeft1 = 800/15 * 2;
	var imgLeft2 = 800/15;

	for(var i=1; i<7 ;i++){
		var imgSrc = '\"img/pic' + i + '.jpg\"';
		for(var j=0; j<15; j++){
			if(j<8){
				var imgBlock = container.getElementsByClassName("imgTop" + i)[0];
				var div = document.createElement("div");
				imgBlock.appendChild(div);
				div.style.cssText = "background-image:url(" + imgSrc +");"
										+"background-repeat:no-repeat;"
										+"background-position:" + (j * imgLeft1 ) * (-1) + "px 0px;"
										+"position:relative;"
										+"float:left;"
										+"left:"+ j * imgLeft2 + "px;"
										+"width:"+ imgLeft2 +"px;"
										+"height:600px;"
			}
			else{
				var imgBlock = container.getElementsByClassName("imgBottom" + i)[0];
				var div = document.createElement("div");
				imgBlock.appendChild(div);
				div.style.cssText = "background-image:url(" + imgSrc +");"
										+"background-repeat:no-repeat;"
										+"background-position:" + (((j-7) * imgLeft1 ) * (-1)+imgLeft2) + "px 0px;"
										+"position:relative;"
										+"float:left;"
										+"left:"+ (j-7) * imgLeft2 + "px;"
										+"width:"+ imgLeft2 +"px;"
										+"height:600px;"				
			}
		}
	}
}

function positionImg(){
	for(var i=1;i<7;i++){
		var size = (i-1) * 600 + "px";
		var imgTopName = "imgTop" + i;
		var imgBottomName = "imgBottom" + i;
		var container = document.getElementsByClassName("container")[0]; 
		var imgTop = container.getElementsByClassName(imgTopName)[0];
		var imgBottom = container.getElementsByClassName(imgBottomName)[0];

		imgTop.style.cssText = "bottom:" + size;
		imgBottom.style.cssText = "top:" + size;
	}
}
var n = 1;
function animation(){

	for(var i=1;i<7;i++){
		var imgTopName = "imgTop" + i;
		var imgBottomName = "imgBottom" + i;
		var container = document.getElementsByClassName("container")[0]; 
		var imgTop = container.getElementsByClassName(imgTopName)[0];
		var imgBottom = container.getElementsByClassName(imgBottomName)[0];
		
		if(i == n){
			imgTop.style.zIndex = "1";
			imgBottom.style.zIndex = "1";
		}
		else{
			imgTop.style.zIndex = "2";
			imgBottom.style.zIndex = "2";
		}
	}

	for(var i =1; i<7;i++){
		var imgTopName = "imgTop" + i;
		var imgBottomName = "imgBottom" + i;
		var container = document.getElementsByClassName("container")[0]; 
		var imgTop = container.getElementsByClassName(imgTopName)[0];
		var imgBottom = container.getElementsByClassName(imgBottomName)[0];
		
		if(i == n){
			imgTop.style.transition = "bottom 1.5s linear 1.5s";
			var t = parseInt(imgTop.style.bottom);
			imgTop.style.bottom = (t+3000)+"px";
			// imgTop.style.cssText = "bottom:" + (t + 3000) +"px;";
			console.log(imgTop.style.transition);
			imgBottom.style.transition = "top 1.5s linear 1.5s";
			var p = parseInt(imgBottom.style.top);
			imgBottom.style.top = (p+3000) +"px";
			// imgBottom.style.cssText = "top:" + (p + 3000) +"px;"
		}

		else{
			imgTop.style.transition = "bottom 1.5s linear 0s";
			var t = parseInt(imgTop.style.bottom);
			// imgTop.style.cssText = "bottom:" + (t - 600) +"px;";
			imgTop.style.bottom = (t-600) +"px";

			imgBottom.style.transition = "top 1.5s linear 0s";
			var p = parseInt(imgBottom.style.top);
			// imgBottom.style.cssText = "top:" + (p - 600) +"px;"
			imgBottom.style.top = (p-600) + "px";
		}
	}
	n++;
	if(n == 7){
		n = 1;
	}
}
