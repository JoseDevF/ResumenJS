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
