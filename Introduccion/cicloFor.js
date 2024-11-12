const nombres = ['Juan', 'Pedro', 'Pablo', 'Luis', 'Carlos'];
nombres.forEach((nombre, index) => {
    console.log(`${index + 1}.- ${nombre}`);
}) // 1.- Juan, 2.- Pedro, 3.- Pablo, 4.- Luis, 5.- Carlos

for(let i = 0; i < 11 ; i++){
    console.log(i);
} // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10