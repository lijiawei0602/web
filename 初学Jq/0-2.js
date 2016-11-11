$(document).ready(function(){
	$('p').eq(1).hide();
	var $object = $('p').eq(1);
	$('a').click(function(event){
		event.preventDefault();
		
		//显示
		// $object.show('slow');
		
		// 淡入
		// $object.fadeIn('slow');
		
		// 滑上滑下(展开)
		// $object.slideDown('slow');
		
		// 切换可见性
		if($object.is(':hidden')){
			$object.fadeIn('slow');
			$(this).text('less');
		}
		else{
			$object.fadeOut('slow');
			$(this).text('more');
		}
		
		$object.animate({
			height:'toggle'
		},'slow');
		if($(this).text() == 'more')
			$(this).text('less');
		else
			$(this).text('more');
		// $(this).hide();
	});
});