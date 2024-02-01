import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
import * as utils from './utils.js'

export function play(){
    state.isRunning = true
    document.documentElement.classList.add('running')
    timer.countDown()
    sounds.buttonPressAudio.play()
}

export function stop(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.countDown()
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function plusMinutes(){
    let timePlusMinutes=Number(el.minutes.textContent)+5

    timer.updateDisplay(timePlusMinutes,0)
    sounds.buttonPressAudio.play()

}

export function minusMinutes(){
    let timeMinusMinutes=Number(el.minutes.textContent)-5

    if (timeMinusMinutes<0) {
        reset()
        return
    }
    
    timer.updateDisplay(timeMinusMinutes,0)
    sounds.buttonPressAudio.play()

}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}

export function forest(){
    let isMusicOn = document.documentElement.classList.toggle('forest-on')
    utils.toggleMusic("forest",isMusicOn)
}

export function rain(){
    let isMusicOn = document.documentElement.classList.toggle('rain-on')
    utils.toggleMusic("rain",isMusicOn)
}
export function coffeeShop(){
    let isMusicOn = document.documentElement.classList.toggle('coffeeShop-on')
    utils.toggleMusic("coffeeShop",isMusicOn)
}
export function firePlace(){
    let isMusicOn  = document.documentElement.classList.toggle('firePlace-on')
    utils.toggleMusic("firePlace",isMusicOn)
}