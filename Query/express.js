window.onload = function(){
	var input_1 = document.getElementsByClassName("input_1")[0];
	var input_2 = document.getElementsByClassName("input_2")[0];
	var select = document.getElementsByClassName("select")[0];
	var value1 = select.options[select.selectedIndex].value;
	var name1 = "type";
	var name2 = "number";

	switch(value1){
		case "申通":
			value1 = "sto";
			break;
		case "圆通":
			value1 = "yto";
			break;
		case "顺丰":
			value1 = "sfexpress";
			break;
	}

	input_2.onclick = function(){
		var script = document.createElement("script");
		script.src = "http://api.jisuapi.com/express/query?callback=handleResponse&appkey=0506419b64ef8e0f";
		
		script.src = addUrl(script.src , name1 , value1);
		script.src = addUrl(script.src , name2 , input_1.value);
		document.body.insertBefore(script , document.body.firstChild);
	}
};

//查询字符串
function addUrl(url , name , value){
	url += (url.indexOf("?") ==-1 ? "?" : "&");
	url += name + "=" + encodeURIComponent(value);
	return url;
}

//JSON想用后加载到页面上
function handleResponse(response){
	if(response.result == '')
		alert("输入订单编号错误");
	else{
		// var length = response.result.list.length;
		// alert(response.result.list[length-1].time);
		var length = response.result.list.length;
		var div = document.createElement("div");
		var ul = document.createElement("ul");
		var array = new Array();
		for(var i =0; i<length; i++){
			var li = document.createElement("li");
			array[i] = li;
		}
		div.style.cssText = "position:absolute;" 
							+"top:300px; left:30%;"
							+"width:450px; height: 350px;"
							+"background:white;"
							+"padding-right:20px;"
							+"font-size:1em;"
							+"border-radius:15px;"
		ul.style.listStyle = "none";
		
		for(var i=0; i<length; i++){
			var text = document.createTextNode(response.result.list[i].time +" "+ response.result.list[i].status);
			array[i].appendChild(text);
			ul.appendChild(array[i]);
		}
		div.appendChild(ul);
		document.body.appendChild(div);
	}
}