
/*
ACTIVIDAD 2: FUNDAMENTOS DE JAVASCRIPT

Tema 1: Conceptos fundamentales de JavaScript
Tema 2: Selección y manipulación de elementos HTML

Nombre: José Tadeo Macareno García
Matrícula: 25040032
*/
/* ==================================================
   TEMA 1. CONCEPTOS FUNDAMENTALES DE JAVASCRIPT
   ================================================== */
/* 1. VARIABLES Y CONSTANTES

Las variables son contenedores que guardan datos que podemos utilizar durante
el programa. El var tiene alcance de función, let de bloque
y const no permite reasignar una variable, precisamente porque actúa como una constante.

Sintaxis: let nombre = valor;
Ejemplo:
*/

let nombre = "Tadeo";
var edad = 19;
const carrera = "Desarrollo de Software";

nombre = "Carlos";
console.log(nombre, edad, carrera);
// cambiamos el valor del name porque es una variable, imprime la edad y conserva la carrrera

/* 2. TIPOS DE DATOS

JavaScript maneja cadenas con string, números como number,
booleanos o lógicos (boolean), null, undefined, arreglos (array)
y objetos (object); cada uno de esos  tipos permite almacenar distinta
clase de información.

jQuery utiliza los mismos tipos de datos de JavaScript pero es más que nada para manipular
elementos HTML.
*/

let texto = "Hola"; //string
let numero = 25; //number
let activo = true; //boolean
let vacio = null; //nulos
let sin_definir = undefined; //no definidos
let colores = ["azul", "rojo", "verde"]; //arreglo de datos
let usuario = { nombre: "Tadeo", edad: 20 }; //objeto con propiedades

console.log(texto, numero, activo, vacio, sin_definir); //imprime los valores de las variables
console.log(colores, usuario); 


/* 3. OPERADORES

Los operadores aritméticos son los que realizan cálculos, los de
comparación comparan valores, los lógicos combinan
condiciones y los de asignación modifican variables.

== permite conversión de tipos, mientras que === compara
también el tipo de dato, estos como tal no requieren jQuery.
*/

let precio = 100;
let cantidad = 2;

console.log(precio * cantidad);
console.log(precio == "100");
console.log(precio === "100");
console.log(precio > 0 && cantidad > 0);

precio += 50;
console.log(precio);

/* 4. CONDICIONALES

Las condicionales permiten tomar decisiones según una
condición, están desde if, else if y else, se encargan de evaluar diferentes casos;
switch permite elegir entre varias opciones.

jQuery no tiene condicionales propias, ya que se utiliza
la sintaxis normal de JavaScript.
*/

