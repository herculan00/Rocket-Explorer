alert("Calculador de média, insira o seu nome e as suas notas")


let name= prompt("Insira o seu nome:")
let gradeOne= prompt("Insira a sua primeira nota:")
let gradeTwo= prompt("Insira a sua segunda nota:")
let gradeTree= prompt("Insira a sua terceira nota:")

let average = (Number(gradeOne)+Number(gradeTwo)+Number(gradeTree))/3
average = average.toFixed(1)

let result = null

switch (true) {
    case average>=10:  
        alert(`Parabéns ${name} passsou com ${average}`)
    break;

    case average<10:
        alert(` ${name} não passsou com ${average}, tente a prova de recurso`)
    break;

    default:
        alert("Erro de operação")
    break;
}

