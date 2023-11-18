const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const div = document.querySelector("bt")
const controls = document.querySelector("button");
const controls1 = document.querySelector("button1");
const ball = document.createElement("img");
ball.src = "https://cdn3.iconfinder.com/data/icons/balls-icons/512/cricket-256.png";
const backImg = document.createElement("img");
backImg.src = "https://res.cloudinary.com/practicaldev/image/fetch/s--3U3ZUPw1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i0.wp.com/codeheir.com/wp-content/uploads/2021/05/image.png%3Fresize%3D630%252C631%26ssl%3D1";





let size = 32;
let score = 0;

let food = {
	x: Math.floor((Math.random() * 17 + 1)) * size,
	y: Math.floor((Math.random() * 15 + 3)) * size,
};

let snake = [];
snake[0] = {
	x: 9 * size,
	y: 10 * size,
	
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if(event.keyCode == 37  &&  dir !== "right")
		dir = "left";
	else if(event.keyCode == 38 &&  dir !== "down" )
		dir = "up";
	else if(event.keyCode == 39 &&  dir !== "left" )
		dir = "right";
	else if(event.keyCode == 40 &&  dir !== "up")
		dir = "down";

		
}


 function directionchange(){
	if(dir == "left") snakexDelta -= size;
	if(dir == "right") snakexDelta += size;
	if(dir == "up") snakeyDelta -= size;
	if(dir == "down") snakeyDelta += size;
 }






function gameOverr(head,arr){
	for(let i = 0; i < arr.length; i++) {
		if(head.x === arr[i].x && head.y === arr[i].y){
         clearInterval(game);
		context.fillStyle = "orange";
	context.font = "60px Verdana";
		context.fillText("Game over" ,120 ,300);
	} 

}

	} 
    
	
	function drawScore(){
	
		context.fillStyle = "black";
		context.font = "15px Verdana";
			context.fillText("Score" + " " + score , canvas.width-70,20);
	}
	

	let snakexDelta= snake[0].x;
	let snakeyDelta = snake[0].y;




	
 
	 
 function snakedraw(){
	for(let i = 0; i < snake.length; i++) {
		context.fillStyle = i == 0 ? "black" : "red";
		context.fillRect(snake[i].x, snake[i].y, 20, 20);
 };
	
 };



 function myOption(){
	const option = document.getElementById("button1");
	const ddt = setInterval(wallstop,10);
	function wallstop(){
		if(snakexDelta < size || snakexDelta > size * 17
			|| snakeyDelta <  size || snakeyDelta > size * 17){
				
			clearInterval(game);
							
			context.fillStyle = "orange";
			context.font = "60px Verdana";
			context.fillText("Game over" ,120 ,300)

	 }
			
	 }
			
	 };
 


		



function draw() {
	
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(backImg,0,0);
	context.drawImage(ball, food.x, food.y,20,20);
	
	
	if(snakexDelta == food.x && snakeyDelta == food.y) {
		
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * size,
			y: Math.floor((Math.random() * 15 + 3)) * size,}
				score ++;
				
	} else
		snake.pop();
		


		 
if (snakexDelta < 0){
	snakexDelta = canvas.width - size;
} else if (snakexDelta >= canvas.width){
	snakexDelta = 0;
}else if (snakeyDelta < 0){
	snakeyDelta = canvas.height - size;
} else if (snakeyDelta >= canvas.height){
	snakeyDelta = 0;
};
			
	
 
	
	
let shead = {
  x : snakexDelta,
  y : snakeyDelta
};

	

    directionchange();
		
	gameOverr(shead, snake);

	drawScore();

	snake.unshift(shead);
	snakedraw();
	
}


function myStart(){
	game = setInterval(draw,100);
}




function myPause(){
	clearInterval(game)
}



