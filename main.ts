LCD1IN8.LCD_Init()
LCD1IN8.LCD_ClearBuf()
let ledX = 0
let ledY = 0
let lcdX = 1
let lcdY = 1
basic.forever(function () {
    led.toggle(ledX, ledY)
    ledX += 1
    if (ledX > 4) {
        ledX = 0
    }
    LCD1IN8.DrawPoint(
    lcdX,
    lcdY,
    0,
    DOT_PIXEL.DOT_PIXEL_1
    )
    lcdX += 1
    LCD1IN8.LCD_Display()
    basic.pause(100)
})
basic.forever(function () {
	
})
