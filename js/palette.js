// Palette bar variables.
var palette_x = app_x;
var palette_y = app_y;
var palette_width = app_width / 2;
var palette_height = 50;
var palette_square_size = palette_height;
var palette_colors = ['red', 'green', 'blue', 'orange', 'black', 'grey'];
var palette_selected_color = palette_colors[0];

// Draw the palette bar.
function drawPaletteBar() {
  for (i = 0; i < palette_colors.length; i++) {
    var x = i * palette_square_size;

    drawSquare(x, palette_y, palette_square_size, palette_colors[i]);
  }

  drawFrame(palette_x, palette_y, palette_width, palette_height);
}

// Check if the mouse is in the palette bar area.
function onPaletteArea(y) {
  return (y < palette_height);
}

// Select the color.
function selectColor(event) {
  var x = event.pageX - app.offsetLeft;
  var y = event.pageY - app.offsetTop;

  for (i = 0; i < palette_colors.length; i++) {
    var color_position = (x > i * palette_square_size) && (x < (i + 1) * palette_square_size);

    if (color_position && onPaletteArea(y)) {
      palette_selected_color = palette_colors[i];
      break;
    }
  }
}