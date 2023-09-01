alert("Calculadora. Insira dois numeros ")

let numberOne= prompt("Insira um número:")
let numberTwo= prompt("Insira um número:")

let result = null
let isPair = null
let isEqual = null

result = Number(numberOne) + Number(numberTwo) 
alert(`Resultado: ${numberOne} + ${numberTwo} = ${result}`)

if (result % 2 == 0) {
    isPair = true
} else {
    isPair = false
}

if (Number(numberOne) == Number(numberTwo)) {
    isEqual = true
} else {
    isEqual = false
}

result = Number(numberOne) - Number(numberTwo)
alert(`Resultado: ${numberOne} - ${numberTwo} = ${result}`)


result = Number(numberOne) * Number(numberTwo)
alert(`Resultado: ${numberOne} * ${numberTwo} = ${result}`)


result = Number(numberOne) / Number(numberTwo)
alert(`Resultado: ${numberOne} / ${numberTwo} = ${result}`)


result = Number(numberOne) % Number(numberTwo)
alert(`Resultado: ${numberOne} % ${numberTwo} = ${result}`)
  

if (isPair) {
    alert("A soma dos dois números é par")
} else {
    alert("A soma dos dois números é ímpar")
}

if (isEqual) {
    alert("Os números são iguais")
} else {
    alert("Os números são diferentes")
}
