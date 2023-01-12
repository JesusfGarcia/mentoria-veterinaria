//declaramos un arreglo para explorarlo
const arreglo = [0, 1, 2, 3, 4, 5, 6];

//declaro una variable, que va a ser igual a la posicion maxima de mi arreglo, en este caso 7 - 1
/* let decrementor = arreglo.length - 1;

//ciclo for para ir del 0 al 6
for (let i = 0; i < arreglo.length; i++) {
  //imprimo i
  // console.log("valor de i", i);
  //imprimo decrementor
  // console.log("valor de decerementor", decrementor);

  //simulando que entramos a un arreglo 8)
  console.log(`arreglo[${i}][${decrementor}]`);

  //le restamos uno a decrementor para que en la siguiente iteracion i se sume y decrementor se reste
  decrementor--;
}
 */
function diagonalDifference(arr) {
  //en esta linea declaras mat
  let mat = [0, 0];
  //si es cierto que te puede servir así, es mejor tenerlo en dos valores
  let sumaIzq = 0;
  let sumaDer = 0;
  for (let i = 0; i < arr.length; i++) {
    //mal escrito, no se está accediendo a nada,
    let ladoIzq = [i][0 + i];
    let ladoDer = [i][arr.length - 1 - i];
    //bien escrito, accedemos a la posición exacta del arreglo
    let ladoIz = arr[i][i];
    let ladoDe = arr[i][arr.length - 1 - i];

    mat = [mat[0] + ladoIzq, ladoDer[ladoDer[i] + ladoDer]];
  }
}
