
// EJERCICIO 1

let nombre= "Elisabeth";
console.log(nombre);
nombre= "Ana";
console.log(nombre);

// EJERCICIO 2

const PI= 3.1416;
console.log(PI);
//PI= 4.3;
//console.log(PI);
//exercises.js:13 Uncaught TypeError: Assignment to constant variable. at exercises.js:13:3

// EJERCICIO 3

let edad;
console.log(edad);
edad= 25;
console.log(edad);

// EJERCICIO 4

let precioBase= 180;  //El precio base lo declaré como let puesto que es un precio que puede cambiar
const IVA= 0.21; //El IVA considero que debe ser constante puesto que es algo que no cambia
let precioFinal= precioBase + (precioBase *  IVA);
console.log(precioFinal);

// EJERCICIO 5

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

//Este código imprimirá en el primer console.log un 2 y el el segundo console.log otro 2

// EJERCICIO 6

const lista = [1, 2];
lista.push(3);
console.log(lista);
//lista = [];

//Se imprimirá 1,2,3 y un error puesto que la lista es una constatnte y no se pueden reasignar sus valores

// EJERCICIO 7

//let a = "Ana";
let nombrePersona = "Ana";

//let b = 30;
let edadPersona = 30;

//let c = true;
let tieneTrabajo = true;

//let d = 1250.5;
let sueldoMensual = 1250.5;

// RETO

//for (var i = 0; i < 3; i++) {
 // setTimeout(() => console.log(i), 0);
//}

//Imprime 3 números 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

//Imprime 0 1 2