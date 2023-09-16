import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calcImc, notNumber} from "./utils.js"

const nodeWeight = document.querySelector("#weight")
const nodeHeight = document.querySelector("#height")
const nodeSubmit = document.querySelector("#btn-submit")


nodeSubmit.addEventListener('click', (e)=>{
    event.preventDefault()


    let isNaN1 = notNumber(nodeWeight.value)
    let isNaN2 = notNumber(nodeHeight.value)
    let weightOrHeightIsNotANumber = isNaN1 || isNaN2

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        
    } else {
        let nIMC = calcImc(nodeWeight.value,nodeHeight.value)
   
        displayResultMessage(nIMC)
        AlertError.close()
    }

})

function displayResultMessage(result){

    let print = `Seu IMC é: ${result}!`
    Modal.message.innerText = print
    Modal.toggle()
}


nodeHeight.addEventListener("input", handleAlertInput)
nodeWeight.addEventListener("input", handleAlertInput)

function handleAlertInput(event){
    AlertError.close()
}