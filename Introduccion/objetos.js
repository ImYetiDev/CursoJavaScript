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
