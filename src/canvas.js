let gameCanvas = document.createElement('canvas');
let context;

gameCanvas.width = 480;
gameCanvas.height = 300;

context = gameCanvas.getContext('2d');

context.fillStyle = 'green';
context.fillRect(10, 10, 100, 100);

document.body.appendChild(gameCanvas);
