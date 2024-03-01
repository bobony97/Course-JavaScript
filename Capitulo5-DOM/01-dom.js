//Nodo: Es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista 
//TIPOS DE NODOS.
//Document: Es el nodo raiz, a partir del cual derivan el resto de nodos.
//Element: Nodos definidos por etiquetas html.
//Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto)
//Attribute: Los atributos de las etiquetas definen nodos, (en js no los veremos como nodos, sino como informacion asosiada el nodo te tipo element)
//Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos

//---------------------------------------------------------------------------------------------------------------

//METODOS DE SELECCION DE ELEMENTOS
// -getElementById() - Selecciona un elemento por ID
// -getElementByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada 
// -querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores
// -querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores 

// const rangoEtario = document.querySelector(".rangoEtario");   //Seleccionamos cualquier elemento del html a traves de su selector
// rangoEtario.setAttribute("type", "text");    //Este metodo permite cambiar los atributos del elemento seleccionado (El primer argumento es lo que queremos modificar y el segundo argumento es el nuevo valor)
// let valorDelAtributo = rangoEtario.getAttribute("type");   //Obtenemos el valor del atributo "type" en el rangoEtario
// valorDelAtributo = rangoEtario.removeAttribute("type");  //Elimina el atributo

//---------------------------------------------------------------------------------------------------------------

//ATRIBUTOS GLOBALES
// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contentEditable", "true");  //contentEditable permite editar desde la web el contenido (en este caso un h1)
// titulo.setAttribute("hidden", "true");  //Permite ocultar el elemento

//---------------------------------------------------------------------------------------------------------------

//ATRIBUTOS DE INPUTS
// const input = document.querySelector(".input-normal");
// input.className //Muestra el nombre de la clase
// input.value //Muestra el valor del input
// nput.type="text" //Cambia el atributo del input
// input.accept = "image/png" //Sirve para los input type="file" para indicar el tipo de archivo aceptado
//                            //El atributo "form" permite vincular un input a un formulario a traves de su id cuando este input esta fuera del form
// input.minLength = "43";  //Indica la cantidad minima de caracteres que debe tener un input
//                          //placeholder permite poner en el input un valor por defecto
// input.required = true;   //Indica que un campo requerido

//---------------------------------------------------------------------------------------------------------------

//ATRIBUTO STYLE (utilizacion de las palabras con camelCase)
// const titulo = document.querySelector(".titulo");
// titulo.style.color = "#321";   //Cambiamos el color de las letras
// titulo.style.backgroundColor = "#123"; //Cambia el color del fondo



