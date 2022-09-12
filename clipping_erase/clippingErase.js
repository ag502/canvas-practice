const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const ERASER_LINE_WIDTH = 1;
const ERASER_SHADOW_COLOR = "rgb(0, 0, 0)";

const ERASER_SHADOW_STYLE = "blue";
const ERASER_STROKE_STYLE = "rgb(0, 0, 255)";
const ERASER_SHADOW_OFFSET = -5;
const ERASER_SHADOW_BLUR = 20;

let lastX;
let lastY;
let dragging = false;
const mouseDown = {};

function windowToCanvas(x, y) {
  const bbox = canvas.getBoundingClientRect();

  return {
    x: (x - bbox.left) * (canvas.width / bbox.width),
    y: (y - bbox.top) * (canvas.height / bbox.height),
  };
}

function drawCircle() {
  context.save();

  context.fillStyle = "skyblue";

  context.beginPath();
  context.arc(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 3,
    0,
    Math.PI * 2
  );
  context.fill();

  context.restore();
}

// 지우개 그리기
function setDrawPathForEraser(loc, shape, eraserWidth) {
  context.beginPath();

  if (shape === "circle") {
    context.arc(loc.x, loc.y, eraserWidth / 2, 0, Math.PI * 2);
  } else {
    context.rect(
      loc.x - eraserWidth / 2,
      loc.y - eraserWidth / 2,
      eraserWidth,
      eraserWidth
    );
  }

  context.clip();
}

// 지우개가 지나가는 경로 지우기
function setErasePathForErase(shape, eraseWidth) {
  context.beginPath();

  context.fillStyle = "white";

  if (shape === "circle") {
    context.arc(
      lastX,
      lastY,
      eraseWidth / 2 + ERASER_LINE_WIDTH,
      0,
      Math.PI * 2
    );
  } else {
    context.rect(
      lastX - eraseWidth / 2 - ERASER_LINE_WIDTH,
      lastY - eraseWidth / 2 - ERASER_LINE_WIDTH,
      eraseWidth + ERASER_LINE_WIDTH * 2,
      eraseWidth + ERASER_LINE_WIDTH * 2
    );
  }

  context.clip();
}

function setEraserAttributes() {
  context.lineWidth = ERASER_LINE_WIDTH;
  context.shadowColor = ERASER_SHADOW_STYLE;
  context.shadowOffsetX = ERASER_SHADOW_OFFSET;
  context.shadowOffsetY = ERASER_SHADOW_OFFSET;
  context.shadowBlur = ERASER_SHADOW_BLUR;
  context.strokeStyle = ERASER_STROKE_STYLE;
}

// 지우기
function eraseLast() {
  context.save();
  setErasePathForErase("circle", 100);
  context.fill();
  context.restore();
}

function drawEraser(loc) {
  context.save();

  setEraserAttributes();
  setDrawPathForEraser(loc, "circle", 100);
  context.stroke();

  context.restore();
}

canvas.onmousedown = (e) => {
  const loc = windowToCanvas(e.clientX, e.clientY);
  e.preventDefault();

  mouseDown.x = loc.x;
  mouseDown.y = loc.y;

  lastX = loc.x;
  lastY = loc.y;

  dragging = true;
};

canvas.onmousemove = (e) => {
  if (dragging) {
    e.preventDefault();

    const loc = windowToCanvas(e.clientX, e.clientY);
    eraseLast();
    drawEraser(loc);

    lastX = loc.x;
    lastY = loc.y;
  }
};

canvas.onmouseup = (e) => {
  eraseLast();

  dragging = false;
};

drawCircle();
