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