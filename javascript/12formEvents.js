const users = [
    { nombre: "mali", password: "1234dfg" },
    {},
    {}
];

const inputName = document.querySelector('#userNameInput');
const inputPassword = document.querySelector('#userPasswordInput');
const loginButton = document.querySelector('#login');

loginButton.addEventListener('click', () => {
    console.log("inputName: " + inputName.value);
    console.log("password: " + inputPassword.value)
});

/* inputName.addEventListener('change', () => {
    console.log("inputName: " + inputName.nodeValue);
}) */
