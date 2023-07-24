alert("Calculadora. Insira dois numeros e indique o operador (+ - * / %)")

let numberOne= prompt("Insira um número:")
let operator= prompt("Insira o operador:")
let numberTwo= prompt("Insira um número:")

let result = null

switch (operator) {
    case "+":  
        result = Number(numberOne) + Number(numberTwo) 
    break;

    case "-":
        result = Number(numberOne) - Number(numberTwo)
    break;

    case "*":
        result = Number(numberOne) * Number(numberTwo)
    break;

    case "/":
        result = Number(numberOne) / Number(numberTwo)
    break;

    case "%":
        result = Number(numberOne) % Number(numberTwo)
    break;

    default:
        alert("Erro de operação")
    break;
}

alert(`Resultado ${numberOne} ${operator} ${numberTwo} = ${result}`)