  var cols, rows, current = [], previous = [],
    damping = 0.99;

  function mouseDragged() {
    current[mouseX][mouseY] = 255
  }

  function setup() {
    pixelDensity(1)
    createCanvas(800, 800)
    cols = width
    rows = height
    
    for (var i = 0; i < cols; i++) {
      current[i] = []
      previous[i] = []
      for (var j = 0; j < rows; j++) {
        current[i][j] = 0
        previous[i][j] = 0
      }
    }
    previous[100][100] = 500
  }

  function draw() {
    background(255,255,255)
    loadPixels()
    for (var i = 1; i < cols - 1; i++) {
      for (var j = 1; j < rows - 1; j++) {
        current[i][j] = (   
            previous[i - 1][j] + 
          previous[i + 1][j] +
            previous[i][j - 1] + 
            previous[i][j + 1] +
            previous[i - 1][j - 1] + previous[i - 1][j + 1] +
            previous[i + 1][j - 1] + previous[i + 1][j + 1]
          ) / 4 - current[i][j];
        current[i][j] = current[i][j] * damping 
        var index = (i + j * cols) * 4;
        //fill(255,255,0);
        pixels[index + 0] = current[i][j] * 255
        pixels[index + 1] = current[i][j] * 255
        pixels[index + 2] = current[i][j] * 255
        pixels[index + 3] = 255
      }
    }
    updatePixels()
    
    //swap buffers
    var temp = previous
    previous = current
    current = temp
  }
