// Brushes bar variables.
var brushes_x = app_width / 2;
var brushes_y = app_y;
var brushes_width = app_width / 2;
var brushes_height = 50;
var brushes_square_size = brushes_height;
var brushes_sizes = [5, 10, 15, 5, 10, 15];
var brushes_selected = brushes_sizes[0];

// Draw the brushes bar.
function drawBrushesBar() {
  for (i = 0; i < brushes_sizes.length; i++) {
    var x = brushes_x + (i * brushes_square_size);

    drawFrame(x, brushes_y, brushes_square_size, brushes_square_size);

    var circle_x = x + brushes_square_size / 2 ;
    var circle_y = brushes_square_size / 2;
    var square_x = x + (brushes_square_size - brushes_sizes[i]) / 2;
    var sqaure_y = (brushes_square_size - brushes_sizes[i]) / 2;

    if (i < brushes_sizes.length / 2) {
      drawCircle(circle_x, circle_y, brushes_sizes[i], palette_selected_color);
    } else {
      drawSquare(square_x, sqaure_y, brushes_sizes[i], brushes_sizes[i]);
    }
  }
}

// // Check if the mouse is in the palette bar area.
// function onPaletteArea(y) {
//   return (y < palette_height);
// }

// // Select the color.
// function selectColor(event) {
//   var x = event.pageX - app.offsetLeft;
//   var y = event.pageY - app.offsetTop;

//   for (i = 0; i < palette_colors.length; i++) {
//     if ((x > i * palette_square_size) && (x < (i + 1) * palette_square_size) && (onPaletteArea(y))) {
//       palette_selected_color = palette_colors[i];
//       break;
//     }
//   }
// }