/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Sep 2024
 * This program uses stepper motor
*/

//variable
let distanceToObject: number = 0

//calculating distanceToObject and moving the stepper motor  
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    basic.showNumber(distanceToObject)
    basic.showString(' cm')
    basic.showIcon(IconNames.Happy)

    if (distanceToObject > 10) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(50, 48)

    } else {
        basic.showIcon(IconNames.No)
        robotbit.StpCarMove(10, 48)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StpCarMove(50, 48)
    }
})

//cleanup
basic.showIcon(IconNames.Happy)
