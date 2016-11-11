window.onload = function(){
	
	var input_1 = document.getElementsByClassName("input_1")[0];
	var input_2 = document.getElementsByClassName("input_2")[0];
	var name = "shouji";
	
	input_2.addEventListener("click" , function(){
		var script = document.createElement("script");
		script.src = "http://api.jisuapi.com/shouji/query?callback=handleResponse&appkey=0506419b64ef8e0f";
		
		script.src = addUrl(script.src , name , input_1.value);
		document.body.insertBefore(script , document.body.firstChild);
		script.parentNode.removeChild(script);
	}, false);
}
//JSON响应后加载到页面
function handleResponse(response){
	if(response.result == '')
		alert("输入手机号错误");
	else{
		// alert(response.result.city);
		var div = document.createElement("div");
		var ul = document.createElement("ul");
		var li1 = document.createElement("li");
		var li2 = document.createElement("li");
		var li3 = document.createElement("li");
		div.style.cssText = "position:absolute;" 
							+"top:350px; left:30%;"
							+"width:350px; height: 200px;"
							+"background:white;"
							// +"text-align:center;"
							+"font-size:1.5em;"
							+"border-radius:15px;"
		ul.style.listStyle = "none";
		
		var text1 = document.createTextNode("省：" + response.result.province );				
		var text2 = document.createTextNode("市：" + response.result.city);
		var text3 = document.createTextNode("手机号：" + response.result.shouji);
		li1.appendChild(text1);
		li2.appendChild(text2);
		li3.appendChild(text3);
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		div.appendChild(ul);
		document.body.appendChild(div);
	}
}
//查询字符串
function addUrl(url , name , value){
	url += (url.indexOf("?") == -1? "?" : "&");
	url += name + "=" + encodeURIComponent(value);
	return url;
}