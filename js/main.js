// Application variables
var app_x = 0;
var app_y = 0;
var app_width = 600;
var app_height = 400;
var app = document.querySelector('canvas');
var brush = app.getContext('2d');
var can_paint = false;

// Palette area variables
var palette_x = app_x;
var palette_y = app_y;
var palette_width = app_width;
var palette_height = 50;
var palette_square_size = palette_height;
var palette_colors = ['red', 'green', 'blue'];

// Canvas area variables
var canvas_x = app_x;
var canvas_y = palette_height;
var canvas_width = app_width;
var canvas_height = app_height - palette_height;

/* Main */

showApp();

app.onmousemove = paint;
app.onmousedown = startPaint;
app.onmouseup = stopPaint;

/* Functions */

function drawSquare(x, y, size, color) {
  brush.fillStyle = color;
  brush.fillRect(x, y, size, size);
}

function drawFrame(x, y, width, height) {
  brush.strokeStyle = 'black';
  brush.strokeRect(x, y, width, height);
}

function showPalette() {
  for (i = 0; i < palette_colors.length; i++) {
    drawSquare((palette_square_size * i), palette_y, palette_square_size, palette_colors[i]);
  }
  drawFrame(palette_x, palette_y, palette_width, palette_height);
}

function showCanvas() {
  drawFrame(canvas_x, canvas_y, canvas_width, canvas_height);
}

function showApp() {
  showPalette();
  showCanvas();
}

function drawCircle(x, y, radius, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.arc(x, y, radius, 0, (2 * Math.PI));
  brush.fill();
}

function paint(event) {
  if (can_paint) {
    var x = event.pageX;
    var y = event.pageY;
    drawCircle(x, y, 10, 'green');
  }
}

function startPaint() {
  can_paint = true;
}

function stopPaint() {
  can_paint = false;
}