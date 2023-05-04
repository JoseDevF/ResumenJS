const title = document.querySelector(".title");
const template = document.querySelector(".template");

/* element.textContent -> agregar o modificar texto de las etiquetas */
const oldTextContent = title.textContent; // texto que viende desde el html
const user = {
  name: "Alexander",
};
title.textContent = oldTextContent + user.name;

/* document.createElement -> crea una etiqueta html */
const article = document.createElement("article");
const contentArticle = document.createTextNode("Texto del article");
article.appendChild(contentArticle);
document.body.insertBefore(article, template);

const customH4 = {
  tag: "h4",
  str: "Etiqueta personalizada",
  attr: "class",
  valueAttr: "custom-title",
};

const customImg = {
  tag: "img",
  attr: "src",
  valueAttr: "https://htmlreference.io/images/html-reference-type.png",
};

function createTag({
  tag,
  str = "",
  attr = "",
  valueAttr = "",
  selfC = false,
}) {
  if (!selfC) {
    return `<${tag} ${attr}="${valueAttr}">${str}</${tag}>`;
  } else {
    return `<${tag} ${attr}="${valueAttr}" />`;
  }
}

template.innerHTML = createTag(customImg);

const photo = document.querySelector("#photo");

photo.src = "https://htmlreference.io/images/html-reference-type.png";
photo.className = "photo";
photo.style.background = "tomato";
photo.style.height = "120px";
photo.style.objectFit = "cover";
