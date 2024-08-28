/*  Scope Global 
    Las variables globales son accesibles desde cualquier parte del código,
    Son variables declaradas fuera de una función.
    Podemos usar const, let o var para declarar variables globales.
*/

// Ejemplo de variable global
var nombre = 'Juan'
console.log(nombre)

const saludo = () => {
    console.log(`Hola ${nombre}`)
}

saludo()


/* Scope local
    -Las variables locales son accesibles solo dentro de la función donde fueron declaradas.
    -Son variables declaradas dentro de esa función. */

let obtenerNumeroLetras = (palabra) => {
    let numeroLetras = palabra.length
    console.log(`La palabra ${palabra} tiene ${numeroLetras} letras`)
}

// console.log(numeroLetras) // Error: numeroLetras is not defined
//No podemos acceder a la variable numeroLetras porque es una variable local
obtenerNumeroLetras('Hola')


/* Scope de bloque
    -Las variables declaradas con let y const tienen un scope de bloque.
    -Un bloque es todo el código que se encuentra entre llaves {}.
    -Las variables declaradas con var no tienen scope de bloque, solo tienen scope de función. 
*/

const acceso = false
const edad = 21
if (edad >= 18) {
    const acceso = true
    console.log(`Acceso: ${acceso}`)
}

// console.log(acceso) // Error: acceso is not defined si no declara la variable acceso fuera del bloque
console.log(`Acceso: ${acceso}`) // Acceso: false