const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const ball = document.createElement("img");
ball.src = "https://cdn3.iconfinder.com/data/icons/balls-icons/512/cricket-256.png";
const backImg = document.createElement("img");
backImg.src = "https://res.cloudinary.com/practicaldev/image/fetch/s--3U3ZUPw1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i0.wp.com/codeheir.com/wp-content/uploads/2021/05/image.png%3Fresize%3D630%252C631%26ssl%3D1";

let xDelta = 32;
let YDelta = 32;


let food = {
	x: Math.floor((Math.random() * 17 + 1)) * xDelta,
	y: Math.floor((Math.random() * 15 + 3)) * YDelta,
};

let snake = [];
snake[0] = {
	x: 9 * xDelta,
	y: 10 * YDelta
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if(event.keyCode == 37  )
		dir = "left";
	else if(event.keyCode == 38 )
		dir = "up";
	else if(event.keyCode == 39 )
		dir = "right";
	else if(event.keyCode == 40 )
		dir = "down";
}

function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y)
			clearInterval(game);
	}
}

function draw() {
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(backImg,0,0);
	context.drawImage(ball, food.x, food.y,20,20);

  for(let i = 0; i < snake.length; i++) {
	    context.fillStyle = i == 0 ? "black" : "red";
		context.fillRect(snake[i].x, snake[i].y, 20, 20);
	}

 let snakexDelta= snake[0].x;
 let snakeyDelta = snake[0].y;


	if(snakexDelta == food.x && snakeyDelta == food.y) {
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * xDelta,
			y: Math.floor((Math.random() * 15 + 3)) * YDelta,
		};
	} else
		snake.pop();

	

	if(dir == "left") snakexDelta -= xDelta;
	if(dir == "right") snakexDelta += xDelta;
	if(dir == "up") snakeyDelta -= YDelta;
	if(dir == "down") snakeyDelta += YDelta;

	let shead = {
		x : snakexDelta,
    	y : snakeyDelta
	};

	eatTail(shead, snake);

	snake.unshift(shead);
}

let game = setInterval(draw,100);