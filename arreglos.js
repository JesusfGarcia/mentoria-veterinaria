const numeritos = [10, 5, 23, 14, 21, 26, 27, 99, 2, 9, 15];

const resultado = numeritos
  .filter((num) => num > 10)
  .map((num) => num * 10)
  .reduce((a, b) => a + b);

console.log(resultado);

const listaMayores = [];

const listaMenores = [];

numeritos.forEach((elemento) => {
  if (elemento > 10) {
    return listaMayores.push(elemento);
  }
  if (elemento < 10) {
    return listaMenores.push(elemento);
  }
});

const multiplicarLista = (lista, cantidad) => {
  const arregloMultiplicado = [];

  lista.forEach((numero) => {
    arregloMultiplicado.push(numero * cantidad);
  });

  return arregloMultiplicado;
};

const sumarLista = (lista) => {
  let suma = 0;
  lista.forEach((numero) => {
    suma += numero;
  });
  return suma;
};

const listaMayoresMultiplicada = multiplicarLista(listaMayores, 10);
const listaMenoresMultiplicada = multiplicarLista(listaMenores, 20);

const listaMayoresSumada = sumarLista(listaMayoresMultiplicada);
const listaMenoresSumada = sumarLista(listaMenoresMultiplicada);

console.log(listaMayoresSumada);
console.log(listaMenoresSumada);
