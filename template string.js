//TEMPLATE STRING -> ``

const numero = (num) => {
    return `El num es: ${num}`
}
const resultado = numero(10)
console.log(resultado)

const numero2 = (num1, num2) => {
    return `El num es: ${num1 + num2}`
}
const resultado2 = numero2(10, 20)
console.log(resultado2)

const numero3 = (num1, num2) => `El num es: ${num1 + num2}`
const resultado3 = numero3(20, 20)
console.log(resultado3)
