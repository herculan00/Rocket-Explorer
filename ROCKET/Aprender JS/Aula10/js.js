let calcImc = (weight,height) => {
    return weight/(height**2)
}

let printImc = (patient) => {
    return `Paciente ${patient.name} possui o IMC de: ${calcImc(patient.weight,patient.height).toFixed(2)}`
}

alert("Lista de pacientes")

let patients = [
    {
        name:"Pedro",
        age:20,
        weight:100,
        height:1.90,
    },
    {
        name:"Carlos",
        age:24,
        weight:85,
        height:1.76,
    },
    {
        name:"Ze",
        age:22,
        weight:89,
        height:1.78,
    },
]


for (const patient of patients) {
    let messageImc= printImc(patient)
    alert(messageImc)
}
