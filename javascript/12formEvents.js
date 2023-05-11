const users = [
    { nombre: "mali", password: "1234dfg" },
    {},
    {}
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

/* form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formElements = e.target.elements;
    for (const element of formElements) {
        console.log(element.name + ":" + element.value);
    }
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

    console.log("Objeto: ", formData);
});

