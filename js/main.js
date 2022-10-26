// 
var enable_paint = false;

// Draw a square.
function drawSquare(x, y, size, color) {
  brush.fillStyle = color;
  brush.fillRect(x, y, size, size);
}

// Draw a circle.
function drawCircle(x, y, radius, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.arc(x, y, radius, 0, (2 * Math.PI));
  brush.fill();
}

// Draw a rectangle frame.
function drawFrame(x, y, width, height) {
  brush.strokeStyle = 'black';
  brush.strokeRect(x, y, width, height);
}

// Enable the paint.
function startPaint() {
  enable_paint = true;
}

// Disable the paint.
function stopPaint() {
  enable_paint = false;
}

// Start the paint.
function paint(event) {
  var x = event.pageX - app.offsetLeft;
  var y = event.pageY - app.offsetTop;

  if (!enable_paint || !onCanvasArea(y)) return;

  if (brush_selected_type == 'circle') {
    drawCircle(x, y, brush_selected_size, palette_selected_color);
  }

  if (brush_selected_type == 'square') {
    drawSquare(x, y, brush_selected_size, palette_selected_color);
  }
}

// Select the color and the brush type.
function selectOptions(event) {
  selectBrush(event);
  selectColor(event);
}

// Run the app.
function runApp() {
  drawPaletteBar();
  drawBrushBar();
  drawCanvas();
}

// App events.
app.onmousedown = startPaint;
app.onmouseup = stopPaint;
app.onmousemove = paint;
app.onclick = selectOptions;

// Run the app.
runApp();