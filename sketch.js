function setup() {
  createCanvas(1820, 1820);
  background("rgb(166,132,197)")
}

function draw() {
  
    stroke("purple")
    fill("pink")
  
  if(mouseIsPressed){
    circle(mouseX, mouseY, 20, 25)
  }
}
