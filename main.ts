input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("Left")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("Right")
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
