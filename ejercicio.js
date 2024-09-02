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
    }else{
        resultado.push('Syntax error')
        return 'Syntax error'
    }
    
}
calculadora2('division', 4, 0)
console.log(resultado)