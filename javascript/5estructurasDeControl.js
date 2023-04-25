/* Estructura if */
const v = true;
const f = false;
const num = 0;

/* Si algo se cumple -> Ejecuta código */

/* if ((v && f) || (num > 15) && (condicion_extra)) {
    console.log("La condición se cumple.")
} */


/* Si algo se cumple -> Ejecuta código A -> Si no (caso contrario) -> Ejecuta codigo B */
/* if ((num > 15)) {
    console.log("La condición se cumple.")
} else {
    console.log("Aprobe mis materias")
} */

/* Si algo se cumple -> Ejecuta código A -> Si no (caso contrario) -> Ejecuta codigo B -> ETC...*/
/* if ((num > 15)) {
    console.log("Mayor que 15")
} else if ((num > 10)) {
    console.log("Mayor que 10 menor que 15")
} else if ((num > 5)) {
    console.log("Mayor que 5 menor que 10")
} else {
    console.log("Aprobe mis materias")
} */

/* if ((num > 15)) {
    if ((num < 20)) {
        console.log("El valor esta entre 15 y 20");
    } else {
        console.log("La condición se cumple.");
    }
} else {
    console.log("Aprobe mis materias");
} */

/* if ((num > 15)) console.log("La condición se cumple.");
else console.log("La condición no se cumple"); */

/* Estructura switch */

/* Llave que me da acceso a un caso de uso */
/* switch (v) {
    case true:
        console.log("CASO A");
        break;
    case false:
        console.log("CASO B");
        break;
    default:
        console.log(":(");
        break;
} */

switch (num) {
    case 20:
        console.log("CASO A");
        break;
    case 19:
        console.log("CASO B");
        break;
    case 18:
        console.log("CASO C");
        break;
    case 17:
        console.log("CASO D");
        break;
    case 16:
        console.log("CASO E");
        break;
    default:
        console.log(":(");
        break;
}

const nombre = 'hugo';

switch (nombre) {
    case 'jose':
        console.log("CASO A");
        break;
    case 'hugo':
        console.log("CASO B");
        break;
    case 'alex':
        console.log("CASO C");
        break;
    default:
        console.log(":(");
        break;
}
console.log("Continuamos");

/* Ciclos for */

const obj = {
    nombre: "josé",
    apellido: "hernández",
    edad: 28
}

const arreglo = [1, 5, 7]; //-> lista de valores 

/* Cualquier caso */
for (let i = 0; i < arreglo.length; i++) {
    //Código
    //console.log("INDICE/CONTADOR: ", i);
    console.log("VALOR FOR CLASICO: ", arreglo[i]);
}
/* Normalmente objetos */
for (prop in obj) {
    //Código
    //console.log("PROPIEDAD: ", prop, "VALOR: ", obj[prop]);
}
/* Normalmente Arreglos */
for (let valor of arreglo) {
    //Código
    console.log("VALOR: ", valor);
}


/* Ciclos while */

/* do while */