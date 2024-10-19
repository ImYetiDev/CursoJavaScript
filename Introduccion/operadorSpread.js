/*
    Operador Spread
    Permite tomar los elementos de un array u objeto y expandirlos en otro
*/

const frutas = ['manzana', 'pera', 'uva']
const comidaFavorita = ['pizza', 'hamburguesa', 'tacos', ...frutas]
// ['pizza', 'hamburguesa', 'tacos', 'manzana', 'pera', 'uva']
console.log(comidaFavorita)

const datosLogin = {
    usuario: 'admin',
    password: '1234'
}

const usuario = {
    nombre: 'Juan',
    edad: 30,
    ...datosLogin
}
console.log(usuario)
// {nombre: 'Juan', edad: 30, usuario: 'admin', password: '1234'}



/*
    Operador Rest
    Permite agrupar los elementos de un array u objeto en otro
*/

const registrarUsuario = (nombre, edad, ...datosAdicionales) => {
    console.log(nombre)
    console.log(edad)
    console.log(datosAdicionales)
}

registrarUsuario('Juan', 30, 'admin', '1234', ' [email protected]')
// Juan 30 ['admin', '1234', ' [email protected]']



/*
    Destructuracion de objetos
    Nos permite extraer propiedades de un objeto y asignarlas a variables
*/

const amigos = ['Juan', 'Pedro', 'Luis']
const primerAmigo = amigos[0] // Juan
const segundoAmigo = amigos[1] // Pedro
const tercerAmigo = amigos[2] // Esta es la forma tradicional

const [amigo1, amigo2, amigo3] = amigos // Esta es la forma con destructuracion
console.log(amigo1) // Juan
console.log(amigo2) // Pedro
console.log(amigo3) // Luis

