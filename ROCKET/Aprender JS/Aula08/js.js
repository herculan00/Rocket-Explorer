
let openMsg = () => {
  return  prompt(
        `
         Olá usuário! Digite o núnemero da opção desejada
        
            1 - Cadastrar um item na lista
            2 - Mostrar itens cadastrados
            3 - Sair do programa 
        ` )
}

let items = []

option = Number(openMsg())

while(option != 3){

    switch (option) {
        case 1:
            let item = prompt("Insira o nome do item!")
            items.push(item)
        break;
        
        case 2:
            if (items.length == 0) {
                alert("Não exitem items cadastrados")
            } else {
                alert(items)
            }
        break;

        case 3:
            alert("Programa a terminar")
        break;

        default:
            alert("Opção inválida")
        break;
    }
    option = Number(openMsg())
}


alert("Programa terminou")


