const nombre = "Jesús Francisco García Valdez";
const edad = 23;
const estaVivo = true;
const listaEmpleos = ["ley", "walmart"];

/* const Persona = {
  nombre: "Jesús Francisco García Valdez",
  edad: 23,
  estaVivo: true,
  listaEmpleos: ["ley", "walrmat"],
}; */

/* class Persona {
  constructor(nombre, edad, estaVivo, listaEmpleos) {
    this.nombre = nombre;
    this.edad = edad;
    this.estaVivo = estaVivo;
    this.listaEmpleos = listaEmpleos;
  }

  saludar() {
    console.log("hola como están, mi nombre es: " + this.nombre);
  }
}

const nuevaPersona = new Persona("Anna", 24, true, ["index", "compuMax"]);

nuevaPersona.saludar(); */

class Square {
  constructor(lado) {
    this.lado = lado;
  }

  getArea() {
    console.log(this.lado * this.lado);
  }

  getPerimeter() {
    console.log(this.lado * 4);
  }

  saludar(name) {
    console.log(`hola ${name} soy un cuadrado`);
  }
}

const cuadrado = new Square(10);

cuadrado.getArea();
cuadrado.getPerimeter();
cuadrado.saludar("Anna");

