// No cambies los nombres de las funciones.
// console.log("vinculado")
// x=5 / y=7
function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  if(x > y) {
  // if (x < y) {
  // if (x === y) {
    return x;
    // console.log("x");
  } else {
    return y;
    // console.log("y");
  }
}
// obtenerMayor(9, 7);
// obtenerMayor(7, 9);S

 function mayoriaDeEdad(edad) {
   //Determinar si la persona según su edad puede ingresar a un evento.
   //Si tiene 18 años ó más, devolver --> "Allowed"
   //Si es menor, devolver --> "Not allowed"
if(edad >= 18) {
  return "Allowed";
  // console.log("Allowed");
} else {
  return "Not allowed";
  // console.log("Not allowed");
}
  }
  // mayoriaDeEdad(18);
  // mayoriaDeEdad(19);
  // mayoriaDeEdad(15);
  
 function conection(status) {
   //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
   //Cuando el estado es igual a 1, el usuario está "Online"
   //Cuando el estado es igual a 2, el usuario está "Away"
   //De lo contrario, presumimos que el usuario está "Offline"
   //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status === 1) {
    return "Online";
    // console.log("Online");
  } else if (status === 2) {
return "Away";
    // console.log("Away");
  } else {
    return "Offline";
    // console.log("Offline");
  }
  }
// conection();
// conection(1);
// conection(2);
// conection(3);

 function saludo(idioma) {
   // Devuelve un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!"
   // Si "idioma" es "mandarin", devuelve "Ni Hao!"
   // Si "idioma" es "ingles", devuelve "Hello!"
   // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
   // Tu código:
if (idioma === "aleman") {
return "Guten Tag!";
  // console.log("Guten Tag!");
} else if (idioma === "mandarin") {
  return "Ni Hao!";
  // console.log("Ni Hao!");
} else if (idioma === "ingles") {
  return "Hello!";
  // console.log("Hello!");
} else {
  return "Hola!";
  // console.log("Hola!");
}
  }
// saludo("aleman");
// saludo("mandarin");
// saludo("ingles");
// saludo("frances");
// saludo("");
// saludo(); //undefined es que no tiene un valor definido

 function colors(color) {
   //La función recibe un color. Devolver el string correspondiente:
   //En caso que el color recibido sea "blue", devuleve --> "This is blue"
   //En caso que el color recibido sea "red", devuleve --> "This is red"
   //En caso que el color recibido sea "green", devuleve --> "This is green"
   //En caso que el color recibido sea "orange", devuleve --> "This is orange"
   //Caso default: devuelve --> "Color not found"
   //Usar el statement Switch.
switch(color) {
  case "blue": {
    return "This is blue";
    // console.log("This is blue");
  }
  case "red": {
    return "This is red";
    // console.log("This is red");
  }
  case "green": {
    return "This is green";
    // console.log("This is green");
  }
  case "orange": {
    return "This is orange";
    // console.log("This is orange");
  }
  default: {
    return "Color not found";
    // console.log("Color not found");
  }
}

   //si utilizo el ifelse obtenga el resultado pero estan pidiendo que utilice el Switch
  //  if (color === "blue") {
  //   console.log("This is blue");
  // } else if (color === "red") {
  //   console.log("This is red");
  // } else if (color === "green") {
  //   console.log("This is green");
  // } else if (color === "orange") {
  //   console.log("This is orange");
  // } else {
  //   console.log("Hola!");
  // }
  //// La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
  }
// colors("blue"); //el bluen me va arrojar blue, red, green, orange, default
// colors("red"); //el red me va arrojar red, green, orange, default
// colors("green"); //el green me va arrojar green, orange, default
// colors("orange"); //el orange me va arrojar orange, default
// colors("default"); //el default me va arrojar default
// colors(); //el undefined me va arrojar default

  // colors("blue");

 function esDiezOCinco(numero) {
   // Devuelve "true" si "numero" es 10 o 5
   // De lo contrario, devuelve "false"
   // Tu código:
 if (numero === 10 || numero === 5) { 
return true;
  // console.log(true);
 } else {
  return false;
  // console.log(false);
 }
}
// esDiezOCinco(10);
// esDiezOCinco(5);
// esDiezOCinco(15);


 function estaEnRango(numero) {
   // Devuelve "true" si "numero" es menor que 50 y mayor que 20
   // De lo contrario, devuelve "false"
   // Tu código:
 if (numero < 50 && numero > 20) {
  return true; 
  // console.log(true);
 } else {
  return false;
  // console.log(false);
 }
  }
// estaEnRango(30);
// // estaEnRango(70);
// estaEnRango(10);

 function esEntero(numero) {
   // Devuelve "true" si "numero" es un entero (int/integer)
   // Ejemplo: 0.8 -> false
   // Ejemplo: 1 -> true
   // Ejemplo: -10 -> true
   // De lo contrario, devuelve "false"
   // Pista: Puedes resolver esto usando `Math.floor`
   // Tu código:
   
   if (numero % 1 === 0) {
    return true;
    // console.log(true);
   } else {
    return false;
    // console.log(false);
   }
 }
// esEntero(1.5)
// esEntero(1)

 function fizzBuzz(numero) {
   // Si "numero" es divisible entre 3, devuelve "fizz"
   // Si "numero" es divisible entre 5, devuelve "buzz"
   // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
   // De lo contrario, devuelve el numero
if (numero % 15 === 0) {
  return "fizzbuzz";
  // console.log("fizzbuzz");
} else if ( numero % 3 === 0) {
  return "fizz";
  // console.log("fizz");
} else if (numero % 5 === 0) {
  return "buzz";
  // console.log("buzz")
} else {
  return numero;
  // console.log(numero);
}

//  if (numero % 3) {
//   console.log("fizz");
//  } else if (numero % 5) {
//   console.log("buzz");
//  } else if (numero % 3 && numero % 5) {
//   console.log("fizzbuzz")
//  } else {
//   console.log(numero)
//  }
  }
  // fizzBuzz(3)
  // fizzBuzz(5)
  // fizzBuzz(15)
  // fizzBuzz(16)

