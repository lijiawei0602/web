$(document).ready(function(){
	$("table tr:nth-child(odd)").css("background-color","#eee");
	
	/** 全选复选框单击事件 **/
	$(".checkAll").click(function(){
		if(this.checked){
			$("table tr td input[type=checkbox]").attr("checked",true);
		}
		else{
			$("table tr td input[type=checkbox]").attr("checked",false);
		}
		// var x = $("table tr td input[type=checkbox]:eq(1)").attr("checked");
		// console.log(x);
	})

	/** 删除按钮单击事件 **/
	$(".btn").click(function(){
		//获取除全选复选框之外的复选框
		var num = $("table tr td input[type=checkbox]:not('.checkAll')").length;

		if(num != 0){
			$("table tr td input[type=checkbox]:not('.checkAll')").each(function(index){
				if(this.checked){
					
					$("table tr[class="+ this.value +"]").remove();
				}
			})
		}
	})
})