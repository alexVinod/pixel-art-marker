$(document).ready(function(){
	$("#sizePicker").submit(function makeGrid(grid){
		$("table tr").remove();
		let rows=$("#inputHeight").val();
		let cols=$("#inputWidth").val();

		for(let i=1;i<=rows;i++){
			$("#pixelCanvas").append("<tr></tr>");
			for(let j=1;j<=cols;j++) {
				$('tr:last').append("<td></td>");
				$("td").attr("class","cell");
			}
		}

		grid.preventDefault();

		$(".cell").css("background-color","#ffffff");
		$(".cell").click(function(){
			let color=$("#colorPicker").val();
			let color1=$(this).css("background-color");

			$(this).css("background-color",color1==="rgb(255, 255, 255)"? color :  "#ffffff");
		});
	});
});

