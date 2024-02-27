let numero = 10;

// Bucle "while": Primero se pregunta y luego se ejecuta el bloque de codigo
// while (numero < 5) {  El bucle se va a ejecutar mientras la condicion sea verdadera
//     numero++;
//     document.write(numero + "<br>");
// }

//-------------------------------------------------------------------------------------------------

//Bucle "Do while": primero se ejecuta el bloque de codigo y despues se pregunta

// do {
//     document.write(numero + "<br>");
//     numero++;
// }while (numero < 5)

//-------------------------------------------------------------------------------------------------

//Sentencia "break":Indica mediante un condicional cuando debe de finalizar el bucle
// while (numero < 5) { 
//     numero++;
//     document.write(numero + "<br>");
//     if (numero == 3) {
//         break;
//     }
// }

//-------------------------------------------------------------------------------------------------

//Bucle "for": Este bucle se repite n veces indicadas
//Incremento
// for(let i = 0; i < numero; i++) {
//     document.write(i + "<br>")
// }

//Decremento
// for(let i = 0; i < numero; i++) {
//     if(i == 5) continue;              //Continue salta la iteracion y pasa a la siguiente
//     document.write(i + "<br>")      
// }

//-------------------------------------------------------------------------------------------------

// //Bucle "for in" - "for of"
// let animales = ["perro", "gato", "loro"];

// //for in devuelve la posicion del array en la que se encuentra el valor, es utilizado para recorrer objetos, conocer posiciones y operar con sus objetos
// for (animal in animales) {
//     document.write(animal + "<br>")
// }

// document.write("<br>")

// //for of devuelve el valor de cada indice, tambien recorre los atributos de los objetos
// for (animal of animales) {
//     document.write(animal + "<br>")
// }

//-------------------------------------------------------------------------------------------------

//Sentencia label: Permite asociar un bucle a un nombre para poder finalizarlo en el momento deseado
// let array1 = ["maria", "josefa", "roberta"];
// let array2 = ["pedro", "marcelo", array1, "josefina"];

// primerFor:
// for(let array in array2) {
//     if(array == 2) {
//         for(let array of array1) {
//             document.write(array + "<br>")
//             break primerFor;
//         } 
//     } else {
//         document.write(array2[array] + "<br>")
//     }
// }
