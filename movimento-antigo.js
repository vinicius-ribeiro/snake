var x = 0;
			function snake(){
			
			var canvasSnake = document.getElementById('canvas');
			ctx = canvasSnake.getContext("2d");			
			/*ctx.fillRect(0,0,10,10);
			ctx.fillRect(0,12,10,10);
			ctx.fillRect(0,24,10,10);*/
			setInterval(funcao,100);
			
			
			}//FIM FUNCAO SNAKE
			
	function funcao(){
		
		ctx.clearRect(0,0,500,500);
		ctx.fillStyle = "#555555";
	
		ctx.fillRect(x,0,10,10);
		x = x + 12;
		
		if(x>=500){
			x=0;		
		}
	}//FIM FUNÇÃO 