// import './src/canvas';

const FPS = 30;
let textX = 50;
let textY = 50;
const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 300;
const MOVEMENT = 6;

let canvasElement = document.createElement('canvas');
let canvas = canvasElement.getContext('2d');

canvasElement.width = CANVAS_WIDTH;
canvasElement.height = CANVAS_HEIGHT;

document.body.appendChild(canvasElement);

// player object
let player = {
  color: "#00A",
  x: 50,
  y: 50,
  width: 32,
  height: 32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
}

// functions
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

document.addEventListener("keydown", function(event) {
  const keyName = event.key;
  switch(keyName) {
    case "ArrowUp":
      player.y -= MOVEMENT;
      break;
    case "ArrowRight":
      player.x += MOVEMENT;
      break;
    case "ArrowDown":
      player.y += MOVEMENT;
      break;
    case "ArrowLeft":
      player.x -= MOVEMENT;
  }
});

function update() {
  player.x = player.x.clamp(0, CANVAS_WIDTH - player.width);
  player.y = player.y.clamp(0, CANVAS_HEIGHT - player.height);
}

function draw() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
}
