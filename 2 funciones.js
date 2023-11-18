//FUNCIONES -> Arrow F(x)

//Funcion normal
function sumar(num) {
    console.log(num)
}

sumar(10)

//Funcion de flecha
const sumarDos = (num1, num2) => {
    console.log(num1 + num2)
}
sumarDos(20, 10)
//cuando se tiene un solo parametro se puede omitir los parentesis
const sumarTres = num => {
    console.log(num)
}
sumarTres(30)

//Cuando se retornan cosas -> se debe guardar en una variable/obj
const sumarCuatro = (num1, num2) => {
    return (num1 + num2)
}
const resultado = sumarCuatro(20, 20)
console.log(resultado)
//se puede simplificar de la siguiente manera
const sumaCinco = (num1, num2) => (num1 + num2)
const resultado2 = sumaCinco(20, 20)
console.log(resultado2)

//Ejemplo
const mensaje = () => {
    return 'Hola soy  mensaje'
}
const resultadoMsj = mensaje()
console.log(resultadoMsj)

const mensaje2 = nombre =>{
    return 'Hola soy ' + nombre
}
const resultadoMsj2 = mensaje2('Dario')
console.log(resultadoMsj2)

const mensaje3 = nombre => 'Hola soy ' + nombre
const resultadoMsj3 = mensaje3('Alexis')
console.log(resultadoMsj3)

//Si deseamos asignar un valor, en caso de que el usuario no asigne un valor al parametro, se usa '='
//PERO si el usuario si manda un valor al parametro; el '=' se omite
const ejemplo = (num = 1) => {
    console.log(num + 3)
}
ejemplo()