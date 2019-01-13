var $wrap = $('.wrapper');
setTimeout(function(){
	$wrap.removeClass('init');
},10);

$('.item') .on('click',function(){
	$(this).addClass('active');	
	$wrap.addClass('activeWrap');
});