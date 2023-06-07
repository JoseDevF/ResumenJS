/* Operadores matemáticos */
// Suma -> (+)
// Resta -> (-)
// Multiplicación -> (*)
// División (/)
// Modulo (%) 10/3 -> 1
// Exponencial (**)

console.log(3 + 2);
console.log(2 + "a");
console.log(3 - 2);
console.log(3 - "a"); // NaN -> Not a number

/*
Operadores de asignación

Asignación -> =
Asignación de adición -> = +=
Asignación de resta -> -=
Aignación de producto -> *=
Asignación de división -> /=

*/
let x = 5;
let y = 8;

const suma = x + y;
console.log("VALOR SUMA: ", suma);
x += y;
console.log("VALOR X: ", x);

/* 
Operadores lógicos

Operador Y (and) -> && 
Operador O (or) -> ||
Operador Negación (not) -> !

 */

const v = true;
const f = false;

console.log("AND: ", v && f);
console.log("OR: ", v || f);
console.log("NEGACIÓN: ", !f);

/*
Operadores de comparación.

Operador igual -> ==
Operador de desigualdad -> !=
Operador estrictamente igual -> ===
Operador de desigualdad estricta -> !==
Operador Mayor que -> >
Operador Mayor o igual que -> >=
Operador Menor que -> <
Operador Menor o igual que -> <=

 */

"gghfghvghsvf 'gasgf'"

console.log("IGUALDAD", 2 == '2');
console.log("IGUALDAD ESTRICTA", 2 === '2');

/* Aplica la misma lógica para el menor y menor o igual que */
console.log("MAYOR QUE", 5 > 5);
console.log("MAYOR IGUAL QUE", 5 >= 5);

/* Operador de elminiación */

let arreglo = [1, 5, 10] // Indice -> 1

delete arreglo[0];

console.log("Arreglo: ", arreglo);

/* Truthy & Falsy */

/*
Valores Falsy:

            false
            0 -> aritmético
            -0
            "" -> Cadenas vacias
            ''
            null
            undefined
            NaN
            empty

Valores Truthy:

            true
            {} -> objetos vacíos (Cualquier objeto )
            [] -> arreglos vaciós
            numero
            "0" -> Cadena no vacía
            Infinity
            -Infinity

*/

const objeto_vacio1 = {};
const objeto_vacio2 = {};
const obj = {
    nombre: "José Hernández"
};

console.log("Comparación AND objeto vacío: ", objeto_vacio1 && obj)
console.log("Comparación igualdad objeto vacío: ", objeto_vacio1 == objeto_vacio2)
console.log("Comparación igualdad estricta objeto vacío: ", objeto_vacio1 === objeto_vacio2)
