const objeto1 = require('./objeto01');

// var empty_object = {};
// var stooge = {
//     "first-name": "silvio",
//     "last-name": "Clipper"
// };

console.log(stooge["first-name"]);


var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angels"
    }
};

// Recupeção

console.log(flight.departure);

// console.log (stooge["first-name"]);

//Obter valor de chave que não existe, retorna undefided.
console.log(flight.status);

// Operador || retornam valor padrão

// var middle = stooge['middle-name'] || "(none)";
var status = flight.status || "unknow";

// console.log(middle);
console.log(status);

console.log(flight.equipment);
// console.log(flight.equipment.model);
// console.log(flight.equipment && flight.equipment.model);

// Atualização

// stooge['first-name'] = "azevedo";
// console.log(stooge['first-name']);




