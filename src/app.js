/**
 * Import
 */
const weather = require("@luctst/get-weather");
weather("26e8fc76ea4289676e61e4f91583579d", "bordeaux")
    .then(data => console.log(data));
