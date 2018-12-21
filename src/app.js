/**
 * Import
 */
const modulo = require("modulo-test-luctst");

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
console.log(modulo.calcModulo(10, 6));