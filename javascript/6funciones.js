/* const n1 = 2;
const n2 = 3;
const suma = n1 + n2;

const n3 = 123;
const n4 = 1028312;
const otraSuma = n3 + n4; */

/* 
  Funciones son fragmentos de código que se
  crean para resolver una tarea, y que pueden ser reutilizados

  Solo podemos retornar una sola vez por función
 */

/* function suma(primerNumero = 0, segundoNumero = 0) {
  if (isNaN(primerNumero) || isNaN(segundoNumero)) return "Valores no validos";
  return primerNumero + segundoNumero;
} */

function suma({ primerNumero = 0, segundoNumero = 0 }) {
  if (isNaN(primerNumero) || isNaN(segundoNumero)) return "Valores no validos";
  return primerNumero + segundoNumero;
}

// alert(suma(2, 9));

/* const valorUsuario1 = Number(prompt("Ingrese el primer valor"));
const valorUsuario2 = Number(prompt("Ingrese el segundo valor"));

console.log(suma(valorUsuario1, valorUsuario2)); */

const valoresNumericos = {
  primerNumero: 80,
  segundoNumero: 20,
};

console.log(suma(valoresNumericos));
console.log(suma({ primerNumero: 30 }));

function operacionesMat(n1 = 0, n2 = 0) {
  function suma() {
    return n1 + n2;
  }

  function resta() {
    return n1 - n2;
  }

  function multi() {
    return n1 * n2;
  }

  return { suma, resta, multi };
}

console.log(operacionesMat(3, 2).suma());
console.log(operacionesMat(3, 2).resta());
