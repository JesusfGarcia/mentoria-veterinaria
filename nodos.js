class Nodo {
  constructor(valor = null, menor = null, mayor = null) {
    this.valor = valor;
    this.menor = menor;
    this.mayor = mayor;
  }

  recorrerAscendente() {
    if (this.menor !== null) {
      this.menor.recorrerAscendente();
    }
    console.log(this.valor);
    if (this.mayor !== null) {
      this.mayor.recorrerAscendente();
    }
  }

  recorrerDescendente() {
    if (this.mayor !== null) {
      this.mayor.recorrerDescendente();
    }
    console.log(this.valor);
    if (this.menor !== null) {
      this.menor.recorrerDescendente();
    }
  }

  ingresarHijo(parametro) {
    if (parametro > this.valor && this.mayor !== null) {
      return this.mayor.ingresarHijo(parametro);
    }
    if (parametro > this.valor && this.mayor === null) {
      return (this.mayor = new Nodo(parametro));
    }
    if (parametro < this.valor && this.menor !== null) {
      return this.menor.ingresarHijo(parametro);
    }
    if (parametro < this.valor && this.menor === null) {
      return (this.menor = new Nodo(parametro));
    }
  }

  rellenar(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      let numero = arreglo[i];
      if (this.valor === null) {
        this.valor = numero;
      } else {
        this.ingresarHijo(numero);
      }
    }
  }
}

const arreglo = [10, 2, 45, 33, 21, 13, 1, 50, 47, 99, 3];

const raiz = new Nodo();
raiz.rellenar(arreglo);

console.log("hola mundo")

const recorrer_asc = () => {
  raiz.recorrerAscendente();
};

//raiz.recorrerDescendente();
