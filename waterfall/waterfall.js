var waterfall = document.getElementById("waterfall");	// 获取父级div
var allArr = getAllChildren(waterfall, "waterDrop");	// 获取到所有相对class的容器div
var screenWidth = document.body.clientWidth;	// 获取屏幕宽度
var children = waterfall.getElementsByTagName("*");	// 获取所有的标签
var num = Math.floor(screenWidth / children[0].offsetWidth);	// Math算法，小数转为整数

waterfall.style.cssText = 'width: ' + children[0].offsetWidth * num + 'px;margin: 0 auto';	// 固定每行摆放个数，确定外边距
getMinHeightOfCols(allArr, num);


console.log(screenWidth);
console.log('width: ' + children[0].offsetWidth * num + 'px;margin: 0 auto');

function getAllChildren(parent, boxName) {
	let children = parent.getElementsByTagName("*");
	let childrenArr = [];
	for (let i = 0; i < children.length; i++) {
		if (children[i].className == boxName) {
			childrenArr.push(children[i]);
		}
	}
	return childrenArr;
}

function getMinHeightOfCols(childrenArr, num) {
	// 创建数组，放置每一行的高度
	var onlyOneColsArr = [];
	for (let i = 0; i < childrenArr.length; i++) {
		if (i < num) {
			// 第一行存放个数num，将第一行每个box的高度遍历出来存放进新数组
			onlyOneColsArr[i] = childrenArr[i].offsetHeight;
		} else {
			// 大于第一行个数num的box
			var minHeightOfCols = Math.min.apply(null, onlyOneColsArr);	// Math.min.apply()获取数组中最小值
			var minHeightOfIndex = getMinIndex(onlyOneColsArr, minHeightOfCols);
			// 定义布局方式为绝对布局
			childrenArr[i].style.position = "absolute";
			// 得到下一行box应放置的高度
			childrenArr[i].style.top = minHeightOfCols + "px";
			// 得到下一行box应放置的位置
			childrenArr[i].style.left = childrenArr[minHeightOfIndex].offsetLeft + "px";
			// 计算新高度并替换
			onlyOneColsArr[minHeightOfIndex] += childrenArr[i].offsetHeight;
		}
	}
}
// 最小高度下标确定
function getMinIndex(onlyOneColsArr, min) {
	// 遍历高度数组
	for (let i in onlyOneColsArr) {
		// 如果高度不大于最小高度，返回i即该box下标
		if (onlyOneColsArr[i] <= min) {
			return i;
		}
	}
}