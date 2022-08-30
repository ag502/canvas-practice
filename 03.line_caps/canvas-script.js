window.onload = function () {
    // Line Caps Definition
    const lineCapCanvas = document.getElementById("line-caps-canvas")
    const lineCapContext = lineCapCanvas.getContext("2d")

    // First Line
    lineCapContext.beginPath()
    lineCapContext.lineCap = "butt"
    lineCapContext.strokeStyle = "red"
    lineCapContext.lineWidth = 10
    
    lineCapContext.moveTo(10, 10)
    lineCapContext.lineTo(100, 10)
    lineCapContext.stroke()

    // Second Line
    lineCapContext.beginPath()
    lineCapContext.lineCap = "round"
    lineCapContext.strokeStyle = "blue"
    lineCapContext.lineWidth = 10
    
    lineCapContext.moveTo(10, 25)
    lineCapContext.lineTo(100, 25)
    lineCapContext.stroke()

    // Thrid Line
    lineCapContext.beginPath()
    lineCapContext.lineCap = "square"
    lineCapContext.strokeStyle = "green"
    lineCapContext.lineWidth = 10
    
    lineCapContext.moveTo(10, 40)
    lineCapContext.lineTo(100, 40)
    lineCapContext.stroke()
} 