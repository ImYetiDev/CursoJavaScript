const nombres = ['Arturo', 'Andres', 'Alejandro', 'Ana','Robertp', 'Andrea', ]

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] !== 'A'){
        console.log('No se imprimen los nombres que no empiezan con A');
        console.log(nombres[i]);
        break;
    }
    console.log(nombres[i]);
}

// Arturo, Andres, Alejandro y Ana son los unicos que se imprimen, ya que cuando llega a Robertp, la condicion se cumple y se sale del ciclo

/* Continue */

const invitados = ['Arturo', 'Andres', 'Alejandro', 'Ana','Roberto', 'Andrea', 'Erick', 'Ricardo', 'Raul', 'Rosa', 'Rocio']
console.log('Invitados a la fiesta: ');

for(let i = 0; i < invitados.length; i++){
    if(invitados[i] === 'Roberto'){
        // No se imprime Roberto
        continue;
    }
    console.log(invitados[i]);

}