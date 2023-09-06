function guessNumber(event){

    event.preventDefault()

    xAttempts++

    alert(randomNumber)
    if (Number(inputSelector.value) == randomNumber) {

        
        nodeScreen1.classList.add("hide")
        nodeScreen2.classList.remove('hide')

        document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttempts} tentativas!`
    } 


}

function tryAgain(){
    nodeScreen1.classList.remove("hide")
    nodeScreen2.classList.add("hide")

    location.reload()
}

let nodeScreen1 = document.querySelector(".screen1")
let nodeScreen2 = document.querySelector(".screen2")
let inputSelector = document.querySelector("input")
let eventListner = document.querySelector("button").addEventListener("click", guessNumber)
let eventAgain = document.querySelector("#btn").addEventListener("click",tryAgain)


const randomNumber = Math.round(Math.random()*10)
let xAttempts = 0

