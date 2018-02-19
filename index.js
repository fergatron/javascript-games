// import './src/canvas';

const FPS = 30;
let textX = 50;
let textY = 50;
const CANVAS_WIDTH = 100;
const CANVAS_HEIGHT = 100;

let gameCanvas = document.createElement('canvas');
let context;

gameCanvas.width = 480;
gameCanvas.height = 300;

context = gameCanvas.getContext('2d');

context.fillStyle = 'green';
context.fillRect(10, 10, CANVAS_WIDTH, CANVAS_HEIGHT);

document.body.appendChild(gameCanvas);

setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {
  textX += 1;
  textY += 1;
}

function draw() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.fillStyle = "#000";
  context.fillText("Sup Bro!", textX, textY);
}
