function SweepAlarm (Freq1: number, Freq2: number, FreqStep: number, Period: number) {
    for (let index = 0; index < 10; index++) {
        Freq = Freq1
        Loop = (Freq2 - Freq1) / FreqStep
        Timing = Math.abs(Period / Loop)
        while (Loop > 0) {
            music.playTone(Freq, Timing)
            Freq += FreqStep
            Loop += -1
        }
    }
}
function AlarmTone (Freq1: number, Freq2: number, Time1: number, Time2: number) {
    for (let index = 0; index < 10; index++) {
        music.playTone(Freq1, Time1)
        music.playTone(Freq2, Time2)
    }
}
input.onButtonPressed(Button.A, function () {
    if (Alarm == OFF) {
        Alarm = ON
    } else {
        Alarm = OFF
    }
})
function Amb () {
    for (let index = 0; index < 10; index++) {
        Freq = 650
        Timing = 6
        while (Freq < 750) {
            music.playTone(Freq, Timing)
            Freq += 2
        }
        Freq = 900
        Timing = 6
        while (Freq > 1000) {
            music.playTone(Freq, Timing)
            Freq += 2
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (Mode == T3_ALARM) {
        Mode = ALT_TONE
    } else {
        Mode += 1
    }
    basic.showNumber(Mode)
    Alarm = OFF
})
function Police () {
    for (let index = 0; index < 10; index++) {
        Freq = 300
        Timing = 15.5
        while (Freq < 345) {
            music.playTone(Freq, Timing)
            Freq += 1
        }
    }
}
function T3_alarm () {
    for (let index = 0; index < 4; index++) {
        Freq = 500
        Loop = 60
        Timing = 50
        while (Loop > 0) {
            music.playTone(Freq, Timing)
            Freq += 20
            Loop += -1
        }
        Timing = 500
        music.rest(Timing)
    }
}
let Timing = 0
let Loop = 0
let Freq = 0
let Alarm = 0
let OFF = 0
let ON = 0
let Mode = 0
let T3_ALARM = 0
let ALT_TONE = 0
ALT_TONE = 0
let FAST_SWEEP = 1
let SLOW_SWEEP = 2
T3_ALARM = 3
Mode = ALT_TONE
ON = 1
OFF = 0
Alarm = OFF
basic.forever(function () {
    if (Alarm == ON) {
        if (Mode == ALT_TONE) {
            basic.showNumber(Mode)
            AlarmTone(800, 970, 250, 250)
        } else if (Mode == FAST_SWEEP) {
            basic.showNumber(Mode)
            SweepAlarm(800, 970, 7, 1000)
        } else if (Mode == SLOW_SWEEP) {
            basic.showNumber(Mode)
            SweepAlarm(800, 970, 7, 250)
        } else if (Mode == T3_ALARM) {
            T3_alarm()
        } else {
        	
        }
    }
})
