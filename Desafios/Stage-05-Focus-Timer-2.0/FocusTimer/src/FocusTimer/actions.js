import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
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
    let timePlusMinutes=Number(el.minutes.textContent)-5

    timer.updateDisplay(timePlusMinutes,0)
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