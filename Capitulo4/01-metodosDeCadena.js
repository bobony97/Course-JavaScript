//concat(): Junta 2 o mas cadenas y retorna una nueva;
// let cadena = "Cadena de prueba";
// let cadena2 = " cadena 2"
// let resultado = cadena.concat("hola");
// let resultado2 = cadena.concat(cadena2);
// document.write(resultado);
// document.write(resultado2);

//------------------------------------------------------------------------------------------------------------------------- */ */

//startsWith(): Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false

// let cadena = "cadena de prueba";
// let cadena2 = "cadena 2"
// let resultado = cadena.startsWith(cadena2);  
// document.write(resultado);  //En este caso da true ya que ambas cadenas comienzan con las mismas letras

//------------------------------------------------------------------------------------------------------------------------- */ */

//endsWith(): Si una cadena finaliza con los caracteres de otra cadena, devuelve true, sino devuelve false

// let cadena = "cadena de prueba";
// let cadena2 = "cadena 2"
// let resultado = cadena.endsWith(cadena2);  //En este caso devuelve false ya que ambos cadenas terminan con diferentes caracteres
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */ */

//includes(): Si una cadena puede encontrarse dentro de otra, devuelve true, sino devuelve false

// let cadena = "sigo a dalto en instagram";
// let cadena2 = "instagram"
// let resultado = cadena.includes(cadena2);   //En este caso devuelve true ya que la cadena2 si se encuenta dentro de la cadena1
// document.write(resultado); 

//------------------------------------------------------------------------------------------------------------------------- */ */

//indexOf(): Devuelve el indice del primer caracter de la cadena, si no existe devuelve -1

// let cadena = "sigo a dalto en instagram";
// let cadena2 = ""
// let resultado = cadena.indexOf("instagram");  //En este caso el resultado es 16, ya que la cadena "instagram" se puede encontrar a partir de la posicion 16 (indexOf()) cuenta de izquierda a derecha
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */ */

//lastIndexOf(): Devuelve el ultimo indice del primer caracter de la cadena, si no existe devuelve -1

// let cadena = "sigo a dalto en instagram pi";
// let cadena2 = ""
// let resultado = cadena.lastIndexOf("i");  //En este caso el resultado es 27, ya que la cadena "i" se puede encontrar a partir de la posicion 27 (lastIndexOf()) cuenta de atras para delante
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */ */

//lastIndexOf(): Devuelve el ultimo indice del primer caracter de la cadena, si no existe devuelve -1

// let cadena = "sigo a dalto en instagram pi";
// let cadena2 = ""
// let resultado = cadena.lastIndexOf("i");  //En este caso el resultado es 27, ya que la cadena "i" se puede encontrar a partir de la posicion 27 (lastIndexOf()) cuenta de atras para delante
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */ */

//padStart() [propuesta estandar]: Rellena la cadena al principio con los caracteres deseados

// let cadena1 = "abc";
// let cadena2 = ""
// let resultado = cadena1.padStart(5, "1");  //En este caso va a rellenar la "cadena1" con "1" hasta tener 5 caracteres en la cadena
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */ */

//padEnd() [propuesta ECMA]: Rellena la cadena al final con los caracteres deseados

// let cadena1 = "abc";
// let cadena2 = ""
// let resultado = cadena1.padEnd(20, "123456");  //En este caso va a rellenar la "cadena1" con "1" desde el final hasta tener 5 caracteres en la cadena
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */ */

//repeat(): Devuelve la misma cadena pero repetida la cantidad de veces indicada

// let cadena1 = "abc ";
// let cadena2 = ""
// let resultado = cadena1.repeat(3);  //En este caso va a repetir la "cadena1" 3 veces incluyendo el espacio
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */
//split(): Divide la cadena como se lo indicamos y la devuelve como un array

// let cadena1 = "Hola,como,estas";
// let cadena2 = ""
// let resultado = cadena1.split(",");  //En este caso la "cadena1" queda dividida por las "," en 3 indices de un array y elimina la ","
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */

//substring(): Devuelve un pedazo de la cadena como se lo indiquemos

// let cadena1 = "ABCDEFGHI";
// let cadena2 = ""
// let resultado = cadena1.substring(0,5);  //En este caso devuelve "ABC" ya que le indicamos con el primer argumento que empiece desde "0" y con el segundo argumento "3" que la separe en el tercer caracter
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */

//toLowerCase(): Convierte una cadena a minusculas

// let cadena1 = "ABCDEFGHI";
// let cadena2 = ""
// let resultado = cadena1.toLowerCase();  //En este caso devuelve la "cadena1" en minusculas
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */

//toLowerCase(): Convierte una cadena a mayusculas

// let cadena1 = "abcde";
// let cadena2 = ""
// let resultado = cadena1.toUpperCase();  //En este caso devuelve la "cadena1" en mayusculas
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */

//toString(): Convierte todo en un string

// let cadena1 = 3551;
// let cadena2 = ""
// let resultado = cadena1.toString();  //En este caso convierte los numero de "cadena1" en string
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */

//trim(): Elimina los espacios en blanco en una cadena

// let cadena1 = "Hola, como estas";
// let cadena2 = ""
// let resultado = cadena1.trim(); 
// document.write(resultado);

//------------------------------------------------------------------------------------------------------------------------- */

//trim(): Elimina los espacios en blanco en una cadena
//trimStart(): Elimina los espacios en blanco del comienzo
//trimEnd(): Elimina los espacios en blanco del final
//length: Devuelve la cantidad de caracteres de una cadena

// let cadena1 = "Hola, como estas";
// let resultado = cadena1.trimStart(); 
// document.write(resultado.length);


