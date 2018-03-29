var target = document.getElementById("target")
var targetList = target.getElementsByTagName('li');
var point = document.getElementById("point");
var pointList = point.getElementsByTagName('li');
var li_width = 600;
var picPosition = 1;
var imgTotal = targetList.length;

addPoint();
picClone();
console.log(targetList);

function addPoint () {
	for (let i = 0; i < imgTotal; i++) {
		let li = document.createElement("li");
		point.appendChild(li);
	}
	target.style.left = '-' + picPosition * li_width + 'px';
	pointList[picPosition - 1].classList.add("pitchOn");
}

function picClone() {
	let lastPic = targetList[imgTotal - 1].cloneNode(true);
	let firstPic = targetList[0].cloneNode(true);
	target.insertBefore(firstPic, null);
	target.insertBefore(lastPic, target.firstChild);
}

function slide(orientation) {
	pointList[picPosition - 1].classList.remove("pitchOn");
	picPosition += orientation;
	if (picPosition == imgTotal + 1) {
		picPosition = 0;
		pointList[picPosition].classList.add("pitchOn");
		target.style.transition="none";
		target.style.left = '-' + picPosition * li_width + 'px';
		picPosition += orientation;
		timeOut();
	} else if (picPosition == 0) {
		picPosition = imgTotal + 1;
		pointList[imgTotal - 1].classList.add("pitchOn");
		target.style.transition="none";
		target.style.left = '-' + picPosition * li_width + 'px';
		picPosition += orientation;
		timeOut();
	} else {
		pointList[picPosition - 1].classList.add("pitchOn");
		target.style.left = '-' + picPosition * li_width + 'px';
	}
	console.log(picPosition + "  " + li_width);
}

function timeOut() {
	setTimeout(function () {
		target.style.transition = "all 1s";
		target.style.left = '-' + picPosition * li_width +'px';
	},20);
}