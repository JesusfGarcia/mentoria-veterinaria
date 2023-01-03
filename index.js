const string = "anna";
const string2 = "ochoa";

const nombreCompleto = string + " " + string2;

const template = `mi nombre es: ${string} ${string2}`;

//////////numeros

let contador = 15;

const stringNumber = "15";

//console.log(contador + parseInt(stringNumber))

////////boolenos

let calificacion = 75;

const minAprobatorio = 70;

/*comparadores
=== va a devolver verdadero, cuando ambos valores sean iguales
> va a devolver verdadero, cuando la unidad de la izquierda sea mayor que la derecha
< va a devolver verdadero, cuando la unidad de la izquierda sea menor que la de la derecha
>= va a devolver verdadero, cuando la unidad de la izquierda sea mayor que la derecha o sea igual
<= va a devolver verdadero, cuando la unidad de la izquierda sea menor que la derecha o sea igual
!== va a devolver verdadero, cuando los valores sean distintos
*/

const aprobado = calificacion >= minAprobatorio;

/* if (aprobado && false) {
  //el codigo que se va a ejecutar si la condicion se cumple
  console.log("Felicidades estas aprobado");
} else {
    console.log("Lo sentimos mucho, pero estas desaprobado")
} */

//arreglos

const lista = [
  "anna",
  "ochoa",
  "jesus",
  "garcia",
  "fulanito",
  "jaimito",
  "poncho",
  "pablo",
];

//recorrer la lista

function verificarI(palabra) {
  //aqui va la lógica de la función
  for (let j = 0; j < palabra.length; j++) {
    //vamos a identificar la letra
    const letra = palabra[j];
    //verificaremos si la letra es una i
    if (letra === "i") {
      //imprimir la palabra
      console.log("esta palabra contiene una i: ", palabra);
      break;
    }
  }
}

function resta(a = 0, b = 0) {
  //console.log("alksjdfñlas");
}

const resultado = resta(10, 15);

const suma = (a, b) => a + b;

//lista.forEach((palabra) => verificarI(palabra));

const numeros = [10, 5, 23, 14, 21, 26, 2, 99];

 const numerosMayores = numeros.filter((item) => item > 10);
const numerosMenores = numeros.filter((item) => item < 10);

console.log(numerosMayores)
console.log(numerosMenores)
 

/* const numerosMayores = [];
const numerosMenores = [];

for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  if (element > 10) {
     return numerosMayores.push(element);
  }
  if (element < 10) {
    numerosMenores.push(element);
  }
}


console.log(numerosMayores);
console.log(numerosMenores) */


const ultimosnumeros = [10, 5, 23, 14, 21, 26, 2, 99];

const listamultiplicada = ultimosnumeros.map(item => item * 10)

console.log(listamultiplicada)