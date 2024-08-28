//Para definir un parametro por defecto se coloca el signo de igual y el valor por defecto
const saludo = (name = 'Mundo') => {
    console.log(`Hola ${name}`)
}

saludo('Mundo')
saludo('Juan')

saludo()

/*
    Parametros: Los valores especificados en la definicion de la funcion
    Argumentos: Los valores que se pasan a la funcion cuando se invoca
*/

// Multiples parametros

const suma = (a, b) => {
    console.log(a + b)
}

suma(1, 2)

const operacion = (tipo, a, b) => {
    if (tipo === 'suma') {
        console.log(a + b)
    } else if (tipo === 'resta') {
        console.log(a - b)
    } else if (tipo === 'multiplicacion') {
        console.log(a * b)
    } else if (tipo === 'division') {
        console.log(a / b)
    } else {
        console.log('Operacion no valida')
    }
}

operacion('suma', 1, 2)
operacion('resta', 1, 2)
operacion('multiplicacion', 1, 2)
operacion('division', 1, 2)