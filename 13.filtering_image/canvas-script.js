window.onload = function () {
    // Definition
    const canvas = document.getElementById("image-filter-canvas")
    const context = canvas.getContext("2d")

    const amsterdamImage = new Image()
    amsterdamImage.src = "./amsterdam.jpg"

    amsterdamImage.onload = function() {
        context.drawImage(amsterdamImage, 180, 35)

        const imageData = context.getImageData(180, 35, 550, 366)
    
        for (let i = 0; i < imageData.data.length; i+=4) {
            imageData.data[i] = 255 - imageData.data[i] // R
            imageData.data[i+ 1] =  255 - imageData.data[i] // G
            imageData.data[i + 2] = 255 - imageData.data[i] // B
            imageData.data[i + 3] = 240 // Alpha
        }

        context.putImageData(imageData, 100, 35)
    }
} 