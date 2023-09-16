export let calcImc = (weight,height) => {
    return (Number(weight)/((Number(height)/100)**2)).toFixed(1)   
}

export let notNumber = (number)=>{
    return isNaN(number) || number == ""
}