// fizzBuzz(150);
// fizzBuzz(10);
// fizzBuzz(6);
// fizzBuzz(20);

 function operadoresLogicos(num1, num2, num3) {
   //La función recibe tres números distintos. 
   //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
   //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
   //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
   //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
if (num1 < 0 || num2 < 0 || num3 < 0) {
  return "Hay negativos";
  // console.log("Hay negativos");
} else if (num1 === 0 || num2 === 0 || num3 === 0) {
  return "Error";
  // console.log("Error")
} else if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
    // console.log("Número 1 es mayor y positivo");
} else if (num3 > num1 && num3 > num2) {
  return num3 + 1;
  // console.log(num3 + 1);
} else {
  return false;
  // console.log(false);
}

  }
  // operadoresLogicos(5, 2, 4) //se cumple la primera condicion
  // operadoresLogicos(7, -8, 9) //se cumple la segunda condicion
  // operadoresLogicos(3, 10, 12) //se cumple la tercera condicion retorna 12+1=13
  // operadoresLogicos(0, 10, 1) //se cumple la cuarta condicion si algunon del los num es cero es error
  // operadoresLogicos(5, 10, 2) //se cumple la quinta condicion es false

 function esPrimo(numero) {
   // Devuelve "true" si "numero" es primo
   // De lo contrario devuelve "falso"
   // Pista: un número primo solo es divisible por sí mismo y por 1
   // Pista 2: Puedes resolverlo usando un bucle `for`
   // Nota: Los números 0 y 1 NO son considerados números primos
   if( numero < 2) return false;
   if(numero === 2) return true;
   for(var i = 2; i < numero; i++) {
     if(numero % i === 0) {
       return false;
     }
   }
   return true;
 

   //  for (var nume = 2; nume < numero; nume++) {
//    if (numero % nume === 0) {
//     return false; 
//     // console.log(false);
//    } else {
//      //  console.log(true);
//     }
//     return true;

// //   }
// // if (numero < 2)  return false;
// //   // console.log(false);
// // if (numero === 2)  return true;
// //   // console.log(true);
  
// }
}
  // esPrimo(3);

 function esVerdadero(valor){
   //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
   //si su valor es true y “Soy falso” si su valor es false.
   //Escribe tu código aquí
if (valor === true) {
return "Soy verdadero";
  // console.log("Soy verdadero");
} else {
return "Soy falso";
  // console.log("Soy falso");
}
// if (!false) {
// // if (!true) {
//   console.log("Soy verdadero");
// } else {
//     console.log("Soy falso");
// }
 }
// esVerdadero()
// esVerdadero(true)
// esVerdadero(false)

function tablaDelSeis(){
   //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
   //Escribe tu código aquí   
  let arrayTablaDelSeis1 = []; //sin elementos porque se quiere tener un nuevo array
  for (let tablaDelSeis1 = 0; tablaDelSeis1 < 11; tablaDelSeis1++) { //inicia en cero porque el index del array[] siempre inicia en cero, despues digo que es menor a 11 porque la tabla de multiplicar es del 0 al 10 por ejemplo 6*0 luego 6*1 luego 6*2 y asi sucesivamente hasta 6*10 pero si contamos la cantidad de index son 11 porque seri asi 6*0[0]-6*1[1]-6*2[2]-6*3[3]-6*4-6*5-6*6-6*7-6*8-6*9-6*10[10] pero si contamos en total son 11 numeros contando desde el cero hasta el diez. y por ultimo se va sumando ++ uno para que en cada vuelta que de la funcion al multiplicar un valor siga al siguiente valor, es decir: multiplicamos 6*>>0<<=0 despues que pase esta vuelta y arroje el resultado del 0, pasaria al sumar uno 0+1=1 y ahora seria 6*1=6, despues que arroje el resultado del uno, se le vuelve a sumar uno y seria ahora 1+1=2 y decimos ahora 6*2=12 y va continuando la misma secuencia hasta cumpli la segunda condicion de la variable que seria que tablaDelSeis1 < 11;
      arrayTablaDelSeis1.push(6 * tablaDelSeis1);
  }
  return arrayTablaDelSeis1;
  // console.log(arrayTablaDelSeis1); //con esto observamos en la consola un array de largo 11 >>length<< y con los resultados de la multipliacion por 6 desde el cero hasta el 10.
 }
// tablaDelSeis();


 function tieneTresDigitos(numero){
   //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
   //Escribe tu código aquí
  if (numero > 99 && numero < 1000) {
    return true;
    console.log(true);
  }else {
    return false;
    console.log(false);
  }
 }
// tieneTresDigitos(1000);
// tieneTresDigitos(777);
// tieneTresDigitos(99);


 function doWhile(numero) {
   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
   //Retornar el valor final.
   //Usar el bucle do ... while.
 let parametroNumero = numero;
 let indiceNumero = 0
do {
  indiceNumero = indiceNumero + 1;
  parametroNumero = parametroNumero + 5
}
while(indiceNumero < 8);
return parametroNumero;
// console.log(parametroNumero);
 }
// doWhile(0)

// // No modificar nada debajo de esta línea
// // --------------------------------

 module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tablaDelSeis,
   tieneTresDigitos,
   doWhile
 };
