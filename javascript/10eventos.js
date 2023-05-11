// Obtener los elementos del DOM
const boton = document.getElementById('boton');
const contenedor = document.getElementById('contenedor');

function onClick(e) {
    console.log('Se hizo un click en el botón');
}

// Evento click
/* boton.addEventListener('click', () => {
    console.log('Se hizo clic en el botón');
}); */

boton.addEventListener('click', onClick);

// Evento doble clic
boton.addEventListener('dblclick', () => {
    console.log('Se hizo doble clic en el botón');
});

// Evento mouseover
contenedor.addEventListener('mouseover', () => {
    console.log('El mouse está sobre el contenedor');
});

// Evento mouseout
contenedor.addEventListener('mouseout', () => {
    console.log('El mouse salió del contenedor');
});

// Evento mousedown
contenedor.addEventListener('mousedown', () => {
    console.log('Se presionó un botón del mouse sobre el contenedor');
});

// Evento mouseup
contenedor.addEventListener('mouseup', () => {
    console.log('Se soltó un botón del mouse sobre el contenedor');
});

// Evento keydown
document.addEventListener('keydown', (event) => {
    console.log(`Se presionó la tecla ${event.key}`);
});

// Evento keyup
document.addEventListener('keyup', (event) => {
    console.log(`Se soltó la tecla ${event.key}`);
});

// Evento focus
contenedor.addEventListener('focus', () => {
    console.log('El contenedor tiene el foco');
});

// Evento blur
contenedor.addEventListener('blur', () => {
    console.log('El contenedor perdió el foco');
});


/* 
1- preventDefault(): Evita el comportamiento predeterminado de un evento, como enviar un formulario o seguir un enlace.
2- stopPropagation(): Detiene la propagación del evento a través de los elementos secundarios o elementos superiores.
3- addEventListener(): Agrega un listener (oyente) a un elemento para escuchar un evento específico y ejecutar una función cuando ocurra ese evento.
4- removeEventListener(): Elimina un listener previamente agregado con addEventListener().
5- target: Propiedad que hace referencia al elemento en el que se originó el evento.
6- currentTarget: Propiedad que hace referencia al elemento que está actualmente manejando el evento.
7- event.type: Propiedad que indica el tipo de evento que se ha desencadenado.
8- event.preventDefault(): Variante del método preventDefault() para evitar el comportamiento predeterminado del evento dentro de una función de listener.
9- event.stopPropagation(): Variante del método stopPropagation() para detener la propagación del evento dentro de una función de listener.
*/
