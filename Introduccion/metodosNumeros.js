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
