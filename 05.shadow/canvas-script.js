window.onload = function () {
    // Definition
    const canvas = document.getElementById("shadows-canvas")
    const context = canvas.getContext("2d")

    // 1
    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 20

    context.shadowColor = "black"
    context.shadowOffsetX = 10
    context.shadowOffsetY = 10
    context.shadowBlur = 10

    context.moveTo(100, 60)
    context.lineTo(200, 60)
    context.stroke()

    // 2
    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 20

    context.shadowColor = "green"
    context.shadowOffsetX = -10
    context.shadowOffsetY = 10
    context.shadowBlur = 10

    context.moveTo(350, 60)
    context.lineTo(450, 60)
    context.stroke()


    // 3
    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 20

    context.shadowColor = "yellow"
    context.shadowOffsetX = 10
    context.shadowOffsetY = -10
    context.shadowBlur = 10

    context.moveTo(100, 200)
    context.lineTo(200, 200)
    context.stroke()

    // 4
    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 20

    context.shadowColor = "brown"
    context.shadowOffsetX = -10
    context.shadowOffsetY = -10
    context.shadowBlur = 10

    context.moveTo(350, 200)
    context.lineTo(450, 200)
    context.stroke()
} 