alert("Jogo de adivinhação!")


let attempt = prompt("Adivinhe o número que estou a pensar. Está entre 0 e 10.")


let attemptCounter=0

let rand = Math.round(Math.random() * 10)

let winner = Number(attempt) == rand

while (!winner) 
{
    alert("Errou, tente novamente")
    attempt = prompt("Adivinhe o número que estou a pensar. Está entre 0 e 10.")
    attemptCounter++

    winner = Number(attempt) == rand
}

alert(`Parabéns acertou no número ${rand} á ${attemptCounter} tentativa`)



