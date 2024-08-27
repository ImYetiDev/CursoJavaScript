const persona = {
    nombre: 'Juan',
    edad: 25,
    casado: false,
    correo: 'juan@correo.com',
    subscipciones: {
        web: true,
        correo: true,
    },
    coloresFav: ['Rojo', 'Verde'],

    //Funcion dentro de un objeto
    saludar: function() {
        alert('Hola')
    }
}

//Acceder a los valores de un objeto
console.log(persona.nombre)
console.log(persona.subscipciones.correo)

//Agregar una propiedad a un objeto
persona.tel = '123456789'
console.log(persona.tel)

//Eliminar una propiedad de un objeto
delete persona.tel
console.log(persona.tel)