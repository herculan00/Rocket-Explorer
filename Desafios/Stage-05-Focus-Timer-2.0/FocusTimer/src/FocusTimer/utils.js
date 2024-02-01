import * as sounds from './sounds.js'


export function toggleMusic (soundName, isMusicOn){

    let x = sounds[soundName];

    if (isMusicOn) {
        x.play()
    } else {
        x.pause()
    }

}