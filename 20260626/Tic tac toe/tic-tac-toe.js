// Registre del nombre de jugades i tirades jugadors
let jugades = 0;
var tirades = [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]];

// Registre de jugades determinades per la posició
function tirada(fila, columna) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tirades[fila][columna] === "B") {
                if (jugades % 2 === 0) {
                    canviaColor("jugador1", fila, columna);
                    tirades[fila][columna] = "X";
                    jugades++;
                } else {
                    canviaColor("jugador2", fila, columna);
                    tirades[fila][columna] = "O";
                    jugades++;
                }
                break;
            }
        }
    }

    // Comprovar tres en ratlla

}

// Canviar color jugador
function canviaColor(qui, fila, columna) {
    let color = "";

    // Distingir el jugador
    if (qui === "jugador1") { color = "green"; }
    else if (qui === "jugador2") { color = "red"; }
    else { }

    if (fila === 0 & columna === 0) {
        document.getElementById("primer").style.backgroundColor = color;
    }
    else if (fila === 0 & columna === 1) {
        document.getElementById("segon").style.backgroundColor = color;
    }
    else if (fila === 0 & columna === 2) {
        document.getElementById("tercer").style.backgroundColor = color;
    }
    else if (fila === 1 & columna === 0) {
        document.getElementById("quart").style.backgroundColor = color;
    }
    else if (fila === 1 & columna === 1) {
        document.getElementById("cinque").style.backgroundColor = color;
    }
    else if (fila === 1 & columna === 2) {
        document.getElementById("sise").style.backgroundColor = color;
    }
    else if (fila === 2 & columna === 0) {
        document.getElementById("sete").style.backgroundColor = color;
    }
    else if (fila === 2 & columna === 1) {
        document.getElementById("vuite").style.backgroundColor = color;
    }
    else if (fila === 2 & columna === 2) {
        document.getElementById("nove").style.backgroundColor = color;
    }
    else { }
}

function comprova(tirades) {

}

function reinicia() {
    // Substituir elements de la matriu per "B"
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tirades[i][j] = "B";
        }
    }

    // Tornar el color de les fitxes al seu to inicial
    let botons = ["primer", "segon", "tercer", "quart", "cinque", "sise", "sete", "vuite", "nove"];
    for (item of botons) {
        document.getElementById(item).style.backgroundColor = "silver";
    }
}
