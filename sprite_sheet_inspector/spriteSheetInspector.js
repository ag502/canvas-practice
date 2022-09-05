const canvas = document.getElementById("canvas");
const readout = document.getElementById("readout");
const context = canvas.getContext("2d");

function windowToCanvas(canvas, x, y) {
  const bbox = canvas.getBoundingClientRect();

  return {
    x: (x - bbox.left) * (canvas.width / bbox.width),
    y: (y - bbox.top) * (canvas.height / bbox.height),
  };
}

function drawBackground() {
  const VERTICLE_LINE_SPACING = 12;

  let i = context.canvas.height;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "lightgray";
  context.lineWidth = 0.5;

  while (i > VERTICLE_LINE_SPACING) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.canvas.width, i);
    context.stroke();
    i -= VERTICLE_LINE_SPACING;
  }
}

function drawGuidelines(x, y) {
  context.strokeStyle = "rgba(0, 0, 230, 0.8)";
  context.lineWidth = 0.5;
  drawVerticleLine(x);
  drawHorizontalLine(y);
}

function drawVerticleLine(x) {
  context.beginPath();
  context.moveTo(x + 0.5, 0);
  context.lineTo(x + 0.5, context.canvas.height);
  context.stroke();
}

function drawHorizontalLine(y) {
  context.beginPath();
  context.moveTo(0, y + 0.5);
  context.lineTo(context.canvas.width, y + 0.5);
  context.stroke();
}

function updateReadout(x, y) {
  readout.innerText = `(${x.toFixed(0)}, ${y.toFixed(0)})`;
}

canvas.onmousemove = function (e) {
  const loc = windowToCanvas(canvas, e.clientX, e.clientY);

  drawBackground();
  drawGuidelines(loc.x, loc.y);
  updateReadout(loc.x, loc.y);
};

drawBackground();
