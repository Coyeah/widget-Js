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
	console.log("now_month : " + now_month + " | now_year : " + now_year);
	// for (var i = 0; i < firstDay; i++) {
	// 	str += "<li></li>";
	// }
	for (var i = (1 - firstDay); i <= (42 - firstDay); i++) {
		if (i <= 0) {
			classList = "class='lightgrey'";
			str += "<li " + classList + ">" + (i + 31) + "</li>";
			continue;
		} else if (i == now_day && now_year == now_date.getFullYear() && now_month == now_date.getMonth()) {
			classList = "class='red redbox'";
		} else if (i > totalDay) {
			classList = "class='lightgrey'";
			str += "<li " + classList + ">" + (i - totalDay) + "</li>";
			continue;
		} else {
			classList = "class='darkgrey'";
		}
		str += "<li " + classList + ">" + i + "</li>";
	}
	// prev & next
	var month_prev;
	if (now_month != 0) {
		month_prev = now_month - 1
	} else {
		month_prev = 11;
	}
	var month_next;
	if (now_month != 11) {
		month_next = now_month + 1;
	} else {
		month_next = 0;
	}
	var prev = "<span id='prev' onclick=\"monthChange('prev')\">" + month_name[month_prev] + "</span>";
	var next = "<span id='next' onclick=\"monthChange('next')\">" + month_name[month_next] + "</span>";
	// draw
	holder.innerHTML = str;
	title_month.innerHTML = prev + month_name[now_month] + next;
	title_year.innerHTML = now_year;
}
// prev&next月份选择
function monthChange(tag) {
	if (tag == "prev") {
		if (now_month != 0) {
			now_month = now_month - 1;
		} else {
			now_year -= 1;
			now_month = 11;
		}
	} else if (tag = "next") {
		if (now_month != 11) {
			now_month = now_month + 1;
		} else {
			now_year += 1;
			now_month = 0;
		}
	}
	drawDate();
}
// start
drawDate();