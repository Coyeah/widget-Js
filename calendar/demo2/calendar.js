// 初始变量设置
var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
var month_name = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];
// DOM变量
var title_year = document.getElementById("year");
var title_month = document.getElementById("month");
var holder = document.getElementById("days");
// Date对象
var now_date = new Date();
var now_year = now_date.getFullYear();
var now_month = now_date.getMonth();
var now_day = now_date.getDate();
console.log("now_year : " + now_year + "\nnow_month : " + now_month + "\nnow_day : " + now_day);
// function list
// 获取某年某月第一天是星期几
function dayStart(month, year) {
	var tmpDate = new Date(year, month, 1);
	return (tmpDate.getDay());
}
// 计算某年是否为闰年，返回某月总天数
function daysMonth(month, year) {
	var tmp = year % 4;
	if (tmp == 0) {
		return (month_olympic[month]);
	} else {
		return (month_normal[month]);
	}
}
// 绘制日历
function drawDate() {
	var str = "";
	var totalDay = daysMonth(now_month, now_year);
	var firstDay = dayStart(now_month, now_year);
	var classList;
	console.log("totalDay : " + totalDay + " | firstDay : " + firstDay);
	for (var i = 0; i < firstDay; i++) {
		str += "<li></li>";
	}
	for (var i = 1; i <= totalDay; i++) {
		if (i < now_day && now_year == now_date.getFullYear() && now_month == now_date.getMonth() || now_year < now_date.getFullYear() || (now_year == now_date.getFullYear() && now_month < now_date.getMonth())) {
			classList = "class='lightgrey'";
		} else if (i == now_day && now_year == now_date.getFullYear() && now_month == now_date.getMonth()) {
			classList = "class='green greenbox'";
		}  else {
			classList = "class='darkgrey'";
		}
		str += "<li " + classList + ">" + i + "</li>";
	}
	// draw
	holder.innerHTML = str;
	title_month.innerHTML = month_name[now_month];
	title_year.innerHTML = now_year;
}
// start
drawDate();
