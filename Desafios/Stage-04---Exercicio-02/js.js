alert("Cálculo da média")


function calcAverage(firstGrade,secondGrade){
    return (firstGrade + secondGrade)/2
}


let students = [
    {
     name: "Pedro",
     firstGrade: 12.5,
     secondGrade: 8.5
    }
    ,
    {
     name: "Joana",
     firstGrade: 5.3,
     secondGrade: 8.5
    }
    ,
    {
     name: "Ana",
     firstGrade: 12.5,
     secondGrade: 18.5
    } 
];

for (const student of students) {

    let average = calcAverage(student.firstGrade,student.secondGrade).toFixed(1)

    if (average >= 7) {
        alert(`O aluno(a) ${student.name} foi aprovado(a) com média ${average}!`)
    } else {
        alert(`O aluno(a) ${student.name} não foi aprovado(a) com média ${average}! Tente novamente.`)
    }
}