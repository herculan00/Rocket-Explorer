alert("Supermercado, insira 10 items")


let items = []

let printItems =""


for (let index = 0; index < 10; index++) {
    let item= prompt(`Insira o  item ${index+1}:` )

    items.push(item)

    printItems+=item+","
}

alert(printItems)
alert(items.toString())



