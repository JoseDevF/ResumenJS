/* cualquier selector en js recibe por parametro un string */
const selectorHomeById = document.getElementById("home"); // devuelve un objeto
console.log(selectorHomeById);

const selectorByClass = document.getElementsByClassName("home-post"); // devuelve una colección de elementos html
console.log(selectorByClass);

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
const querySelector = document.querySelector("article");
const querySelectorAddTag = document.querySelector(".home-post h1");
console.log("querySelector", querySelector);
console.log("querySelectorAddTag", querySelectorAddTag);

const querySelectorAll = document.querySelectorAll(".home-post");
console.log("querySelectorAll", querySelectorAll);
