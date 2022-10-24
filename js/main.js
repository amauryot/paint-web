var app_x = 0;
var app_y = 0;
var app_width = 600;
var app_height = 400;
var app = document.querySelector('canvas');
var brush = app.getContext('2d');

var palette_x = 0;
var palette_y = 0;
var palette_size = 50;
var palette_colors = ['red', 'green', 'blue'];

drawPalette();
drawCanvas();

function drawSquare(x, y, size, color) {
  brush.fillStyle = color;
  brush.fillRect(x, y, size, size);
}

function drawFrame(x, y, width, height) {
  brush.strokeStyle = 'black';
  brush.strokeRect(x, y, width, height);
}

function drawPalette() {
  for (i = 0; i < palette_colors.length; i++) {
    drawSquare((palette_size * i), app_y, palette_size, palette_colors[i]);
  }
  drawFrame(app_x, app_y, app_width, palette_size);
}

function drawCanvas() {
  drawFrame(app_x, palette_size, app_width, app_height - palette_size);
}