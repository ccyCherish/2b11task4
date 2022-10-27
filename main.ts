let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    while (true) {
        led.plot(x_value, 0)
        basic.pause(1000)
        basic.clearScreen()
        x_value += 1
    }
})
input.onButtonPressed(Button.B, function () {
    y_value = 0
    while (true) {
        led.plot(0, y_value)
        basic.pause(1000)
        basic.clearScreen()
        y_value += 1
    }
})
