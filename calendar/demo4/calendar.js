var commYear = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
var monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var weekName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

var title_year = document.getElementById("year");
var title_month = document.getElementById("month");
var holder = document.getElementById("days");
var details =  document.getElementById("dateDetails");
var curtain = document.getElementById("curtain");

var date = new Date();
var this_year = date.getFullYear();
var this_month = date.getMonth();
var this_weekDay = date.getDay();
var this_day = date.getDate();

drawDate();

// function list
// 获取某年某月第一天是星期几
function dayStart(year, month) {
	var tmpDate = new Date(year, month, 1);
	return (tmpDate.getDay());
}

// 计算某年是否为闰年，返回某月总天数
function daysMonth(year, month) {
	if (year % 4 == 0) {
		// 闰年
		return (leapYear[month]);
	} else {
		// 平年
		return (commYear[month]);
	}
}

// 绘制日历
function drawDate() {
	detailsBack();

	let totalDay = daysMonth(this_year, this_month);
	let weekClass = dayStart(this_year, this_month);
	let str = "<ul>";
	let classList = "";
	for (let i = 0; i < totalDay; i++) {
		let id = this_year + "-" + (this_month + 1) + "-" + (i + 1);
		// console.log(id);
		str += "<li id='" + id + "' class='day " + weekName[weekClass] + "' onclick='dateDetails(\""+ id + "\")'><span class='day-num'>" + (i + 1) + "</span><span class='day-name'>" + weekName[weekClass] + "</span></li>"
		if (weekClass == 6) {
			weekClass = 0;
		} else {
			weekClass++;
		}
	}
	str += "</ul>";
	holder.innerHTML = str;
	title_year.innerHTML = this_year;
	title_month.innerHTML = monthName[this_month];
}

function dateDetails(key) {
	// console.log(id);
	curtain.style.display = "inline";
	details.style.height = "60%";
	console.log("this is id!");
	details.innerHTML = "<h1>" + key + "</h1>";
}

function detailsBack() {
	curtain.style.display = "none";
	details.style.height = "0px";
}

function dateChange(key) {
	console.log(key);
	switch(key) {
	case "prev": {
		if (this_month == 0) {
			this_month = 11;
			this_year--;
		} else {
			this_month--;
		}
		drawDate();
		break;
	}
	case "next": {
		if (this_month == 11) {
			this_month = 0;
			this_year++;
		} else {
			this_month++;
		}
		drawDate();
		break;
	}
	}
}