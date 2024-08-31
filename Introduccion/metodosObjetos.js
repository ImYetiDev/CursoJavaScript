const usuario = {
    nombre: 'Juan',
    edad: 24,
    amigos: ['Pedro', 'Maria', 'Ana'],
    saludo: () => {
        console.log('Hola!')
    }
}

/*
    Metodos propios de los objetos
    Los objetos pueden tener metodos personalizados.
*/
usuario.saludo() // Hola!

/*
    Metodo Object.keys()
    -Devuelve un array con las propiedades del objeto.
*/
const propiedades = Object.keys(usuario)
console.log(propiedades) // ["nombre", "edad", "amigos", "saludo"]

/*
    Metodo Object.values()
    -Devuelve un array con los valores de las propiedades del objeto.
*/
const valores = Object.values(usuario)
console.log(valores) // ["Juan", 24, ["Pedro", "Maria", "Ana"], ƒ]

/*
    Metodo Object.entries()
    -Devuelve un array con las propiedades y valores del objeto.
*/
const propiedadesValores = Object.entries(usuario)
console.log(propiedadesValores) // [["nombre", "Juan"], ["edad", 24], ["amigos", Array(3)], ["saludo", ƒ]]
console.log(`El objeto tiene ${propiedadesValores.length} propiedades`) // El objeto tiene 4 propiedades