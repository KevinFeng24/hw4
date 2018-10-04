function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 0; x < 234; x = x+5 ) {
    line(x, height/2, x+100, height/2-75);
  }
}