if (edad>=18) { //programa de comparación de edades
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

let opcion=1;

switch (opcion) {
    case 1:
        console.log("Inicio");
        break;
    case 2:
        console.log("Configuración");
        break;
    default:
        console.log("Opción no válida");
} //se evalúan los casos para mostrar algo determinado en c/u


/* 5. CICLOS

Los ciclos repiten instrucciones. El for se utiliza cuando
conocemos el recorrido, while comprueba la condición
antes de repetir y do while se ejecuta al menos una vez.
forEach permite recorrer los elementos de un arreglo.

jQuery puede combinarse con estos ciclos para manipular
elementos HTML, pero no cambia su sintaxis.
*/

for (let i = 0; i < 3; i++) {
    console.log(i);
}

let contador = 0;

while (contador < 3) {
    contador++;
}

do {
    contador--;
} while (contador > 0);

colores.forEach(function(color) {
    console.log(color);
});


/* 6. FUNCIONES

Las funciones agrupan instrucciones reutilizables.
Los parámetros reciben datos de entrada y return devuelve
un resultado. Las funciones flecha ofrecen una sintaxis
más corta. jQuery puede utilizar funciones para responder
a eventos, como el clic de un botón.
*/

function sumar(a, b) {
    return a + b;
}

const multiplicar = (a, b) => a * b;

console.log(sumar(5, 3));
console.log(multiplicar(5, 3));


/* ==================================================
   TEMA 2. SELECCIÓN Y MANIPULACIÓN DE ELEMENTOS HTML

   Los siguientes son ejemplos de sintaxis. Para ejecutarlos
   se necesita un documento HTML cargado en el navegador.
   Los ejemplos de jQuery requieren incluir esa biblioteca.
   ================================================== */


/* 7. SELECCIONAR POR ID

Un ID identifica un elemento específico de la página.
*/
//JavaScript:
let titulo = document.getElementById("titulo");

//jQuery equivalente:
let titulo = $("#titulo");

/* 8. SELECCIONAR POR CLASE

Una clase puede compartirse entre varios elementos.

JavaScript:*/
let mensajes = document.getElementsByClassName("mensaje");

//jQuery equivalente:
let mensajes = $(".mensaje");

/* 9. SELECCIONAR POR ETIQUETA

Permite seleccionar elementos por su etiqueta HTML,
como p, div, input o button.

JavaScript:*/
let parrafos = document.getElementsByTagName("p");

//jQuery equivalente:
let parrafos = $("p");

/* 10. SELECTORES CSS

querySelector() devuelve el primer elemento que coincide
con el selector CSS indicado.*/

//JavaScript:
let elemento = document.querySelector("div.mensaje p");

//jQuery equivalente:
let elemento = $("div.mensaje p").first();

/* 11. SELECCIONAR VARIOS ELEMENTOS

querySelectorAll() devuelve todos los elementos que
coinciden con el selector. Se pueden recorrer con forEach.*/

//JavaScript:
let botones = document.querySelectorAll(".boton");

botones.forEach(function(boton) {
    boton.textContent = "Presionar";
});

//jQuery equivalente:
$(".boton").text("Presionar");

/* 12. OBTENER Y MODIFICAR TEXTO

textContent permite consultar o cambiar el texto de un
elemento sin interpretar etiquetas HTML.*/

//JavaScript:
let mensaje = document.getElementById("mensaje");
let contenido = mensaje.textContent;
mensaje.textContent = "Nuevo texto";

//jQuery equivalente:
let contenido = $("#mensaje").text();
$("#mensaje").text("Nuevo texto");

/* 13. OBTENER Y MODIFICAR HTML

innerHTML permite consultar o modificar el contenido HTML
interno de un elemento, incluyendo sus etiquetas.*/

//JavaScript:
let contenido = document.getElementById("contenido");
contenido.innerHTML = "<strong>Texto importante</strong>";

//jQuery equivalente:
$("#contenido").html("<strong>Texto importante</strong>");

//No se debe insertar HTML procedente de fuentes no confiables.

/* 14. OBTENER Y MODIFICAR ATRIBUTOS

Los atributos proporcionan información adicional, como
href, src, title o disabled. getAttribute() consulta un
atributo y setAttribute() permite modificarlo.*/

//JavaScript:
let enlace = document.getElementById("enlace");
let direccion = enlace.getAttribute("href");
enlace.setAttribute("title", "Abrir enlace");

//jQuery equivalente:
let direccion = $("#enlace").attr("href");
$("#enlace").attr("title", "Abrir enlace");

/* 15. TRABAJAR CON CLASES CSS

classList permite agregar, quitar, alternar y comprobar
clases CSS de un elemento.*/

//JavaScript:
let caja = document.getElementById("caja");
caja.classList.add("activo");
caja.classList.remove("oculto");
caja.classList.toggle("seleccionado");
caja.classList.contains("activo");

//jQuery equivalente:
$("#caja").addClass("activo");
$("#caja").removeClass("oculto");
$("#caja").toggleClass("seleccionado");
$("#caja").hasClass("activo");


/* 16. MODIFICAR ESTILOS

La propiedad style permite cambiar directamente los
estilos CSS de un elemento. Para reutilizar estilos,
también se pueden modificar sus clases.*/

//JavaScript:
let cuadro = document.getElementById("cuadro");
cuadro.style.color = "blue";
cuadro.style.backgroundColor = "lightgray";
cuadro.style.fontSize = "20px";

//jQuery equivalente:
$("#cuadro").css("color", "blue");
$("#cuadro").css("background-color", "lightgray");
$("#cuadro").css("font-size", "20px");

/* ==================================================
   DIFERENCIAS GENERALES ENTRE JAVASCRIPT Y JQUERY

JavaScript es un lenguaje de programación que permite
crear lógica e interactividad. jQuery es una biblioteca
que simplifica tareas como seleccionar elementos HTML,
modificar contenido y manejar eventos.

Las variables, tipos de datos, operadores, condicionales,
ciclos y funciones pertenecen a JavaScript. jQuery no
es necesario para utilizarlos.

Para manipular el DOM, JavaScript ofrece métodos como
querySelector(), textContent y classList. jQuery ofrece
alternativas como $(), text(), addClass() y css().

Los ejemplos del Tema 2 requieren HTML en el navegador;
los equivalentes de jQuery requieren además la biblioteca.
*/