const colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'rosa']

/*
    Metodo .length
    -Nos devuelve el número de elementos de un array.
*/
console.log(colores.length) // 6

/*
    Metodo toString()
    -Convierte un array en una cadena de texto.
*/
console.log(colores.toString()) // rojo,verde,azul,amarillo,naranja,rosa

/*
    Metodo join()
    -Convierte un array en una cadena de texto, pero podemos especificar el separador.
*/
console.log(colores.join(' - ')) // rojo - verde - azul - amarillo - naranja - rosa
console.log(colores.join(' | ')) // rojo | verde | azul | amarillo | naranja | rosa

/*
    Metodo sort()
    -Ordena los elementos de un array alfabéticamente.
*/
console.log(colores.sort()) // ['amarillo', 'azul', 'naranja', 'rojo', 'rosa', 'verde']

/*
    Metodo reverse()
    -Invierte el orden de los elementos de un array.
*/
console.log(colores.reverse()) // ['rosa', 'naranja', 'amarillo', 'azul', 'verde', 'rojo']

/*
    Metodo concat()
    -Une dos o más arrays.
*/
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2)
console.log(array3) // ['a', 'b', 'c', 'd', 'e', 'f']

/*
    Metodo push() mas comun
    -Agrega un elemento al final del array.
*/
colores.push('violeta')
console.log(colores) // ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'rosa', 'violeta']

/*
    Metodo pop()
    -Elimina el último elemento del array.
*/
colores.pop()
console.log(colores) // ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'rosa']

/*
    Metodo shift()
    -Elimina el primer elemento del array.
*/
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
console.log(dias) // ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
const diaEliminado = dias.shift() // retorna el elemento eliminado 'lunes'

/*
    Metodo unshift()
    -Agrega un elemento al principio del array.
*/
dias.unshift('Yeti')
console.log(dias) // ['Yeti', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

/*
    Metodo splice()
    -Permite insertar elementos en una posición específica del array.
    -1er parametro: posición donde se insertará el elemento.
    -2do parametro: cantidad de elementos a eliminar.
    -Resto de parametros: elementos a insertar.
*/
const amigos = ['Juan', 'Pedro', 'Maria', 'Ana']
amigos.splice(1, 2, 'Carlos') // Elimina a Pedro y Maria e inserta a Carlos en la posición 1
console.log(amigos) // ['Juan', 'Carlos', 'Ana']

/*
    Metodo slice()
    -Crea un nuevo array a partir de un array existente.
    -1er parametro: posición de inicio.
    -2do parametro: posición de fin.
*/
const frutas = ['manzana', 'pera', 'uva', 'sandia', 'melon', 'platano']
const frutasSeleccionadas = frutas.slice(0,3) // Crea un nuevo array con las frutas manzana, pera y uva
console.log(frutasSeleccionadas) // ['manzana', 'pera', 'uva']