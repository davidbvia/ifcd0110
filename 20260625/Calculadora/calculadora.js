// Emmagatzemar els operands i la operació
let cadena = "";

function emmagatzema(num) {
    let numOperacions = 0;

    // Només es pot fer una operació per tanda
    if (num == "%" | num == "*" | num == "+" | num == "-") {
        numOperacions++;
    }
    document.getElementById("operacions").innerText += num;
    cadena += num;
    return cadena;
}

// Efectuar les operacions sol·licitades
function resultat() {
    let separa = cadena.split("%");
    for (let i = 0; i < separa.length; i++) {
        window.alert(separa[i]);
    }
}


// Netejar la pantalla
function neteja() {
    document.getElementById("operacions").innerText = "";
}