
// var brush_size = 10;
// var enable_paint = false;

// /* Main */

runApp();

// app.onmousemove = paint;
// app.onmousedown = startPaint;
// app.onmouseup = stopPaint;
app.onclick = selectColor;

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

// Run the app.
function runApp() {
  drawPaletteBar();
  drawBrushesBar();
  drawCanvas();
}

// function startPaint() {
//   enable_paint = true;
// }

// function stopPaint() {
//   enable_paint = false;
// }

// function onCanvasArea(y) {
//   return (y > palette_height);
// }

// function paint(event) {
//   var x = event.pageX - app.offsetLeft;
//   var y = event.pageY - app.offsetTop;

//   if (enable_paint && onCanvasArea(y)) {
//     drawCircle(x, y, brush_size, palette_selected_color);
//   }
// }