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
let wordVariable;
let firstColorString, secondColorString, thirdColorString;

function setup() {
  noCanvas();
  colorMode(HSB);
  body = select('body');
  noLoop();
}

function draw() {
  firstColorString = `hsl(${firstColor.h},${firstColor.s}%,${firstColor.b}%)`;
  secondColorString = `hsl(${secondColor.h},${secondColor.s}%,${secondColor.b}%)`;
  thirdColorString = `hsl(${thirdColor.h},${thirdColor.s}%,${thirdColor.b}%)`;
  let styleString = `linear-gradient(${gradientDir}deg, ${firstColorString} 0%, ${secondColorString} ${secondLocation}%, ${thirdColorString} 100%)`;
  //let styleString = `linear-gradient(${gradientDir}deg, ${firstColorString} 0%, ${thirdColorString} 100%)`;
  body.style('background', styleString);
  firstColor.h = firstColor.h + random(-0.1, 0.1) % 360;
  //secondColor.h = secondColor.h + 0.01 % 360;
  gradientDir = gradientDir + random(-0.1, 0.1) % 360;
  // secondLocation = 40 + 20*sin(frameCount / 10000);
  // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 35%, rgba(0,212,255,1) 100%);
  setInterval(cycleText, 5000)
}

function cycleText() {
  const words = [" setup() and draw() ", " the joys of debugging ", " learning to program ", " createCanvas() ", " Processing ", " p5.js ", " art and the web ", " mousePressed ", " ellipses ", " software literacy ", " coding and culture ", " open source culture ", " creative coding ", " generative design ", " community building ", " radical pedagogy ", " toolbuilding ", " crafting with code ", " game design ", " sound and code ", " interactivity ", " video pixels ", " data visualization ", " mouseX, mouseY "];
  let choice = int(random(words.length));
  let wordVar = select('#wordVariable');
  wordVar.html(words[choice]);
}
