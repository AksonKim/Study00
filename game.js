function resize(){
	//var width = document.body.clientWidth;
	canvas_width =  document.getElementById("chart-container").clientWidth;
	canvas_height = document.getElementById("chart-container").clientHeight;
	console.log("canvas_height="+canvas_height);
	if (canvas_height >= 350){
		canvas_height = 350;
	}
	
	document.getElementById("canvas").width = canvas_width;
	document.getElementById("canvas").height = canvas_height;

	canvasWidth = canvas.clientWidth;
	canvasHeight = canvas.clientHeight;

	configPlotSettings();
}

window.onresize = function(){
	resize();
}

window.onload = function(){
	resize();
}
