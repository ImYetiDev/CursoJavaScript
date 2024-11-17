const nombres = ['Arturo', 'Andres', 'Alejandro', 'Ana','Robertp', 'Andrea', ]

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] !== 'A'){
        break;
    }
    console.log(nombres[i]);
}

// Arturo, Andres, Alejandro y Ana son los unicos que se imprimen, ya que cuando llega a Robertp, la condicion se cumple y se sale del ciclo