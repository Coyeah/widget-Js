var block = document.getElementById('dragAndDrop');
var mouseDownX, mouseDownY, initX, initY, flag = false; 

block.onmousedown  = function(e) {
	console.log('mousedown');
    //鼠标按下时的鼠标所在的X，Y坐标 
	mouseDownX = e.pageX;
	mouseDownY = e.pageY;
	console.log(mouseDownX + ' | ' + mouseDownY);

    //初始位置的X，Y 坐标  
    initX = block.offsetLeft;  
    initY = block.offsetTop; 
	console.log(initX + ' | ' + initY);

	//表示鼠标已按下  
	flag = true;  
}

block.onmousemove  = function(e) {
	if (flag) {
		console.log('mousemover');
		var mouseMoveX = e.pageX, mouseMoveY = e.pageY;
		console.log(mouseMoveX + ' | ' + mouseMoveY);
		this.style.left = parseInt(mouseMoveX) - parseInt(mouseDownX) + parseInt(initX) + "px";  
		this.style.top = parseInt(mouseMoveY) - parseInt(mouseDownY) + parseInt(initY) + "px"; 
	}
}

block.onmouseup = function() {
	console.log('mouseup');
	flag = false;
}