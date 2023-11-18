//Destructuring objects
const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['peludo', 'negro']
}

const nombreMascota = mascota.nombre
console.log(nombreMascota)

//Destructurando objetos
const {edad, nombre, id} = mascota
console.log(nombre)
console.log(id)

//Ejemplos
const web = {
    nombre: 'calrita-web',
    links: {
        enlace: 'www.clarita-web.com'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/clarita',
            nombreY: 'Clarita YouTube'
        }
    }
}
console.log(web.redesSociales.youtube.enlace)
const {redesSociales} = web
console.log(redesSociales.youtube.nombre)

const {enlace,nombreY} = web.redesSociales.youtube
console.log(enlace)
console.log(nombreY)