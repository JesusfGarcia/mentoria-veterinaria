const obtenerBinario = (numero) => {
  console.log(`El número a transformar a binario es: ${numero}`);
  let potencia = 0;
  let sumaPotencia = 0;

  do {
    sumaPotencia += Math.pow(2, potencia);
    if (sumaPotencia < numero) {
      potencia++;
    }
  } while (numero > sumaPotencia);

  let binario = "";
  let numeroRestante = numero;

  for (let i = potencia; i >= 0; i--) {
    const cantidad_comparar = Math.pow(2, i);
    if (numeroRestante >= cantidad_comparar && numeroRestante > 0) {
      binario = `${binario}1`;
      numeroRestante = numeroRestante - cantidad_comparar;
    } else {
      binario = `${binario}0`;
    }
  }

  return binario;
};

//console.log(`escrito en número binario es: ${obtenerBinario(23)}`);

const imprimirBinario = (numero) => {
  let sobrante = numero;
  let binario = "";

  while (sobrante >= 1) {
    const residuo = sobrante % 2;
    binario = `${residuo}${binario}`;
    const resta = Math.floor(sobrante / 2);
    sobrante = resta;
  }

  console.log(binario);
};

console.log("Escribe el número a transformar en binario:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
  imprimirBinario(data);
  //process.exit();
});
