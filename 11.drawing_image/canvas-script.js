window.onload = function () {
    // Definition
    const canvas = document.getElementById("image-canvas")
    const context = canvas.getContext("2d")

    const img = new Image()
    img.src = "https://via.placeholder.com/300.png"

    img.onload = function() {
        // context.drawImage(img, 100, 100)
        // context.drawImage(img, 250, 50, 300, 300)
        context.drawImage(img, 40, 100, 150, 250, 250, 50, 250, 400)
    }
} 