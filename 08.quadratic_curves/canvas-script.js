window.onload = function () {
    // Definition
    const canvas = document.getElementById("quadratic-curves-canvas")
    const context = canvas.getContext("2d")

    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 10

    context.moveTo(200, 250)
    context.quadraticCurveTo(300, 100, 400, 250)
    context.stroke()
} 