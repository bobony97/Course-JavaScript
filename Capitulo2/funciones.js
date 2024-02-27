// let frase = `Hola ${nombre}, como estas?`; 

//Una funcion es una porcion o bloque de codigo
//Funcion sin retorno
// function saludar() {
//     let saludo = prompt("Hola, como estas?");
//     if (saludo == "bien") {
//         alert("genial");
//     } else {
//         alert("que mal");
//     }
// }

//----------------------------------------------------------------------

//Funcion con retorno
// function saludar() {
//     alert("hola");
//     return "3";  //El "return" termina la funcion
// };

//----------------------------------------------------------------------

//Funciones con parametros
// function sumar(num1, num2) {
//     return num1 + num2;
// }
// document.write(sumar(10,20));

//----------------------------------------------------------------------

//Funciones flecha
// const saludar = function(nombre) {
//     let frase = `Hola ${nombre}, como estas?`;
//     document.write(frase);
// }
// saludar("pedro");

// const saludar = (nombre) => {  
//     let frase = `Hola ${nombre}, como estas?`;  
//     document.write(frase);
// }

// const saludar2 = nombre => document.write(nombre);  //Si solo hay un parametro no es necesario utilizar el parentesis y/o si es de una sola linea de codigo se puede utilizar asi
// saludar2("pedro");
