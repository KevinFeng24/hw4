function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

	for(var a=0; a<360;a=a+5)
  for (var x = 10; x < width; x = x + 10){
    line( 200+100*cos(a*3.14/180), 200 +100 *sin(a *   3.14   /180   ), mouseX, mouseY);
  }
}
