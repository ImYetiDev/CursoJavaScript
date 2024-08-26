const array = [1, 2, 3, 4, 5]
console.log(array[0])

const amigos = ['Juan', 'Pedro', 'Pablo']
console.log(amigos[1])

//Asignar valores a un array vacío
//De este modo tambien se puede sobreescribir un valor en un array
const colores = []
colores[0] = 'Rojo'
colores[1] = 'Verde'
console.log(colores[0])

//Propiedad para ver la cantidad
console.log('Longitud del array:', colores.length)

//Agregar un elemento al final del array
colores.push('Azul')
console.log(colores)

//Eliminar el último elemento del array
colores.pop()
console.log(colores)

//Eliminar el primer elemento del array
colores.shift()
console.log(colores)

//Agregar un elemento al principio del array
colores.unshift('Amarillo')
console.log(colores)