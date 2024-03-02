//Creacion de un array
let frutas = ["banana", "manzana", "pera"];

//document.write(frutas); Accedemos a los valores del array
//document.write(frutas[0]); Accedemos al primer valor del array del array

//Arrays asociativo 
let pc = {
    nombre: "DaltoPc",
    procesador: "Intel Core i7",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `El nombre de mi pc es: <b>${nombre}</b> <br> 
             El procesador es: <b>${procesador}</b> <br>
             La ram es de: <b>${ram}</b> <br>
             El espacio es de: <b>${espacio}</b> <br>`

document.write(frase);