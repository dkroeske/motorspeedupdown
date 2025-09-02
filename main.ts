let speed = 0
let up = true
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogSetPeriod(AnalogPin.P8, 20000)
basic.forever(function on_forever() {
    let up2: boolean;
    
    while (true) {
        //  kitronik_motor_driver.motor_on(kitronik_motor_driver.Motors.MOTOR1,
        //      kitronik_motor_driver.MotorDirection.FORWARD,
        //      speed)
        pins.analogWritePin(AnalogPin.P8, speed * 4)
        if (up2) {
            if (speed < 100) {
                speed = speed + 10
            } else {
                up2 = false
            }
            
        } else if (speed > 0) {
            speed = speed - 10
        } else {
            up2 = true
        }
        
        basic.pause(100)
    }
})
