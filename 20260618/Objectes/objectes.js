const cotxe = {
    marca: "Mercedes",
    model: "A18",
    color: "Negre",
    direccioAssistida: true,
    hibrid: false,
    preu: 60000,
    numPortes: 5,
    modelMarca: function () {
        return this.model + " " + this.marca;
    }
};

/* MÈTODES DE LA CLASSE OBJECT */

// Object assign
const cotxe2 = {
    marca: "Audi",
    model: "A5"
};

Object.assign(cotxe, cotxe2);
console.log(cotxe2);
console.log(cotxe);

Object.assign(cotxe, { marca: "SEAT" });
console.log(cotxe);


// Object entries
let entrada = Object.entries(cotxe);
console.log(entrada);

let text = "";
for (let [key, value] of Object.entries(cotxe)) {
    text += key + ": " + value + "\n";
}
console.log(text);

const myMap = new Map(Object.entries(cotxe));
console.log(myMap);

for ([key, value] of myMap) {
    console.log(key + " " + value);
}
