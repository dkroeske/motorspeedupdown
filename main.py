speed = 0
up = True

def on_forever():
    global speed
    while True:
        pins.analog_write_pin(AnalogPin.P8, speed*4)
        if up2:
            if speed < 100:
                speed = speed + 10
            else:
                up2 = False
        elif speed > 0:
            speed = speed - 10
        else:
            up2 = True
        basic.pause(100)

pins.analog_write_pin(AnalogPin.P8, 0)
pins.analog_set_period(AnalogPin.P8, 20000)
pins.digital_write_pin(DigitalPin.P12, 0)

basic.forever(on_forever)
