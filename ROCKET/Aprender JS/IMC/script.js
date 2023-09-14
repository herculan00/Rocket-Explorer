

let calcImc = (weight,height) => {

    let nWeight = weight.search("[^0-9]")
    let nHeight = height.search("[^0-9]")

    if (nWeight == -1 && nHeight == -1) {
        return (Number(weight)/((Number(height)/100)**2)).toFixed(1)
    }
    else {
        return null
    }
}

const nodeWeight = document.querySelector("#weight")
const nodeHeight = document.querySelector("#height")
const nodeSubmit = document.querySelector("#btn-submit")

/*
const nodeModal = document.querySelector(".modal-wrap")
const nodeClose = document.querySelector("#btn-close")*/

const nodeAlert = document.querySelector(".modal-alert")

const Modal = {

    wrapper: document.querySelector(".modal-wrap"),
    btnClose: document.querySelector("#btn-close"),
    message: document.querySelector(".modal-wrap div h2"),

    toggle(){
        this.wrapper.classList.toggle('hide')
    }
}

nodeSubmit.addEventListener('click', (e)=>{
    event.preventDefault()

    let nIMC = calcImc(nodeWeight.value,nodeHeight.value)
    let print = `Seu IMC é: ${nIMC}!`


    if (nIMC == null) {
        nodeAlert.classList.remove('hide')
        
    } else {
        Modal.message.innerText = print
        Modal.toggle()
        nodeAlert.classList.add('hide')
    }

})

Modal.btnClose.onclick = (e) => {
    Modal.toggle()
}
