window.onload = function () {
    // Definition
    const canvas = document.getElementById("pokemon-canvas")
    const context = canvas.getContext("2d")

    const pokemonTile = new Image()
    pokemonTile.src = "./pokemons.png"

    pokemonTile.onload = function () {

        // Pikacu
        context.drawImage(pokemonTile, 0, 0, 200, 200, 0, 0, 200, 200)
    
        // Squirtile
        context.drawImage(pokemonTile, 400, 180, 200, 200, 200, 0, 200, 200)

        // Bulbasaur
        context.drawImage(pokemonTile, 1000, 0, 200, 200, 400, 0, 200, 200)
    }
} 