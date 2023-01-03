const lista = [40, 13, 22, 1, 90, 20, 52, 10, 3, 6];

for (let j = 0; j < lista.length; j++) {
  for (let i = j + 1; i < lista.length; i++) {
    const num_actual = lista[i];
    const valor_mini = lista[j];
    if (num_actual < valor_mini) {
      let reserva = valor_mini;
      lista[j] = num_actual;
      lista[i] = reserva;
    }
  }
}
