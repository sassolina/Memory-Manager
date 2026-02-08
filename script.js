//custom variables for y-coordinate of sun & horizon
let sunX, sunY;
let moonX, moonY;
let horizon = 200;
let centerX = 200; // centro di rotazione
let centerY = 200; // centro di rotazione
let radius = 100;  // raggio del cerchio

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
 
  // calcola l'angolo tra il centro e la posizione del mouse
  let angle = atan2(mouseY - centerY, mouseX - centerX);
  
  // calcola la posizione del sole sul cerchio
  sunX = centerX + cos(angle) * radius;
  sunY = centerY + sin(angle) * radius;
  
  // calcola la posizione della luna sul lato opposto (aggiungi PI radianti = 180 gradi)
  moonX = centerX + cos(angle + PI) * radius;
  moonY = centerY + sin(angle + PI) * radius;
  
  //light blue background if sun is above horizon
  if(sunY < horizon){ //check if it is daytime
     background("lightblue");
  } 
  
  //sun
  fill("yellow");
  noStroke();
  circle(sunX, sunY, 100);
  
  //moon
  fill("white");
  circle(moonX, moonY, 80);
  
  // draw line for horizon
  stroke('green');
  line(0, horizon, 400, horizon);
  
  //grass
  fill("green"); 
  noStroke();
  rect(0, horizon, 400, 400);
}
