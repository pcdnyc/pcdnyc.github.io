let body;

// var cols, rows, current = [], previous = [],
// damping = 0.99;

// function mouseDragged() {
// current[mouseX][mouseY] = 255
// }

let firstColor = {
  h: 207,
  s: 80,
  b: 42
};
let secondColor = {
  h: 210,
  s: 80,
  b: 60
}
let thirdColor = {
  h: 272,
  s: 70,
  b: 35
}
let gradientDir = 30;
let secondLocation = 35;
let wordVariable;
let firstColorString, secondColorString, thirdColorString;


function setup() {


  createCanvas(windowWidth, windowHeight);
  // noCanvas();
  colorMode(HSB);
  body = select('body');
  setInterval(cycleText, 5000)

  // pixelDensity(1)
  // print(pixels)
  
  // cols = width
  // rows = height
  
  // for (var i = 0; i < cols; i++) {
  //   current[i] = []
  //   previous[i] = []
  //   for (var j = 0; j < rows; j++) {
  //     current[i][j] = 255
  //     previous[i][j] = 255
  //   }
  // }
  // previous[100][100] = 500

  // for (var i = 0; i < cols; i++) {
  //   current[i] = []
  //   previous[i] = []
  //   for (var j = 0; j < rows; j++) {
  //     current[i][j] = 0
  //     previous[i][j] = 0
  //   }
  // }
  // previous[100][100] = 500
  
}

function draw() {
  // background(255,255,255)
  // clear();
  firstColorString = `hsl(${firstColor.h},${firstColor.s}%,${firstColor.b}%)`;
  secondColorString = `hsl(${secondColor.h},${secondColor.s}%,${secondColor.b}%)`;
  thirdColorString = `hsl(${thirdColor.h},${thirdColor.s}%,${thirdColor.b}%)`;
  let styleString = `linear-gradient(${gradientDir}deg, ${firstColorString} 0%, ${secondColorString} ${secondLocation}%, ${thirdColorString} 100%)`;

  // background(255,240,250);
    
  
  




  
  


  body.style('canvas', styleString);
  firstColor.h = firstColor.h + random(-0.1, 0.1) % 360;
  secondColor.h = secondColor.h + 0.01 % 360;
  secondColor.h = secondColor.h + 0.01 % 360;
  gradientDir = gradientDir + random(-0.1, 0.4) % 360;

 


  // loadPixels()
  // for (var i = 1; i < cols - 1; i++) {
  //   for (var j = 1; j < rows - 1; j++) {
  //     current[i][j] = (   
  //         previous[i - 1][j] + 
  //       previous[i + 1][j] +
  //         previous[i][j - 1] + 
  //         previous[i][j + 1] +
  //         previous[i - 1][j - 1] + previous[i - 1][j + 1] +
  //         previous[i + 1][j - 1] + previous[i + 1][j + 1]
  //       ) / 4 - current[i][j];
  //     current[i][j] = current[i][j] * damping 
  //     var index = (i + j * cols) * 4;
  //     // fill(255,255,0);
  //     pixels[index + 0] = current[i][j] * 255
  //     pixels[index + 1] = current[i][j] * 0
  //     pixels[index + 2] = current[i][j] * 255
  //     pixels[index + 3] = 255
  //   }
  // }

  // //secondLocation = 40 + 20*sin(frameCount / 10000);


  // var temp = previous
  // previous = current
  // current = temp
  
  // updatePixels()
  body.style('background', styleString);
    //swap buffers
  


}


function cycleText() {
  const words = [" art, code and diversity ", " setup() and draw() ", " the joys of debugging ", " learning to program ", " createCanvas() ", " Processing and p5.js ", " art and the web ", " mousePressed() ", " ellipses and rects ", " software and visual literacy ", " coding and culture ", " open source culture ", " creative coding ", " generative design ", " community building ", " radical pedagogy ", " toolbuilding ", " crafting with code ", " game design ", " sound and code ", " interactivity ", " video pixels ", " data visualization ", " mouseX, mouseY "];
  let choice = int(random(words.length));
  let wordVar = select('#wordVariable');
  wordVar.html(words[choice]);
}
