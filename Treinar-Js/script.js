function calcMean(firstGrade,secondGrade) {
    return (Number(firstGrade)+Number(secondGrade))/2
}

const queryName = document.querySelector("p")
const queryGrade = document.querySelector("span")
const queryResult = document.querySelector("strong")
const queryDiv = document.querySelector("div")

alert("Cálculo da média")

const students = [
    {
        name:"Pedro",
        firstGrade:14.5,
        secondGrade:6.4
    },
    {
        name:"Ana",
        firstGrade:14.5,
        secondGrade:16.4
    },
    {
        name:"Paulo",
        firstGrade:10.5,
        secondGrade:6.4
    },
    {
        name:"Xico",
        firstGrade:2.5,
        secondGrade:6.4
    }
]

for (const student of students) {
    let mean = Number(calcMean(student.firstGrade,student.secondGrade).toFixed(1))
    let message = mean<9.5 ? `O aluno ${student.name} está reprovado com ${mean} valores` : 
    `Parabéns ${student.name} está aprovado ${mean} valores`

    queryName.innerText = student.name
    queryGrade.innerText = mean
    queryResult.innerText = message

    if(mean<9.5){
        queryDiv.style.background = "red"
    }
    else{
        queryDiv.style.background = "green"
    }
    
   
    alert()
}

