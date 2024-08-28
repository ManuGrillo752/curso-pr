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
    }else if(operacion == 'division'){
        resultado.push(n1 / n2)
        return n1 / n2
        
    }else{
        resultado.push('Syntax error')
        return 'Syntax error'
    }
    
}
calculadora2('division', 3, 3)
calculadora2('suma', 3, 3)
calculadora2('resta', 3, 3)
calculadora2('multiplicacion', 3, 3)
calculadora2('Manuel', 3, 3)
console.log(resultado)
