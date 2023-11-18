//var vs let vs const

var edad = 10
var edad = 20
console.log(edad)
//VAR -> nos permite declarar la misma variable dos o mas veces
//generando asi errores

//let edad = 10
//let edad = 20
//LET -> solo nos permite declarar una solo vez

//const edad = 10
//CONST -> constante que no cambia con el tiempo

//Ejemplo
if (true) {
    var edad = 20
    console.log(edad)
}

//Se puede agregar o modificar elementos con funciones
const persona = {
    nombre: 'Juanito',
    edad: 20
}

persona.edad = 21
persona.pais = 'Mex'

console.log(persona)








