/**
 * Import
 */
const weather = require("@luctst/get-weather");

/**
 * Variables
 */
const app = document.querySelector("#app");
const h1 = document.createElement("h1");
const weatherData = new weather("26e8fc76ea4289676e61e4f91583579d");

/**
 * Déclaration
 */
const addTemp = async () => {
    let res = await weatherData.weather("paris");
    h1.textContent = `La température maximale sera de ${res.main.temp_max} degree à ${res.name} situé en ${res.sys.country}`;
    app.appendChild(h1);
};
addTemp();