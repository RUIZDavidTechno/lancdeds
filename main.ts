radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < tool) {
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber > tool) {
        basic.pause(5000)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.pause(5000)
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 9)
    radio.sendNumber(tool)
    basic.showNumber(tool)
    basic.pause(5000)
})
let tool = 0
radio.setGroup(1)
