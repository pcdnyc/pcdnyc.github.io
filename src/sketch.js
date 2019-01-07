let body;




class particle {

  constructor (x,y){
    this.x = x;
    this.y = y;
    this.speedRange = 0.5
    this.thresh = random(100,300)
    this.size = this.thresh / 10
    this.speed = this.size < 15 ? this.speedRange/2 : this.speedRange
    this.pd;
    this.dx = random(1)>0.5 ? 1 : -1
    this.dy = random(1)>0.5 ? 1 : -1
    this.c = color(random(0,200),random(0,200),random(0,200), 5)
    this.lifespan = 30 * 60;
  }


  display(){
    this.lifespan--
    this.x += this.speed * this.dx
    this.y += this.speed * this.dy

    if(
      this.x > width - this.size/2 ||
      this.x < 0+this.size/2
    ) {
      this.dx = -this.dx
    }

    if(
      this.y > height-this.size/2 ||
      this.y < 0+this.size/2
     ) {
      this.dy = -this.dy
     }
    noStroke();
    fill(this.c)
  }

  findfriends(array){
    stroke(this.c)
    // strokeWeight(this.size/5)
    strokeWeight(1)

    strokeCap(PROJECT)
    for (var i = 0; i < array.length; i++) {
      // console.log(dist(array[i].x, this.x))
      let d = dist(array[i].x, array[i].y, this.x, this.y)

      if(
        d < this.thresh
        &&
        // this.dx != array[i].dx
        // &&
        this.dy != array[i].dy
        &&
        this.lifespan > 0
      ){
        line(this.x, this.y, array[i].x, array[i].y)
      }
    }

  }

}



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

let particles = []

function setup() {
  // createCanvas(windowWidth, windowHeight);
  let c = createCanvas(windowWidth, windowHeight)
  // c.style('display','block')

  // createCanvas()
  
  for (var i = 0; i < round(windowWidth / 75); i++) {
    let p = new particle(random(0,width),random(0,height),i)
    particles.push(p)

  }






  // colorMode(HSB);
  
  body = select('body');
  setInterval(cycleText, 5000)
  
}

function draw() {
  // background(255,255,255)




  for (var i = 0; i < particles.length; i++) {
    particles[i].display()
    particles[i].findfriends(particles)
  }

  if(frameCount % 400 == 0){
    respawnParticle(random(windowWidth),random(windowHeight))
    console.log('hi');
  }





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

 


  body.style('background', styleString);
    //swap buffers
  


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

function mouseClicked(){

  respawnParticle(mouseX,mouseY)

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}


function respawnParticle(x,y){
  particles.pop()
  let p = new particle(x,y)
  particles.push(p)
  // console.log(particles.length);
}



