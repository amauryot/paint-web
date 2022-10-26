// Canvas area variables
var canvas_x = app_x;
var canvas_y = palette_height;
var canvas_width = app_width;
var canvas_height = app_height - palette_height;

// Draw the canvas area.
function drawCanvas() {
  drawFrame(canvas_x, canvas_y, canvas_width, canvas_height);
}

// Check if the mouse is on the canvas area.
function onCanvasArea(y) {
  return (y > palette_height);
}