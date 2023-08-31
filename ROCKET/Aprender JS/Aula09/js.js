

alert("Lista de pacientes")

let patients = [
    {
        name:"Pedro",
        age:20,
        weight:80,
        height:1.70,
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

let patientsNames = []

for (const patient of patients) {
    patientsNames.push(patient.name)
}

alert(patientsNames)