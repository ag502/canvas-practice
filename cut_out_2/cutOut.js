const context = document.getElementById("canvas").getContext("2d");

function drawGrid(color, stepX, stepY) {
  context.strokeStyle = color;
  context.lineWidth = 0.5;

  for (let i = stepX + 0.5; i < context.canvas.width; i += stepX) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, context.canvas.height);
    context.stroke();
  }

  for (let i = stepY + 0.5; i < context.canvas.height; i += stepY) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.canvas.width, i);
    context.stroke();
  }
}

function rect(x, y, w, h, direction) {
  context.moveTo(x, y);
  if (direction) {
    context.lineTo(x, y + h);
    context.lineTo(x + w, y + h);
    context.lineTo(x + w, y);
  } else {
    context.lineTo(x + w, y);
    context.lineTo(x + w, y + h);
    context.lineTo(x, y + h);
  }
  context.closePath();
}

function addOuterRectanglePath() {
  context.rect(110, 25, 370, 335);
}

function addCirclePath() {
  context.arc(300, 300, 40, 0, Math.PI * 2, true);
}

function addRectanglePath() {
  rect(310, 55, 70, 35, true);
}

function addTrianglePath() {
  context.moveTo(400, 200);
  context.lineTo(250, 115);
  context.lineTo(200, 200);
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  drawGrid("lightgray", 10, 10);

  context.save();

  context.shadowColor = "rgba(200, 200, 0, 0.5)";
  context.shadowOffsetX = 12;
  context.shadowOffsetY = 12;
  context.shadowBlur = 15;

  drawCutouts();
}

function drawCutouts() {
  context.beginPath();

  addOuterRectanglePath();

  addCirclePath();
  addRectanglePath();
  addTrianglePath();

  context.fill();
  strokeCutoutShapes();
  context.restore();
}

function strokeCutoutShapes() {
  context.save();

  context.strokeStyle = "rgba(0, 0, 0, 0.7)";

  context.beginPath();
  addOuterRectanglePath();
  context.stroke();

  context.beginPath();
  addCirclePath();
  addRectanglePath();
  addTrianglePath();
  context.stroke();

  context.restore();
}

draw();
