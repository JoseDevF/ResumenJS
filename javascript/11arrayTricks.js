// Crear un array de ejemplo
const numeros = [10, 5, 3, 12, 7];

// Método push - Agregar un elemento al final del array
numeros.push(8);
console.log(numeros); // [10, 5, 3, 12, 7, 8]

// Método pop - Eliminar el último elemento del array
numeros.pop();
console.log(numeros); // [10, 5, 3, 12, 7]

// Método shift - Eliminar el primer elemento del array
numeros.shift();
console.log(numeros); // [5, 3, 12, 7]

// Método unshift - Agregar un elemento al principio del array
numeros.unshift(2);
console.log(numeros); // [2, 5, 3, 12, 7]

// Método splice - Agregar o eliminar elementos en cualquier posición del array
numeros.splice(2, 0, 9, 11); // Agrega 9 y 11 en la posición 2
console.log(numeros); // [2, 5, 9, 11, 3, 12, 7]

numeros.splice(4, 1); // Elimina el elemento en la posición 4
console.log(numeros); // [2, 5, 9, 11, 12, 7]

// Método slice - Crear un nuevo array a partir de una sección del array original
const nuevoArray = numeros.slice(1, 4); // Obtiene los elementos en las posiciones 1 a 3
console.log(nuevoArray); // [5, 9, 11]

// Método filter - Crear un nuevo array con elementos que cumplan una condición
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // [2, 12]

// Método map - Crear un nuevo array a partir de la transformación de cada elemento del array original
const numerosDobles = numeros.map(num => num * 2);
console.log(numerosDobles); // [4, 10, 18, 22, 24, 14]

// Método reduce - Reducir el array a un único valor mediante una función acumuladora
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 46

// Método forEach - Ejecutar una función para cada elemento del array
numeros.forEach(num => console.log(num));
