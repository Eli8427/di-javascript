\# 01 · Variables



\## Ejercicio 1 - Declara con 'let' una variable 'nombre' y asígnale tu nombre. Muéstrala en consola, reasígnale otro nombre y vuelve a mostrarla. ##



\*\*Explicación.\*\*



Declaro la variable con 'let' por dos motivos, el primero que lo indica así el enunciado y el segundo que quiero cambiarle el valor más adelante.



\*\*Solución\*\*



let nombre= "Elisabeth";

console.log(nombre);

nombre= "Ana";

console.log(nombre);







\## Ejercicio 2 - Declara una constante 'PI' con el valor '3.1416'. Intenta reasignarla, observa el error en consola y deja la línea comentada con el nombre del error que se produce. ##



\*\*Explicación.\*\*



Al estar declarada como 'const' no podemos reasignar su valor puesto que es una constante y estas no pueden cambiar de valor, si quisiéramos cambiar de valor la variable tendríamos que haberla declarado como 'let' y así no tendríamos problema ninguno



\*\*Solución\*\*



const PI= 3.1416;

console.log(PI);

PI= 4.3;

console.log(PI);

//exercises.js:13 Uncaught TypeError: Assignment to constant variable. at exercises.js:13:3







\## Ejercicio 3 - Declara una variable 'edad' sin valor y muéstrala. Asígnale después un número y muéstrala de nuevo. ##



\*\*Explicación.\*\*



Declaré la variable como 'let' por lo de cambiar el valor, primero sale undefined debido a que hay que darles un valor a las variables para poder mostrarlas. Luego ya nos sale el 25 en mí caso puesto que le asignamos el valor.



\*\*Solución\*\*



let edad;

console.log(edad);

edad= 25;

console.log(edad);







\## Ejercicio 4 - Declara 'precioBase' con valor '100', 'iva' con '0.21' y calcula 'precioFinal'. Decide para cada una si debe ser 'let' o 'const' y justifícalo en un comentario. ##



\*\*Solución\*\*



let precioBase= 180;  //El precio base lo declaré como let puesto que es un precio que puede cambiar

const IVA= 0.21; //El IVA considero que debe ser constante puesto que es algo que no cambia

let precioFinal= precioBase + (precioBase \*  IVA);

console.log(precioFinal);







\## Ejercicio 5 - Predice qué imprime este código antes de ejecutarlo. Escribe tu predicción en un comentario y compárala con la consola. ##



let x = 1;

{

&#x20; let x = 2;

&#x20; console.log(x);

}

console.log(x);



\*\*Explicación\*\*



Se imprimirá 2 1, por tanto mi predicción fue errónea



\*\*Solución.\*\*



let x = 1;

{

&#x20; let x = 2;

&#x20; console.log(x);

}

console.log(x);



//Este código imprimirá en el primer console.log un 2 y el el segundo console.log otro 2







\## Ejercicio 6 - Predice de nuevo y explica en un comentario por qué la última línea falla si 'lista' es una constante. ##



const lista = \[1, 2];

lista.push(3);

console.log(lista);

lista = \[];



\*\*Explicación\*\*



Se imprimirá 1 2 3 y un error por tanto mi predicción fue correcta. Esto pasa porque las listas no son mutables



\*\*Solución.\*\*



const lista = \[1, 2];

lista.push(3);

console.log(lista);

lista = \[];



//Se imprimirá 1,2,3 y un error puesto que la lista es una constatnte y no se pueden reasignar sus valores







\## Ejercicio 7 - Estas variables tienen nombres inútiles. Renómbralas siguiendo la convención 'camelCase' de forma que el nombre diga qué contienen. ##



let a = "Ana";

let b = 30;

let c = true;

let d = 1250.5;



\*\*Solución.\*\*



//let a = "Ana";

let nombrePersona = "Ana";



//let b = 30;

let edadPersona = 30;



//let c = true;

let tieneTrabajo = true;



//let d = 1250.5;

let sueldoMensual = 1250.5;







\## Ejercicio 8 - Ejecuta este fragmento tal cual. 'setTimeout' solo retrasa el 'console.log', no necesitas entenderlo todavía. ##



for (var i = 0; i < 3; i++) {

&#x20; setTimeout(() => console.log(i), 0);

}



\*\*Explicación\*\*



Con el var imprime 3 números 3 y con el 'let' imprime 0 1 2, esto se debe a que el 'var' solo crea 1 variable i para las tres iteracciones mientras que 'let' crea 1 por cada iteracción, por tanto mientras que en una se "suma" y se muestra el mismo número en la otra se van guardando de manera independiente



\*\*Solución.\*\*



for (let i = 0; i < 3; i++) {

&#x20; setTimeout(() => console.log(i), 0);

}



//Se muestra 0 1 2

