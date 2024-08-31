/*
    Metodo indexOf()
    -Obtiene el primer index de un elemento en el array.
    -Si el elemento no existe, devuelve -1.
*/
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'verde', 'naranja', 'rosa']
console.log(colores.indexOf('verde')) // 1  Devuelve el primer index de verde
console.log(colores.indexOf('blanco')) // -1

/*
    Metodo lastIndexOf()
    -Obtiene el último index de un elemento en el array.
    -Si el elemento no existe, devuelve -1.
*/
console.log(colores.lastIndexOf('verde')) // 4 Devuelve el último index de verde
console.log(colores.lastIndexOf('blanco')) // -1

/* 
    Metodo forEach()
    -Ejecuta una función por cada elemento del array.
*/
colores.forEach((color, i) => { // color es el parametro que recibe la función
    console.log(`${color} index (${i})`) // rojo index (0) verde index (1) azul index (2) 
})

/*
    Metodo find()
    -Devuelve el primer elemento que cumpla con la condición.
    -Si no encuentra ningún elemento, devuelve undefined.
*/
nombres = ['Juan', 'Pedro', 'Maria', 'Ana']
const resultado = nombres.find((nombre) =>{ //Por cada nombre del array ejecuta la función
    if(nombre[0] === 'M'){
        return nombre
    } 
})
console.log(resultado) //

/*
    Metodo map()
    -Crea un nuevo array con los resultados de la función.
*/
const nombresMayuscula = nombres.map((nombre) => {
    return nombre.toUpperCase()
})
console.log(nombresMayuscula) // ["JUAN", "PEDRO", "MARIA", "ANA"]/

/*
    Metodo filter()
    -Crea un nuevo array con los elementos que cumplan la condición.
    -La diferencia de filter es que devuelve un array con los elementos que cumplan la condición.
*/

const nombresConA = nombres.filter((nombre) => {
    return nombre.includes('a')
})
console.log(nombresConA) // ["Maria", "Ana"]

const nombre4Letras = nombres.filter((nombre) => {
    return nombre.length === 4
})
console.log(nombre4Letras) // ["Juan"]

/*
    Metodo includes()
    -Determina si un array incluye un determinado elemento.
    -Devuelve true o false.
*/
console.log(nombres.includes('Juan')) // true
console.log(nombres.includes('Carlos')) // false

/*
    Metodo every()
    -Determina si todos los elementos del array cumplen con la condición.
    -Devuelve true o false.
*/
const usuarios = ['Juan', 'Pedro', 'Maria', 'Ana', 4]
const resultadoEvery = usuarios.every((usuario) => {
    return typeof usuario === 'string'
})
console.log(`Todos los numeros son validos: ${resultadoEvery}`) // false

/*
    Metodo some()
    -Determina si algún elemento del array cumple con la condición.
    -Devuelve true o false.
*/
const resultadoSome = usuarios.some((usuario) => {
    return typeof usuario !== 'string'
})
console.log(`Algun numero es valido: ${resultadoSome}`) // true