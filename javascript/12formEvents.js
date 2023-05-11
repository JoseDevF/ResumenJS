const cuentas = [
    { nombre: "mali", saldo: 900, password: "1234dfg" },
    { nombre: "joss", saldo: 500, password: "password" },
    { nombre: "alex", saldo: 700, password: "jkhkl" },
    { nombre: "andrea", saldo: 700, password: "123456" },
];

/* const inputName = document.querySelector('#userNameInput');
const inputPassword = document.querySelector('#userPasswordInput');
const loginButton = document.querySelector('#login');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("inputName: " + inputName.value);
    console.log("password: " + inputPassword.value)
}); */

/* inputName.addEventListener('change', () => {
    console.log("inputName: " + inputName.nodeValue);
}) */

const form = document.querySelector('#loginForm');
const returnButton = document.querySelector('#return');

/* form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formElements = e.target.elements;
    for (const element of formElements) {
        console.log(element.name + ":" + element.value);
    }
}) */

/* returnButton.addEventListener('click', () => {
    console.log("retornar al inicio");
}) */


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formElements = e.target.elements;
    const formData = {};

    for (const element of formElements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }

    const success = cuentas.some(cuenta => (cuenta.nombre === formData.userName && cuenta.password === formData.userPassword));

    if (success) {
        console.log("Saltar a la vista de inicio");
    } else {
        alert("¡Usuario o contraseña invalidos! :(");
    }
    console.log(success);

});

