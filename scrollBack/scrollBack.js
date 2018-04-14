$(window).scroll(function () {
	var scrollValue = $(window).scrollTop();
	console.log(scrollValue);
	scrollValue > 500 ? $('#scrollTop').fadeIn() : $('#scrollTop').fadeOut();
});

$('#scrollTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
$('#scrollDown').click(function(){$('html,body').animate({scrollTop:$('#down').offset().top}, 800);});