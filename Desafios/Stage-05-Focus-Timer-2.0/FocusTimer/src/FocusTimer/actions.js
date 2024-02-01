import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

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
    state.isMute = document.documentElement.classList.toggle('music-on')
    document.documentElement.classList.toggle('forest-on')

    if (state.isMute) {
        sounds.forest.toggle()
        return
    }

    sounds.forest.toggle()
}

export function rain(){
    state.isMute = document.documentElement.classList.toggle('music-on')
    document.documentElement.classList.toggle('rain-on')

    if (state.isMute) {
        sounds.rain.play()
        return
    }

    sounds.rain.pause()
}
export function coffeeShop(){
    state.isMute = document.documentElement.classList.toggle('music-on')
    document.documentElement.classList.toggle('coffeeShop-on')

    if (state.isMute) {
        sounds.coffeeShop.play()
        return
    }

    sounds.coffeeShop.pause()
}
export function firePlace(){
    state.isMute = document.documentElement.classList.toggle('music-on')
    document.documentElement.classList.toggle('firePlace-on')

    if (state.isMute) {
        sounds.firePlace.play()
        return
    }

    sounds.firePlace.pause()
}