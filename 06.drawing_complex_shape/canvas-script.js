window.onload = function () {
    // Definition
    const canvas = document.getElementById("lab-complex-shaped-canvas")
    const context = canvas.getContext("2d")

    // first Z obj
    context.beginPath()

    context.strokeStyle = "red"
    context.lineWidth = 15
    context.lineCap = "butt"
    context.lineJoin = "miter"
    
    context.shadowColor = "black"
    context.shadowOffsetX = "10"
    context.shadowOffsetY = "10"

    context.moveTo(60, 80)
    context.lineTo(160, 80)
    context.lineTo(80, 180)
    context.lineTo(180, 180)
    context.stroke()

    // second Z obj
    context.beginPath()

    context.strokeStyle = "blue"
    context.lineWidth = 15
    context.lineCap = "round"
    context.lineJoin = "round"

    context.shadowColor = "yellow"
    context.shadowOffsetX = "10"
    context.shadowOffsetY = "10"

    context.moveTo(340, 80)
    context.lineTo(240, 80)
    context.lineTo(340, 180)
    context.lineTo(240, 180)
    context.stroke()

    // third Z obj
    context.beginPath()

    context.strokeStyle = "green"
    context.lineWidth = 15
    context.lineCap = "square"
    context.lineJoin = "bevel"

    context.shadowColor = "red"
    context.shadowOffsetX = "10"
    context.shadowOffsetY = "10"

    context.moveTo(420, 80)
    context.lineTo(520, 80)
    context.lineTo(440, 180)
    context.lineTo(540, 180)
    context.stroke()
} 