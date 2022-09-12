const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const eraseAllButton = document.getElementById("eraseAllButton");
const strokeStyleSelect = document.getElementById("strokeStyleSelect");
const guideWireCheckbox = document.getElementById("guidewireCheckbox");

let drawingSurfaceImageData = null;
const mouseDown = {};
const rubberbandRect = {};
let dragging = false;
let guideWires = guideWireCheckbox.checked;

function drawGrid(color, stepX, stepY) {
  context.save();
  context.strokeStyle = color;

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
  context.restore();
}

function windowToCanvas(x, y) {
  const bbox = canvas.getBoundingClientRect();

  return {
    x: (x - bbox.left) * (canvas.width / bbox.width),
    y: (y - bbox.top) * (canvas.width / bbox.height),
  };
}

// 드로잉 표면 저장 및 복원하기 -----------
function saveDrawSurface() {
  drawingSurfaceImageData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );
}

function restoreDrawingSurface() {
  context.putImageData(drawingSurfaceImageData, 0, 0);
}

// 러버 밴드 ---------
function updateRubberbandRectangle(loc) {
  rubberbandRect.width = Math.abs(loc.x - mouseDown.x);
  rubberbandRect.height = Math.abs(loc.y - mouseDown.y);

  if (loc.x > mouseDown.x) {
    rubberbandRect.left = mouseDown.x;
  } else {
    rubberbandRect.left = loc.x;
  }

  if (loc.y > mouseDown.y) {
    rubberbandRect.top = mouseDown.y;
  } else {
    rubberbandRect.top = loc.y;
  }
}

function drawRubberbandShape(loc) {
  context.beginPath();
  context.moveTo(mouseDown.x, mouseDown.y);
  context.lineTo(loc.x, loc.y);
  context.stroke();
}

function updateRubberband(loc) {
  updateRubberbandRectangle(loc);
  drawRubberbandShape(loc);
}

// 가이드 와이어 --------
function drawHorizontalLine(y) {
  context.beginPath();
  context.moveTo(0, y + 0.5);
  context.lineTo(context.canvas.width, y + 0.5);
  context.stroke();
}

function drawVerticlaLine(x) {
  context.beginPath();
  context.moveTo(x + 0.5, 0);
  context.lineTo(x + 0.5, context.canvas.height);
  context.stroke();
}

function drawGuidewires(x, y) {
  context.save();
  context.strokeStyle = "rgba(0, 0, 230, 0.4)";
  context.lineWidth = 0.5;
  drawVerticlaLine(x);
  drawHorizontalLine(y);
  context.restore();
}

// 캔버스 이벤트 핸들러 --------
canvas.onmousedown = (e) => {
  const loc = windowToCanvas(e.clientX, e.clientY);
  e.preventDefault();

  saveDrawSurface();
  mouseDown.x = loc.x;
  mouseDown.y = loc.y;
  dragging = true;
};

canvas.onmousemove = (e) => {
  if (dragging) {
    e.preventDefault();

    const loc = windowToCanvas(e.clientX, e.clientY);
    restoreDrawingSurface();
    updateRubberband(loc);

    if (guideWires) {
      drawGuidewires(loc.x, loc.y);
    }
  }
};

canvas.onmouseup = (e) => {
  const loc = windowToCanvas(e.clientX, e.clientY);
  restoreDrawingSurface();
  updateRubberband(loc);
  dragging = false;
};

// 컨트롤 이벤트 핸들러 --------
eraseAllButton.onclick = (e) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid("lightgray", 10, 10);
  saveDrawSurface();
};

strokeStyleSelect.onchange = (e) => {
  context.strokeStyle = strokeStyleSelect.value;
};

guideWireCheckbox.onchange = (e) => {
  guideWires = guideWireCheckbox.checked;
};

// 초기화 ------
context.strokeStyle = strokeStyleSelect.value;
drawGrid("lightgray", 10, 10);
