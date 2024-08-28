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