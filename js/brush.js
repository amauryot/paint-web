// Brushes bar variables.
var brush_x = app_width / 2;
var brush_y = app_y;
var brush_width = app_width / 2;
var brush_height = 50;
var brush_square_size = brush_height;
var brush_sizes = [5, 10, 15, 10, 20, 30];
var brush_types = ['circle', 'square'];
var brush_selected_size = brush_sizes[0];
var brush_selected_type = brush_types[0];

// Draw the brush bar.
function drawBrushBar() {
  for (i = 0; i < brush_sizes.length; i++) {
    var x = brush_x + (i * brush_square_size);

    drawFrame(x, brush_y, brush_square_size, brush_square_size);

    var circle_x = x + brush_square_size / 2;
    var circle_y = brush_square_size / 2;
    var square_x = x + (brush_square_size - brush_sizes[i]) / 2;
    var square_y = (brush_square_size - brush_sizes[i]) / 2;

    if (i < brush_sizes.length / 2) {
      drawCircle(circle_x, circle_y, brush_sizes[i], palette_selected_color);
    } else {
      drawSquare(square_x, square_y, brush_sizes[i], brush_sizes[i]);
    }
  }
}

// Check if the mouse is on the brush bar area.
function onBrushArea(x, y) {
  return (x > brush_x) && (x < brush_x + brush_width) && (y < brush_height);
}

// Select the brush.
function selectBrush(event) {
  var x = event.pageX - app.offsetLeft;
  var y = event.pageY - app.offsetTop;

  if (!onBrushArea(x, y)) return;

  for (i = 0; i < brush_sizes.length; i++) {
    var brush_position = (x > brush_x + i * brush_square_size) && (x < brush_x + (i + 1) * brush_square_size);

    if (!brush_position) continue;

    brush_selected_size = brush_sizes[i];

    if (i < brush_sizes.length / 2) {
      brush_selected_type = brush_types[0];
    } else {
      brush_selected_type = brush_types[1];
    }

    break;
  }
}
