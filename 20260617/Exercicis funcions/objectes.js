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

document.getElementById("marca").innerHTML = `Marca: <b>${cotxe.marca}</b>`;
document.getElementById("model").innerHTML = `Model: <b>${cotxe.model}</b>`;
document.getElementById("color").innerHTML = `Color: <b>${cotxe.color}</b>`;
document.getElementById("direccioAssistida").innerHTML = `Direcció assistida: <b>${cotxe.direccioAssistida ? "Sí" : "No"}</b>`;
document.getElementById("hibrid").innerHTML = `Híbrid: <b>${cotxe.hibrid ? "Sí" : "No"}</b>`;
document.getElementById("tipusVehicle").innerHTML = `Status: <b>${cotxe.preu < 15000 ? "Utilitari" :
    (cotxe.preu < 50000 ? "SUV" : "Luxury")}</b> `;

cotxe.color = "Blanc";
document.getElementById("color").innerHTML = `Color: <b>${cotxe.color}</b> (color modificat)`;

// Afegir una propietat
cotxe.tipusCombustible = "Dièsel";
document.getElementById("tipusCombustible").innerHTML = `Tipus de combustible: <b>${cotxe.tipusCombustible}</b>`;

// Bracket notation
document.getElementById("preu").innerHTML = `Preu: <b>${cotxe["preu"]}</b>`;

// Mostrar model i marca del cotxe
document.getElementById("modelMarca").innerHTML = `Model i marca: <b>${cotxe.modelMarca()}</b>`;

// Delete per eliminar atributs
delete cotxe.model;
//document.getElementById("model").innerHTML = `Model: <b>${cotxe.model}</b>`; => undefined

// Comprovar si una propietat existeix
let comprova = ("model" in cotxe); // Retorna true or false

// Imprimir les característiques de l'objecte
let atributs = "";
for (let x in cotxe) {
    console.log(cotxe[x]);
}

// JSON stringify
let passarAString = JSON.stringify(cotxe);
console.log(cotxe);
console.log(passarAString);