/*function calculadora (n1, operacion, n2){
    switch (operacion) {
        case 1:
            return n1 + n2
            break;
    
        case 2: 
        return n1 - n2
            break;

        case 3: 
        return n1 * n2
            break;
        
        case 4:
            return n1 / n2
            break;

    }
}
console.log(calculadora(8, 4, 4))*/

let resultado = []
    
function calculadora2(operacion, n1, n2){
    n1 = parseInt(n1)
    n2= parseInt(n2) 
    
    if (operacion == 'suma') {
        resultado.push(n1 + n2)
        return n1 + n2
    }else if(operacion == 'resta'){
        resultado.push(n1 - n2)
      return n1 - n2
    }else if(operacion == 'multiplicacion'){
        resultado.push(n1 * n2)
        return n1 * n2
    }else if(operacion == 'division' && n2 != 0){
        resultado.push(n1 / n2)
        return n1 / n2
        
    }else if(operacion == 'potencia'){
        resultado.push(n1 ** n2)
        return n1**n2
    }else if(operacion == 'mayor'){
        if(n1>n2){
            return n1
        }else{
            return n2
        }
    }
    else{
        resultado.push('Syntax error')
        return 'Syntax error'
    }
    
}
console.log(calculadora2(process.argv[2], process.argv[3], process.argv[4]))