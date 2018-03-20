var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
var month_name = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];

var now_date = new Date();
var now_year = now_date.getFullYear();
var now_month = now_date.getMonth();
// var now_month = 10;
var now_day = now_date.getDate();
// var now_day = 30;
var now_week = now_date.getDay();
// var now_week = 6;

// start?
var now_month_type = isLeapYear(now_year);
var temp = now_day + (6 - now_week);
var checkTarget = now_day;
var checkTarget_month = now_month;
var checkTarget_year = now_year;

drowCalendar();

// showOff

// function list
function isLeapYear(year) {
	if(year % 4 == 0) {
		return month_olympic;
	} else {
		return month_normal;
	}
}

function monthLast(month, monthList) {
	return monthList[month];
}

function monthChange(tag) {
	if ('left' == tag) {
		if (now_month != 0) {
			now_month = now_month - 1;
		} else {
			now_month = 11;
			now_year = now_year - 1;
		}
		now_month_type = isLeapYear(now_year);
		while (temp > 0) {
			temp = temp - 7;
		}
		if (now_month == 0) {
			temp = temp + 31;
		} else {
			temp = temp + monthLast(now_month, now_month_type);
		}
		$("#day").empty();
		drowCalendar();
	} else if ('right' == tag) {
		if (now_month != 11) {
			now_month = now_month + 1;
		} else {
			now_month = 0;
			now_year = now_year + 1;
		}
		now_month_type = isLeapYear(now_year);
		while (temp <= now_month_type[now_month]) {
			temp = temp + 7;
		}
		if (now_month == 0) {
			temp = temp - 31;
		} else {
			temp = temp - monthLast(now_month - 1, now_month_type);
		}
		$("#day").empty();
		drowCalendar();
	}
}

function drowCalendar() {
	for (var j = 1; j < 7; j++) {
		var count = j * 7;
		document.getElementById("year").innerHTML=now_year;
		document.getElementById("month").innerHTML=month_name[now_month];
		addRow(count, temp, now_month_type[now_month]);
	}
	if (now_month == now_date.getMonth()) {
		blockNow(now_day);
	}
	if (checkTarget_month == now_month && checkTarget_year == now_year) {
		blockLight(checkTarget);
	}
}

function addRow(count, temp, monthLastDay) {
	var arr = new Array();
	if (count <= temp) {
		while (temp > count) {
			temp = temp - 7;
		}
	} else {
		while (temp < count && count - temp >= 7) {
			temp = temp + 7;
		}
	}
	for (var i = 0; i < 7; i++) {
		// if (temp <= 0) {
		// 	if (now_month != 0) {
		// 		temp = monthLast(now_month - 1, now_month_type);
		// 	} else {
		// 		temp = 31;
		// 	}
		// }
		// if (temp <= count && temp > monthLastDay) {
		// 	arr[6 - i] = temp - monthLastDay;
		// } else {
		// 	arr[6 - i] = temp;
		// }
		arr[6 - i] = temp;
		temp = temp - 1;
	}
	// #add
	// ulItem = "<ul><li>" + arr[0] + "</li><li>" + arr[1] + "</li><li>" + arr[2] + "</li><li>" + arr[3] + "</li><li>" + arr[4] + "</li><li>" + arr[5] + "</li><li>" + arr[6] + "</li></ul>";
	// $("#day").append(ulItem);
	var item = "<ul>"
	for (var i = 0; i < 7; i++) {
		if (arr[i] > monthLastDay) {
			item = item + "<li><span class=\"lightGray\">" + (arr[i] - monthLastDay); 
		} else if (arr[i] <= 0) {
			if (now_month == 0) {
				item = item + "<li><span class=\"lightGray\">" + (arr[i] + 31);
			} else {
				item = item + "<li><span class=\"lightGray\">" + (arr[i] + monthLast(now_month - 1, now_month_type));
			}
		} else {
			item = item + "<li><span id=\"" + arr[i] + "\" onmouseover=\"mOverLight(" + arr[i] + ")\" onmouseout=\"mOutDark(" + arr[i] + ")\" onclick=\"blockCheck(" + arr[i] + ")\">" + arr[i];
		}
		item = item + "</span></li>";
	}
	item = item + "</ul>";
	$("#day").append(item);
}

function mOverLight(number) {
	var target = $("#" + number + "");
	target.addClass("border");
}

function mOutDark(number) {
	var target = $("#" + number + "");
	target.removeClass("border");
}

function blockLight(number) {
	var target = $("#" + number + "");
	target.addClass("check");
}

function blockCheck(number) {
	var target = $("#" + number + "");
	if (!(checkTarget == now_day && checkTarget_month == now_month && checkTarget_year == now_year) || !target.is('.check')) {
		var unTarget = $("#" + checkTarget + "");
		unTarget.removeClass("check");
		checkTarget = number;
		checkTarget_month = now_month;
		checkTarget_year = now_year;
		
	}
	target.addClass("check");
}

function blockNow(number) {
	var target = $("#" + number + "");
	target.addClass("now");
}