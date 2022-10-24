// Application variables
var app_x = 0;
var app_y = 0;
var app_width = 600;
var app_height = 400;
var app = document.querySelector('canvas');
var brush = app.getContext('2d');
var brush_size = 10;
var enable_paint = false;

// Palette area variables
var palette_x = app_x;
var palette_y = app_y;
var palette_width = app_width;
var palette_height = 50;
var palette_square_size = palette_height;
var palette_colors = ['red', 'green', 'blue'];
var palette_selected_color = palette_colors[0];

// Canvas area variables
var canvas_x = app_x;
var canvas_y = palette_height;
var canvas_width = app_width;
var canvas_height = app_height - palette_height;

/* Main */

runApp();

app.onmousemove = paint;
app.onmousedown = startPaint;
app.onmouseup = stopPaint;
app.onclick = chooseColor;

/* Functions */

function drawSquare(x, y, size, color) {
  brush.fillStyle = color;
  brush.fillRect(x, y, size, size);
}

function drawCircle(x, y, radius, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.arc(x, y, radius, 0, (2 * Math.PI));
  brush.fill();
}

function drawFrame(x, y, width, height) {
  brush.strokeStyle = 'black';
  brush.strokeRect(x, y, width, height);
}

function drawPalette() {
  for (i = 0; i < palette_colors.length; i++) {
    drawSquare((palette_square_size * i), palette_y, palette_square_size, palette_colors[i]);
  }

  drawFrame(palette_x, palette_y, palette_width, palette_height);
}

function drawCanvas() {
  drawFrame(canvas_x, canvas_y, canvas_width, canvas_height);
}

function runApp() {
  drawPalette();
  drawCanvas();
}

function startPaint() {
  enable_paint = true;
}

function stopPaint() {
  enable_paint = false;
}

function onCanvasArea(y) {
  return (y > palette_height);
}

function onPaletteArea(y) {
  return (y < palette_height);
}

function chooseColor(event) {
  var x = event.pageX - app.offsetLeft;
  var y = event.pageY - app.offsetTop;

  for (i = 0; i < palette_colors.length; i++) {
    if ((x > i * palette_square_size) && (x < (i + 1) * palette_square_size) && (onPaletteArea(y))) {
      palette_selected_color = palette_colors[i];
      break;
    }
  }
}

function paint(event) {
  var x = event.pageX - app.offsetLeft;
  var y = event.pageY - app.offsetTop;

  if (enable_paint && onCanvasArea(y)) {
    drawCircle(x, y, brush_size, palette_selected_color);
  }
}