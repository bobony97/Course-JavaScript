//METODOS TRANSFORMADORES Estos métodos son aquellos que SÍ modifican (mutan) nuestro arreglo sin necesidad de que el resultado sea nuevamente asignado a la variable
//pop(); Elimina el ultimo elemento de un array y lo devuelve
// let nombres = ["pedro", "maria","jorge"];
// nombres.pop();
// document.write(nombres);

//---------------------------------------------------------------------------------

//shift(); Elimina el primer elemento de un array y lo devuelve
// let nombres = ["pedro", "maria","jorge"];
// nombres.shift();
// document.write(nombres);

//---------------------------------------------------------------------------------

//push(); Agrega un elemento al final del array
// let nombres = ["pedro", "maria","jorge"];
// nombres.push("juancito");    //Devuelve como valor la posicion del ultimo elemento agregado
// document.write(nombres);

//---------------------------------------------------------------------------------

//reverse(); Invierte el orden de los elementos de un array
// let nombres = ["pedro", "maria","jorge"];
// nombres.reverse();
// document.write(nombres);

//---------------------------------------------------------------------------------

//unshift(); Agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
// let nombres = [3, 4, 5];
// nombres.unshift(0, 1, 2);  //Agrega 0, 1, 2 al inicio del array
// document.write(nombres);

//---------------------------------------------------------------------------------

//sotr(); Ordena los elementos de un array localmente y devuelve ordenado (orden lexicografico - de menor a mayor)
// let nombres = ["pedro", "maria","jorge"];
// nombres.sort();
// document.write(nombres);

//splice(); Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos 
// let nombres = ["pedro", "maria", "jorge", "juan", "lucas"];
// //nombres.splice(2, 2);  //Primero indicamos la posicion de inicio y luego la cantidad de elementos a eliminar incluyendo la posicion inicial (eliminaria "jorgue y juan")
// nombres.splice(2, 2, "pi"); //Elimina "jorgue, juan" y agrega "pi" antes de "lucas" y despues de "maria" y si quisieramos solamente agregar colocamos "cero" en el segundo argumento
// document.write(nombres);

//---------------------------------------------------------------------------------


//METODOS ACCESORES: Estos métodos NO modifican el arreglo (no mutan) y retornan un nuevo array

//join(): Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
// let numeros = [1, 2, 3, 4, 5];
// let resultado = numeros.join("<br>Elemento: ");  //Tambien podemos agregar argumentos para dividir los elementos del array y transformarlos a string
// document.write(resultado);

//---------------------------------------------------------------------------------

//slice(): Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (sin incluir el fin)
// let numeros = [1, 2, 3, 4, 5];
// let resultado = numeros.slice(0, 3);  //El primer argumento marca el inicio y el segundo el fin (pero no incluye el fin)
// //let resultado = numeros.slice(0, -1); En el caso de no saber el largo del array colocamos "-1" y va a devolver todos los valores indicados menos el ultimo
// //let resultado = numeros.slice(0);  Para devolver todos solo dejamos el "cero"
// document.write(resultado); 

//---------------------------------------------------------------------------------


//METODOS DE CADENAS EN ARRAYS
//toString():Convierte todo en un string
//indexOf(): Devuelve el indice del primer caracter de la cadena, si no existe devuelve -1
//lastIndexOf(): Devuelve el ultimo indice del primer caracter de la cadena, si no existe devuelve -1
//includes(): Si una cadena puede encontrarse dentro de otra, devuelve true, sino devuelve false

//---------------------------------------------------------------------------------


//METODOS DE REPETICION
//filter(): Crea un nuevo array con todos los elementos que cumplan las condiciones
// let nombres = ["juan", "pedro", "pi", "lucas", "maria"];
// nombres.filter(nombre => document.write(nombre + "<br>"));
// let resultado = nombres.filter(nombre => nombre.length > 2);  //En este caso va a mostrar los nombres cuya cantidad de letras sea mayor a 2
// document.write(resultado);

//---------------------------------------------------------------------------------

//forEach(): Ejecuta la funcion indicada una vez por cada elemento del array
// let numeros = [1, 2, 3, 4, 5];
// numeros.forEach(numero => document.write(numero + "<br>"));




