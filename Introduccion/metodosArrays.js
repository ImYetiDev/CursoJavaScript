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
    Metodo push()
    -Agrega un elemento al final del array.
*/
colores.push('violeta')
console.log(colores) // ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'rosa', 'violeta']