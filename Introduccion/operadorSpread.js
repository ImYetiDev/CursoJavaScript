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