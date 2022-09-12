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

function drawToArcs() {
  context.beginPath();
  context.arc(300, 190, 150, 0, Math.PI * 2, false);
  context.arc(300, 190, 100, 0, Math.PI * 2, true);

  context.fill();
  context.shadowColor = undefined;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.stroke();
}

function draw() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  drawGrid("lightgray", 10, 10);

  context.save();

  context.shadowColor = "rgba(0,0,0,0.8)";
  context.shadowOffsetX = 12;
  context.shadowOffsetY = 12;
  context.shadowBlur = 15;

  drawToArcs();

  context.restore();
}

draw();
