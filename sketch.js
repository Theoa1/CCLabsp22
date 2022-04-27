function setup() {
  let canvas = createCanvas(windowHeight/2, 400);
  canvas.parent("my-container");
}

function draw() {
  noStroke();
  for (let i = 5; i < 1000; i++) {
    fill(random(255), random(255), random(255), random(255));
    rect(random(windowWidth), random(windowHeight), random(100), random(100)); 
    
    }
}