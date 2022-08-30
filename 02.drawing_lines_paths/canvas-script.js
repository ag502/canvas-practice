window.onload = function () {
    // Definition
    const canvas = document.getElementById("line-canvas")
    const context = canvas.getContext("2d")

    // Draw line steps
    context.beginPath() // reset context state

    context.strokeStyle = "red" // color of line
    context.lineWidth = 10 // width of line

    context.moveTo(30, 70) // starting point of the line
    context.lineTo(130, 70) // end point of the line
    context.stroke() // draw a line

    // Multi line Definition
    const multiLineCanvas = document.getElementById("multiline-canvas")
    const multiLineContext = multiLineCanvas.getContext("2d")

    // Draw line steps
    multiLineContext.beginPath()

    multiLineContext.moveTo(30, 30)
    multiLineContext.lineTo(80, 80)
    multiLineContext.lineTo(130, 30)
    multiLineContext.lineTo(180, 80)
    multiLineContext.lineTo(230, 30)

    multiLineContext.stroke()
} 