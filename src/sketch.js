let body;
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
  noCanvas();
  colorMode(HSB);
  body = select('body');
  setInterval(cycleText, 5000)
}

function draw() {
  firstColorString = `hsl(${firstColor.h},${firstColor.s}%,${firstColor.b}%)`;
  secondColorString = `hsl(${secondColor.h},${secondColor.s}%,${secondColor.b}%)`;
  thirdColorString = `hsl(${thirdColor.h},${thirdColor.s}%,${thirdColor.b}%)`;
  let styleString = `linear-gradient(${gradientDir}deg, ${firstColorString} 0%, ${secondColorString} ${secondLocation}%, ${thirdColorString} 100%)`;
  body.style('background', styleString);
  firstColor.h = firstColor.h + random(-0.1, 0.1) % 360;
  secondColor.h = secondColor.h + 0.01 % 360;
  secondColor.h = secondColor.h + 0.01 % 360;
  gradientDir = gradientDir + random(-0.1, 0.1) % 360;
  //secondLocation = 40 + 20*sin(frameCount / 10000);
}

function cycleText() {
  const words = [" art, code and diversity ", " setup() and draw() ", " the joys of debugging ", " learning to program ", " createCanvas() ", " Processing and p5.js ", " art and the web ", " mousePressed() ", " ellipses and rects ", " software and visual literacy ", " coding and culture ", " open source culture ", " creative coding ", " generative design ", " community building ", " radical pedagogy ", " toolbuilding ", " crafting with code ", " game design ", " sound and code ", " interactivity ", " video pixels ", " data visualization ", " mouseX, mouseY "];
  let choice = int(random(words.length));
  let wordVar = select('#wordVariable');
  if (wordVar){
    //only run on first page (where wordVar exists)
      wordVar.html(words[choice]);
  }
}
