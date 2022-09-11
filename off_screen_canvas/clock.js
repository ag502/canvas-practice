const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const snapShotButton = document.getElementById("snapShotButton");
const snapShotImageElement = document.getElementById("snapShotImageElement");

let loop = null;

const FONT_HEIGHT = 15;
const MARGIN = 35;
const HAND_TRUNCATION = canvas.width / 25;
const HOUR_HAND_TRUNCATION = canvas.width / 10;
const NUMERAL_SPACING = 20;
const RADIUS = canvas.width / 2 - MARGIN;
const HAND_RADIUS = RADIUS + NUMERAL_SPACING;

// 시계 원 그리기
function drawCircle() {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2);
  context.stroke();
}

// 시계 숫자 그리기
function drawNumerals() {
  const numerals = Array.from({ length: 12 }, (_, idx) => idx + 1);

  numerals.forEach((numeral) => {
    const angle = (Math.PI / 6) * (numeral - 3);
    const numeralWidth = context.measureText(numeral).width;

    context.fillText(
      numeral,
      canvas.width / 2 + Math.cos(angle) * HAND_RADIUS - numeralWidth / 2,
      canvas.height / 2 + Math.sin(angle) * HAND_RADIUS + FONT_HEIGHT / 3
    );
  });
}

// 시계 중심 그리기
function drawCenter() {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
  context.fill();
}

// 시계 바늘 그리기
function drawHand(loc, isHour) {
  const angle = Math.PI * 2 * (loc / 60) - Math.PI / 2;
  const handRadius = isHour
    ? RADIUS - HOUR_HAND_TRUNCATION
    : RADIUS - HAND_TRUNCATION;

  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.lineTo(
    canvas.width / 2 + Math.cos(angle) * handRadius,
    canvas.height / 2 + Math.sin(angle) * handRadius
  );
  context.stroke();
}

function drawHands() {
  const date = new Date();

  let hour = date.getHours();
  hour = hour > 12 ? hour - 12 : hour;

  drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true);
  drawHand(date.getMinutes(), false);
  drawHand(date.getSeconds(), false);
}

function updateClockImage() {
  snapShotImageElement.src = canvas.toDataURL();
}

function drawClock() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.save();

  context.fillStyle = "rgba(255, 255, 255, 0.8)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawCircle();
  drawCenter();
  drawHands();

  context.restore();
  drawNumerals();

  updateClockImage();
}

loop = setInterval(drawClock, 1000);
