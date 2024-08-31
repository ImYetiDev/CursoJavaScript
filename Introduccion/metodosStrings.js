/*
    Metodo length
    -Devuelve la longitud de un string.
*/
const nombre = 'Juan'
const frase = `Hola, soy ${nombre}`
console.log(nombre.length) // 4
console.log(frase.length) // 13

/*
    Metodo indexOf()
    -Devuelve la posición de la primera aparición de un valor en un string.
    -Si no encuentra el valor devuelve -1.
*/
console.log(frase.indexOf('h')) // -1
console.log(frase.indexOf('H')) // 0
console.log(frase.indexOf('o')) // 1
console.log(frase.lastIndexOf('o')) // 9

/*
    Metodo slice()
    -Extrae una parte de un string y devuelve un nuevo string.
    -Recibe dos parametros: inicio y fin. El parametro fin es opcional.
*/
const index = frase.indexOf('J')
console.log(frase.slice(index)) // Juan
console.log(frase.slice(1,4)) // ola
const lastIndexOf = frase.lastIndexOf('n')
console.log(frase.slice(index, lastIndexOf + 1)) // Juan