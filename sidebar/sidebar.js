var btnBar = document.getElementById("bar-btn");
var sidebar = document.getElementById("sidebar");
var content = document.getElementById("content");

var close_str = "<img src='./images/close.png' />";
var more_str = "<img src='./images/more.png' />";

btnBar.innerHTML = more_str;
var isClose = false;

btnBar.onclick = function () {
	if (isClose) {
		btnBar.innerHTML = more_str;
		sidebar.style.left = "-200px";
		content.style.left = "0px";
	} else {
		btnBar.innerHTML = close_str;
		sidebar.style.left = "0px";
		content.style.left = "200px";
	}
	isClose = !isClose;
}