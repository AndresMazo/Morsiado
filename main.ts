function Raya () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(300)
}
function Punto () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(300)
}
input.onButtonPressed(Button.A, function () {
    Punto()
    Raya()
    Raya()
    Punto()
    Espacio()
    Punto()
    Punto()
    Raya()
    Espacio()
    Raya()
    Espacio()
    Punto()
    Raya()
})
function Espacio () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(300)
}
