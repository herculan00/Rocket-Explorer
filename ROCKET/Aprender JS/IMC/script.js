let calcImc = (weight,height) => {
    return (weight/((height/100)**2)).toFixed(1)
}

let printImc = (patient) => {
    return `Paciente ${patient.name} possui o IMC de: ${calcImc(patient.weight,patient.height).toFixed(2)}`
}

const nodeWeight = document.querySelector("#weight")
const nodeHeight = document.querySelector("#height")
const nodeBtn = document.querySelector("button")

nodeBtn.addEventListener('click', (e)=>{

    alert(calcImc(nodeWeight.value,nodeHeight.value))
})