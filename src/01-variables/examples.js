function saludar(nombre) {
return "Hola, " + nombre;
}
console.log(saludar("Ana"));

//EJEMPLO DECLARACIÓN VARIABLES CON LET

let cliente = "Germán";
cliente = "Ana";
cliente = 20;
console.log(cliente); // 20

let precio;
console.log(precio); // undefined
precio = 20.5;
console.log(precio); // 20.5

//EJEMPLO DECLARACIÓN VARIABLES CON CONST

//const cliente = "Germán";
// cliente = "Ana"; // TypeError en modo estricto habitual

const persona = { nombre: "Ana", edad: 30 };
persona.edad = 31; // válido: mutamos el objeto
persona = {};    // inválido: reasignación del enlace


//VARIABLES DECLARADAS CON VAR

function ejemplo() {
  if (true) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // 1 — aún visible
  // console.log(y); // ReferenceError
}

