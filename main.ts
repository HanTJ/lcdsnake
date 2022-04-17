input.onButtonPressed(Button.A, function () {
    if( direction == 0 ) direction = 3
    else direction-=1
})
input.onButtonPressed(Button.B, function () {
    if( direction == 4 ) direction = 0
    else direction+=1
})

function draw () {
    led.unplot(ledX, ledY)
    switch(dirList[direction]){
        case "R":
        ledX+=1
        break
        case "L":
        ledX-=1
        break
        case "U":
        ledY-=1
        break
        case "D":
        ledY+=1
    }
valueValidate()
    led.plot(ledX, ledY)
}


function valueValidate () {
    if (ledX < 0) {
        ledX = 4
    }
    if (ledX > 4) {
        ledX = 0
    }
    if (ledY < 0) {
        ledY = 4
    }
    if (ledY > 4) {
        ledY = 0
    }
}
let dirList = ["R", "D", "L","U"]
let ledX = 0
let ledY = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_ClearBuf()
let lcdX = 1
let lcdY = 10
let direction = 0
basic.forever(function () {
    draw()
    basic.pause(200)
})
