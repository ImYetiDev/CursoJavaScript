/*
    Ciclo forEach
    El ciclo forEach es una forma de recorrer un arreglo de elementos, es una forma más moderna y sencilla de hacerlo.
    El ciclo forEach recibe una función como argumento, esta función a su vez recibe como argumento cada uno de los elementos del arreglo.
    // Sintaxis
    arreglo.forEach(function(elemento){
        // Codigo a ejecutar
    })
*/
const nombres = ['Arturo', 'Andres', 'Alejandro', 'Ana','Robertp', 'Andrea', ]
nombres.forEach((amigo, index) => {
    console.log(`${index + 1}.- ${amigo}`);
})
// 1.- Arturo, 2.- Andres, 3.- Alejandro, 4.- Ana, 5.- Robertp, 6.- Andrea
//codigo en una linea
amigos.forEach((amigo,index) => console.log(`El amigo #${index} es: ${amigo}`))

/*
    Ciclo for in
    Nos permite recorrer las propiedades de un objeto
*/
const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'correo@correo.com'
}

for (propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
// nombre: Carlos, edad: 27, correo: correo@correo.com

for(propiedad in persona){
    persona[propiedad] = 'Nuevo valor'
}
console.log(persona) // {nombre: "Nuevo valor", edad: "Nuevo valor", correo: "Nuevo valor"}

/*
    Ciclo for of
    Nos permite recorrer los elementos de un arreglo u oojecto iterable
    Arreglos, cadenas de texto, map, set, arguments, listas de nodos etc.
*/

