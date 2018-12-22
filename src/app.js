/**
 * Import
 */
const modulo = require("@luctst/modulo");

/**
 * Variables
 */
const app = document.querySelector("#app");

/**
 * Déclaration
 */
const newElement = (el, content) => {
    let element = document.createElement(el);
    let elementContent = document.createTextNode(content);
    element.appendChild(elementContent);
    app.appendChild(element);
} 

 
 /**
  * Exécution
  */
newElement("h1", "Bonjour internet !!");
newElement("p", modulo.calcModulo(10, 3));