basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
