
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const ball = document.createElement("img");
ball.src = "https://cdn3.iconfinder.com/data/icons/balls-icons/512/cricket-256.png";
const mybackgroundimg = document.createElement("img");
mybackgroundimg.src = "https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png";



function abouttheGame() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(mybackgroundimg, 0, 0);
	context.drawImage(ball, food.x, food.y, 20, 20);

};




const size = 30;
let score = 0;



let food = {
	x: Math.floor((Math.random() * 17 + 1)) * size,
	y: Math.floor((Math.random() * 15 + 2)) * size,

}; 

function drawcontext(context) {
	fillStyle = "red";
	font = "15px Verdana";
	fillText = ("Score" + " " + score, canvas.width - 70, 20);
	return context;
};



let snake = [];
snake[0] = {
	x: 9 * size,
	y: 10 * size,

};

let snakexDelta = snake[0].x;
let snakeyDelta = snake[0].y;



function drawScore() {
	drawcontext(context.fillStyle = "black", context.font = "15px Verdana",
		context.fillText("Score" + " " + score, canvas.width - 70, 20));
};

function snakedraw() {
	for (let i = 0; i < snake.length; i++) {
		drawcontext(context.fillStyle = i == 0 ? "black" : "red",
			context.fillRect(snake[i].x, snake[i].y, 20, 20))
	};

};

function foodEat() {
	if (snakexDelta == food.x && snakeyDelta == food.y) {

		food = {
			x: Math.floor((Math.random() * 17 + 2)) * size,
			y: Math.floor((Math.random() * 15 + 3)) * size,
		}
		score++;
	} else
		snake.pop();

};


function eatTail(head, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (head.x === arr[i].x && head.y === arr[i].y) {
			clearInterval(game);
			drawcontext(context.fillStyle = "white", context.font = "60px Verdana", context.fillText("Game over", 120, 300));

		}

	}

};


document.addEventListener("keydown", direction);
let dir;




function direction(event) {
	if (event.keyCode === 37 && dir !== "right")
		dir = "left";
	else if (event.keyCode === 38 && dir !== "down")
		dir = "up";
	else if (event.keyCode === 39 && dir !== "left")
		dir = "right";
	else if (event.keyCode === 40 && dir !== "up")
		dir = "down";

};

function directionChange(dir) {

	if (dir === "left") snakexDelta -= size;
	if (dir === "right") snakexDelta += size;
	if (dir === "up") snakeyDelta -= size;
	if (dir === "down") snakeyDelta += size;

	return dir;
};


function insidetheWall() {


	if (snakexDelta < 0) {
		snakexDelta = canvas.width - size;
	} else if (snakexDelta >= canvas.width) {
		snakexDelta = 0;
	} else if (snakeyDelta < 0) {
		snakeyDelta = canvas.height - size;
	} else if (snakeyDelta >= canvas.height) {
		snakeyDelta = 0;
	};



};


function whensnakehits() {
	if (snakexDelta < size || snakexDelta > size * 18
		|| snakeyDelta < size || snakeyDelta > size * 17) {
		clearInterval(game);
		drawcontext(context.fillStyle = "white", context.font = "60px Verdana", context.fillText("Game over", 120, 300));
	};

}



function checkboxoptions(chbox) {
	chbox = document.getElementById("myCheck");
	const box = setInterval(optionwithcheckbox);
	function optionwithcheckbox() {
		if (chbox.checked) {
			whensnakehits();
		}
		else {
			insidetheWall();
		}
	};
	return chbox;
};




function drawGame() {
	let shead = {
		x: snakexDelta,
		y: snakeyDelta
	};


	checkboxoptions();
	abouttheGame();
	foodEat();
	directionChange(dir);
	eatTail(shead, snake);
	drawScore();
	snake.unshift(shead);
	snakedraw();
};







document.getElementById("theGameStart").addEventListener("click", thegamestart);
let isGameStarted = false

function thegamestart() 
{
	if (!isGameStarted) {
		game = setInterval(drawGame, 100);
	}
	isGameStarted = true
};





document.getElementById("theGameReset").addEventListener("click", theGameReset);
function theGameReset() {
 location.reload();
};

document.getElementById("theGamePause").addEventListener("click", myGamePause);
function myGamePause() {
	clearInterval(game);
	isGameStarted = false
};

