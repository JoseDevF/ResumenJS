/* cualquier selector en js recibe por parametro un string */
const selectorHomeById = document.getElementById("home"); // devuelve un objeto
console.log(selectorHomeById);

const selectorByClass = document.getElementsByClassName("main-title"); // devuelve una colección de elementos html
console.log(selectorByClass);

//Aplica normalmente para campos de entrada o inputs
const selectorByName = document.getElementsByName("section"); // debe ser un input
console.log(selectorByName);

const selectorByTagName = document.getElementsByTagName("article"); // devuelve una colección de elementos html
console.log("selectorByTagName", selectorByTagName);

/* 
  document.querySelector("") -> #id / .class / tagName
  selecionar por anidamiento
*/
// const querySelector = document.querySelector("#home");
// const querySelector = document.querySelector(".home-post");

/* Best practice */
const querySelector = document.querySelector("#userNameInput");
const querySelectorAddTag = document.querySelector(".home-post h1");
console.log("querySelector", querySelector);
console.log("querySelectorAddTag", querySelectorAddTag);

const querySelectorAll = document.querySelectorAll(".home-post");
console.log("querySelectorAll", querySelectorAll);
