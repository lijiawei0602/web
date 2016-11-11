$(document).ready(function(){
	$('#switcher-default').addClass('selected');
	$('#switcher button').click(function(){
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#switcher-default').click(function(){
		$('p').removeClass('large').removeClass('narrow');
	});
	$('#switcher-narrow').click(function(){
		$('p').removeClass('large').addClass('narrow');
	});
	$('#switcher-large').click(function(){
		$('p').removeClass('narrow').addClass('large');
	});

	// 鼠标样式
	$('#switcher button').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
	
	// 隐藏按钮(事件对象的利用)
	$('#switcher').click(function(event){
		if(event.target == this){
			$('#switcher button').toggleClass('hidden');
		}
	});
	
	//持续变化
	var defaultSize = $('p').css('font-size');

	$('#switcher button').click(function(){
		var size = parseFloat($('p').css('fontSize'));
		switch(this.id){
			case 'switcher-large':
				size *= 1.4;
				break;
			case 'switcher-narrow':
				size /= 1.4;
				break;
			default:
				size = parseFloat(defaultSize);
		}
		$('p').css('fontSize', size + 'px');
		// $('p').animate({fontSize:size + 'px'} , 'slow');
	});
});