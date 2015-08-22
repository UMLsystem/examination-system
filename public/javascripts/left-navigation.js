$(function(){
	var Height = 40;
	var pTop = 50;
	$('.nav li').mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		var distance = index*(Height+1)+pTop+'px';
		$('.nav .hover').stop().animate({top:distance},150); 
	});
});
