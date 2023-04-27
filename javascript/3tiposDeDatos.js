/* javascript -> debilmente tipado */
/* java -> estrictamene tipado */

/* Tipos de datos */
/* 
  Primitivos
  string -> "hola mundo"
  number -> 10.12 / NaN
  boolean -> true / false
  null -> null/object -> valor desconocido, indefinido, no tenemos valor
  undefined -> undefined -> valor indefinido
*/

/*
  Complejos

  Symbol -> cuando necesito que el dato no cambie
  Object -> Object: cuando quiero agrupar datos (colección de propiedades)
*/

const mensaje = "Hola mundo";
const dni = 129381723918237;
const dniString = "129381723918237";
const mayorEdad = true;
const suma = function (){
  return 1 + 2;
}
let test;

/* const userName = "Carlos";
const lastName = "Perez";
const ageUser = 40;
const dniUser = 1238128371263; */

const user = {
  firtName: "Carlos",
  lastName: "Perez",
  age: 40,
  dni: 1238128371263,
};


console.log(30 + 20); // -> cuando el tipo es number, suma
console.log("a" + "b"); // -> cuando el tipo no es number, concatena
console.log("a" + 20);

// typeof -> devuelve el tipo de dato en string

// console.log(typeof mensaje);
// console.log(typeof dni);
// console.log(typeof dniString);
// console.log(typeof mayorEdad);
// console.log(null);
// console.log(typeof test);
console.log(user.firtName)
console.log(user.lastName)
console.log(user.firtName + " " + user.lastName)

