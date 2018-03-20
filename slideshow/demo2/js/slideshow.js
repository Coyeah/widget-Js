var imgLocator = 0;
var time = 2000;
var li_width = 800;
var imgTotal = 5;
// init
var target = document.getElementById("target");
var timeVal;
target.style.width = (imgTotal + 2) * 800 + 'px';

imgNext();
timeVal = setInterval(() => { imgAutoRound() }, 3000);

function imgAutoRound() {
	if (imgLocator >= imgTotal + 1) {
		imgHeader();
	} else {
		imgNext();
	}
}

function imgNext() {
	target.className = 'imgStart';
	imgLocator += 1;
	target.style.left = '-' + li_width * imgLocator + 'px';
	console.log("imgLocator" + imgLocator);
}

function imgPrev() {
	target.className = 'imgStart';
	imgLocator -= 1;
	target.style.left = '-' + li_width * imgLocator + 'px';
	console.log("imgLocator" + imgLocator);
}

function imgHeader() {
	target.className = '';
	imgLocator = 1;
	target.style.left = '-' + li_width * imgLocator + 'px';
}

function imgFooter() {
	target.className = '';
	imgLocator = imgTotal;
	target.style.left = '-' + li_width * imgLocator + 'px';
}

function clickPrev() {
	clearInterval(timeVal);
	if (imgLocator == 1) {
		imgPrev();
		setTimeout(() => { imgFooter() },time);
	} else {
		imgPrev();
	}
}

function clickNext() {
	clearInterval(timeVal);
	if (imgLocator == imgTotal) {
		imgNext();
		setTimeout(() => { imgHeader() },time);
	} else {
		imgNext();
	}
}


function myStopFunction() {
	clearInterval(timeVal);
}