/*function saludo (nombre, apellido ){
     return 'Hola' +  nombre +  apellido
}
console.log(saludo(' Manuel', ' De Andrade'))
*/
let saludo = (nombre, apellido) => 'Hola'+' '+nombre+''+apellido
console.log(saludo('Manuel', 'De Andrade'))

let suma = (n1, n2) => n1+n2
console.log(suma(9, 19))

let resta = (n1, n2) => n1-n2
console.log(resta(9, 4))

let multiplicacion = (n1, n2) => n1*n2
console.log(multiplicacion(2, 2))

let division = (n1, n2) => n1/n2
console.log(2,2

)
let doble = (n1) => n1*2
console.log(doble(7))

let orden = (n1,n2) => n1>n2 ? n1 : n2
console.log(orden(20, 45))

let puedePasar = (edad, acompañado) => (edad>=18) || ((edad>=15) && (acompañado))
console.log(puedePasar(18))




/*function suma(num1, num2){
 return num1 + num2 
}
console.log(suma(20, 20))

function resta(nume1, nume2){
    return nume1 - nume2
}
console.log(resta(5, 4))*/

/*function multiplicacion(num1, num2){
    return num1 * num2
}
console.log(multiplicacion(2, 10))

function division(num1, num2){
    return 10 / 2
}

console.log(division(10, 2))*/

/*function doble(num){
    return num * 2
}

console.log(doble(5))*/

/*function orden(num1, num2){
    if(num1>num2){
        return num1
    }else{
        return num2
    }

}
console.log(orden(5, 20))*/

/*function puedePasar(edad, acompañado){
    if(edad>=18){
        return true
    }else if(edad>=15 && acompañado==true){
        return true
    }else if(edad<15){
        return false
    }else if(edad<18 && acompañado==false){
        return false
    }else if(edad>=18 && acompañado==true){
        return true
    }else if(edad>=18 && acompañado==false){
        return false
    }
}console.log(puedePasar(20, false))*/


