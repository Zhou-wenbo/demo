$('.tab .menus li').each(function(){
	$('.tab .menus li').mouseover(function(){
		$('.tab .menus li').removeClass('bg');
		$(this).addClass('bg');
		var index = $(this).index();
		$('.tab .scroll').css("margin-top",-index*800+'px');
		var arr =[
			'image/0.png',
			'image/1.png',
			'image/2.png',
			'image/3.png',
			'image/4.png',
			'image/5.png',
			'image/6.png',
		];
		$('.tab').css('bg','url('+arr[index]+')');
	})
})
