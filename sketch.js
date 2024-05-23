function setup() {
  createCanvas(600, 600);
  background("rgb(166,132,197)")
}

function draw() {
  
    stroke("purple")
    fill("pink")
  
  if(mouseIsPressed){
    circle(mouseX, mouseY, 20, 25)
  }
}
