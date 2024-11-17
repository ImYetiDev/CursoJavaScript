/*
    Estrucutra de una clase en JavaScript
    -Definir una clase
    -Propiedades: son las caracteristicas de la clase (variables)
    -Metodos: son las acciones que puede realizar la clase (funciones)
    -Constructor: es un metodo especial que se ejecuta al instanciar la clase
    -Instanciar una clase
*/

class Usuario{
    tipo = 'Usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}