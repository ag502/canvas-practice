window.onload = function () {
    // Definition
    const canvas = document.getElementById("bezier-curves-canvas")
    const context = canvas.getContext("2d")

    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 10

    context.moveTo(200, 250)
    context.bezierCurveTo(100, 100, 500, 100, 400, 200)
    context.stroke()
} 