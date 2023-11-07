function setup() {
  createCanvas(500, 400);
  x = 0
  y = 0
  dx = 1
  dy = 1
  console.log("we started")
}

function draw() {
  background(220);
  circle(x,y,40)
  x = x + dx
  y = y + dy * 2
  if (x > 500) dx = -1
  if (y > 400) dy = -1
  if (x < 0) dx = 1
  if (y < 0) dy = 1
}