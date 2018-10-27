let body;

let firstColor = {
  h: 50,
  s: 100,
  b: 90
};

let secondColor = {
  h: 0,
  s: 10,
  b: 60
}

let thirdColor = {
  h: 272,
  s: 70,
  b: 35
}

let gradientDir = 30;
let secondLocation = 35;

let counter = 0;

function setup() {
  noCanvas();
  colorMode(HSB);
  body = select('body');
  noLoop();
}

function draw() {
  const firstColorString = `hsl(${firstColor.h},${firstColor.s}%,${firstColor.b}%)`;
  const secondColorString = `hsl(${secondColor.h},${secondColor.s}%,${secondColor.b}%)`;
  const thirdColorString = `hsl(${thirdColor.h},${thirdColor.s}%,${thirdColor.b}%)`;
  // let styleString = `linear-gradient(${gradientDir}deg, ${firstColorString} 0%, ${secondColorString} ${secondLocation}%, ${thirdColorString} 100%)`;
  let styleString = `linear-gradient(${gradientDir}deg, ${firstColorString} 0%, ${thirdColorString} 100%)`;
  body.style('background', styleString);
  firstColor.h = firstColor.h + random(-0.1, 0.1) % 360;
  // secondColor.h = secondColor.h + 0.01 % 360;
  gradientDir = gradientDir + random(-0.1, 0.1) % 360;
  // secondLocation = 40 + 20*sin(frameCount / 10000);

  // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 35%, rgba(0,212,255,1) 100%);

  setInterval(cycleText.bind(this, counter), 5000)
}


function cycleText(){
  const words = ["An awesome ", "A fun ", "A special "];

  let wordVariable = select("#wordVariable");
  wordVariable.html(words[counter]);
  
  if(counter < words.length-1){
    counter++
  } else{
    counter = 0;
  }
}