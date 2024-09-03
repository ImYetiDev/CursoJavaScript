/*
    Metodo toString()
    -Convierte un numero a string.
*/
const numero = 123
console.log(numero.toString()) // '123'

/*
    Metodo toFixed()
    -Formatea un numero con una cantidad de decimales.
    -Recibe un parametro: la cantidad de decimales.
*/
const numeroDecimal = 3.1416
console.log(numeroDecimal.toFixed(2)) // 3.14

/*
    Metodo parseInt() y parseFloat()
    -Convierte un string a numero.
    -parseInt() convierte a entero.
    -parseFloat() convierte a decimal.
*/
const stringNumero = '123'
const stringDecimal = '3.1416'
console.log(parseInt(stringNumero)) // 123
console.log(parseFloat(stringDecimal)) // 3.1416

/*
    Math.random()
    -Devuelve un numero aleatorio entre 0 y 1.
*/

console.log(Math.random()) // 0.123456789
console.log(Math.random()) // 0.987654321

/*
    Math.floor()
    -Redondea un numero hacia abajo.
*/
console.log(Math.floor(3.9)) // 3
console.log(Math.floor(3.1)) // 3

/*
    Math.ceil()
    -Redondea un numero hacia arriba.
*/
console.log(Math.ceil(3.9)) // 4
console.log(Math.ceil(3.1)) // 4

/*
    Math.round()
    -Redondea un numero al entero mas cercano.
*/
console.log(Math.round(3.9)) // 4
console.log(Math.round(3.1)) // 3

/*
    Ejemplo numero aleatorio entre 1 y 100.
*/
const numeroAleatorio = Math.random()
console.log(Math.floor(numeroAleatorio * 101)) // 1 - 100