var imgLocator = 0;		// 图片定位器
var myVar;

$(document).ready(function() {
	console.log("imgLocator : " + imgLocator);
	// myVar = setInterval(function(){imgMoreLeft()},3000);
	$("#prev").click(function() {
		if (imgLocator > 0) {
			imgMoreRight();
		}
	});
	$("#next").click(function() {
		if (imgLocator < 3) {
			imgMoreLeft();
		}
	});
});

function imgMoreLeft() {
	imgLocator += 1;
	console.log("imgLocator : " + imgLocator);
	$("#target").animate({left:"-=400px"},1000,'swing');
	if (imgLocator == 3) {
		clearInterval(myVar);
	}
}

function imgMoreRight() {
	imgLocator -= 1;
	console.log("imgLocator : " + imgLocator);
	$("#target").animate({left:"+=400px"},1000,'swing');
	if (imgLocator == 3) {
		clearInterval(myVar);
	}
}