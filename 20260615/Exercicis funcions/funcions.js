function contrasenyaValida(cadena) {
    let tryIt = prompt("Introdueix la contrassenya: ");
    if (tryIt === "2Fj(jjbFsuj" || tryIt === "eoZiugBf&g9") {
        return true;
    } else {
        return false;
    }
}

function calcularImpostos(edat, ingressos) {
    if (edat >= 18 && ingressos >= 1000) {
        return `Et correspon pagar ${ingressos * 0.40} euros d'impostos`;
    } else {
        return 0;
    }
}

function bmi(pes, altura) {
    let icm = pes / altura ** 2;
    if (icm < 18.5) {
        return "Baix de pes";
    } else if (icm >= 18.5 || icm <= 24.9) {
        return "Normal";
    } else if (icm >= 25 || icm <= 29.9) {
        return "Sobrepès";
    } else if (icm >= 30) {
        return "Obès";
    } else {
        //pass;
    }
}

function imprimirArray(matriu) {
    let contenidor = document.getElementById("imprimirArray");
    let htmlAcumulat = "";

    for (let i = 0; i < matriu.length; i++) {
        htmlAcumulat += `${matriu[i]}<br>`;
    }

    return contenidor.innerHTML = htmlAcumulat;
}

function likes(num) {
    let numberOfLikes = "";
    if (num < 1000) {
        return `\"${num}\"`
    } else if (num >= 1000 && num < 1000000) {
        return numberOfLikes = `${(num / 1000).toPrecision(2)}k`;
    } else if (num >= 1000000) {
        return numberOfLikes = `${(num / 1000000).toPrecision(2)}M`;
    } else {
        //pass;
    }
}

function fizzBuzz() {
    let num = Number(prompt("Introdueix un número enter qualsevol: "));
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }
}

function comptarRang() {
    let num1 = Number(prompt("Introdueix el primer número: "));
    let num2 = Number(prompt("Introdueix el segon número: "));
    let recompte = 0;
    for (let i = num1 + 1; i < num2; i++) {
        recompte++;
    }
    return recompte;
}

function sumarRang() {
    let num1 = Number(prompt("Introdueix el primer número: "));
    let num2 = Number(prompt("Introdueix el segon número: "));
    let suma = 0;
    for (let i = num1; i <= num2; i++) {
        suma += i;
    }
    return suma;
}

function numeroDeAes() {
    let cadena = prompt("Escriu una cadena de caracters: ");
    let sumaA = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "a") {
            sumaA++;
        }
    }
    return sumaA;
}

function numeroDeCaracters() {
    let cadena = prompt("Escriu una cadena de caracters: ");
    let char = prompt("Escriu el caràcter que vols sumar: ");
    let sumaChar = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === char) {
            sumaChar++;
        }
    }
    return sumaChar;
}

function sumarArray() {
    let matriu = Number(prompt("Quants números contindrà la teva matriu?"));
    let suma = 0, counter = 0;
    while (counter <= matriu) {
        let sumaMatriu = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        suma += sumaMatriu;
        counter++;
    }
    return suma;
}

function multiplicarArray() {
    let matriu = Number(prompt("Quants números contindrà la teva matriu?"));
    let multiplicacio = 1, counter = 1;
    while (counter <= matriu) {
        let multiplicaMatriu = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        multiplicacio *= multiplicaMatriu;
        counter++;
    }
    return multiplicacio;
}

function treureZeros() {
    let matriu = Number(prompt("Quants números contindrà la teva matriu?"));
    let newMatriu = new Array();
    let counter = 1;
    while (counter <= matriu) {
        let newNum = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        if (newNum !== 0) {
            newMatriu.push(newNum);
        }
        counter++;
    }
    return newMatriu;
}

function sumarArray2() {
    // Obtenir la matriu de l'usuari
    let matriu = Number(prompt("Quants números contindrà la teva matriu?"));
    let newMatriu = new Array();
    let counter = 1;
    while (counter <= matriu) {
        let newItem = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        newMatriu.push(newItem);
        counter++;
    }

    // Demanar a l'usuari posició inicial i posició final
    let inici = Number(prompt("Per quina posició de la matriu vols començar?"));
    let final = Number(prompt("Per quina posició de la matriu vols acabar?"));

    // Fer la suma entre els elements inici i els elements final
    let suma = 0;
    for (let i = inici; i <= final; i++) {
        suma += newMatriu[i];
    }
    return suma;
}

function transcriure() {
    let cadena = prompt("Escriu la cadena d'ADN que vuguis transcriure: ");
    let transcriu = "";
    for (let i = 0; i < cadena.length; i++) {
        switch (cadena[i]) {
            case "G":
                transcriu += "C";
                break;
            case "C":
                transcriu += "G";
                break;
            case "T":
                transcriu += "A";
                break;
            case "A":
                transcriu += "U";
                break;
            default:
                transcriu += cadena[i];
        }
    }
    return transcriu;
}

function capitalitzar() {
    let cadena = prompt("Escriu una paraula o un frase: ");
    if (cadena === "") {
        window.alert("No em pots donar una cadena buida.");
        return "";
    } else {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }
}

function capitalitzar2() {
    let cadena = prompt("Escriu una paraula o una frase: ");
    cadena = cadena.split(" ");
    let newCadena = "";
    if (cadena === "") {
        window.alert("No em pots donar una cadena buida.");
        return "";
    } else {
        for (let i = 0; i < cadena.length; i++) {
            newCadena += cadena[i].charAt(0).toUpperCase() + cadena[i].slice(1) + " ";
        }
        return newCadena;
    }
}

function max() {
    let matriu = Number(prompt("Quants números contindrà la teva matriu?"));
    let counter = 1;
    let newMatriu = new Array();
    while (counter <= matriu) {
        let newItem = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        newMatriu.push(newItem);
        counter++;
    }
    const ordenament = (a, b) => a - b;
    const ascendent = newMatriu.toSorted(ordenament);
    return ascendent.at(-1);
}

function min() {
    let matriu = Number(prompt("Quants números contindrà la teva matriu?"));
    let counter = 1;
    let newMatriu = new Array();
    while (counter <= matriu) {
        let newItem = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        newMatriu.push(newItem);
        counter++;
    }
    const ordenament = (a, b) => a - b;
    const descendent = newMatriu.toSorted(ordenament);
    return descendent.at(0);
}

function password() {
    let passwd = prompt("Escriu la teva contrasenya: ");
    let newPasswd = "";
    for (let i = 0; i < passwd.length; i++) {
        let item = passwd[i].toLowerCase();
        if (item === " ") { }
        else if (item === "a") { newPasswd += "4"; }
        else if (item === "e") { newPasswd += "3"; }
        else if (item === "i") { newPasswd += "1"; }
        else if (item === "o") { newPasswd += "0"; }
        else { newPasswd += item; }
    }
    return newPasswd;
}

function parells() {
    let matriu = Number(prompt("Quant números tindrà la teva matriu?"));
    let counter = 1;
    let newMatriu = new Array();
    while (counter <= matriu) {
        let item = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        if (item % 2 === 0) {
            newMatriu.push(item);
        }
        counter++;
    }
    return newMatriu;
}

function posicions() {
    let matriu = Number(prompt("Quant números tindrà la teva matriu?"));
    let counter = 1;
    let newMatriu = new Array();
    while (counter <= matriu) {
        let item = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        if (item % 2 === 0) {
            newMatriu.push(counter);
        }
        counter++;
    }
    return newMatriu;
}

function duplicar() {
    let matriu = Number(prompt("Quant números tindrà la teva matriu?"));
    let counter = 1;
    let newMatriu = new Array();
    while (counter <= matriu) {
        let item = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        newMatriu.push(item * 2);
        counter++;
    }
    return newMatriu;
}

function comencenPerA() {
    let matriu = Number(prompt("Quantes paraules tindrà la teva matriu?"));
    let counter = 1;
    let comencenAmbA = new Array();
    while (counter <= matriu) {
        let item = prompt(`Insereix la paraula ${counter + 1}, en manquen ${matriu - counter}`);
        if (item.at(0) === "a" || item.at(0) === "A") {
            comencenAmbA.push(item);
        }
        counter++;
    }
    return comencenAmbA;
}

function acabenAmbS() {
    let matriu = Number(prompt("Quantes paraules tindrà la teva matriu?"));
    let counter = 1;
    let acabenPerS = new Array();
    while (counter <= matriu) {
        let item = prompt(`Insereix la paraula ${counter + 1}, en manquen ${matriu - counter}`);
        if (item.at(-1) === "s" || item.at(-1) === "S") {
            acabenPerS.push(item);
        }
        counter++;
    }
    return acabenPerS;
}

function imprimirMatriu() {
    let contenidor = document.getElementById("imprimirMatriu");
    // Es defineix una matriu de 9 x 9
    let matriu = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    // Bucle for niuat
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            contenidor.innerHTML += `El valor de la fila ${i} i la columna ${j} és: ${matriu[i][j]}<br>`;
        }
    }
}

function numerosAParaules() {
    let matriu = Number(prompt("Quants números tindrà la teva matriu? (del 0 al 9)"));
    let counter = 0;
    let newMatriu = new Array();
    while (counter <= matriu) {
        let item = Number(prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`));
        switch (item) {
            case item = 0:
                newMatriu.push("zero");
                break;
            case item = 1:
                newMatriu.push("un");
                break;
            case item = 2:
                newMatriu.push("dos");
                break;
            case item = 3:
                newMatriu.push("tres");
                break;
            case item = 4:
                newMatriu.push("quatre");
                break;
            case item = 5:
                newMatriu.push("cinc");
                break;
            case item = 6:
                newMatriu.push("sis");
                break;
            case item = 7:
                newMatriu.push("set");
                break;
            case item = 8:
                newMatriu.push("vuit");
                break;
            case item = 9:
                newMatriu.push("nou");
                break;
            default:
                break;
        }

        counter++;
    }
    return newMatriu;
}

function paraulesANumeros() {
    let matriu = Number(prompt("Quants números tindrà la teva matriu? (del 0 al 9)"));
    let counter = 1;
    let newMatriu = new Array();
    while (counter < matriu) {
        let item = prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`);
        switch (item) {
            case item = "zero":
                newMatriu.push(0);
                break;
            case item = "un":
                newMatriu.push(1);
                break;
            case item = "dos":
                newMatriu.push(2);
                break;
            case item = "tres":
                newMatriu.push(3);
                break;
            case item = "quatre":
                newMatriu.push(4);
                break;
            case item = "cinc":
                newMatriu.push(5);
                break;
            case item = "sis":
                newMatriu.push(6);
                break;
            case item = "set":
                newMatriu.push(7);
                break;
            case item = "vuit":
                newMatriu.push(8);
                break;
            case item = "nou":
                newMatriu.push(9);
                break;
            default:
                newMatriu.push(-1);
                break;
        }

        counter++;
    }
    return newMatriu;
}

function numAsteriscs() {
    let matriu = Number(prompt("Quants elements tindrà la teva matriu?"));
    let counter = 1, numAsteriscs = 0;
    while (counter <= matriu) {
        let item = prompt(`Insereix el número ${counter}, en manquen ${matriu - counter}`);
        if (item === "*") {
            numAsteriscs++;
        }
        counter++;
    }
    return numAsteriscs;
}

function numAsteriscs2() {
    let files = Number(prompt("Quantes files tindrà la teva matriu?"));
    let columnes = Number(prompt("Quantes columnes tindrà la teva matriu?"));
    let numAsteriscs = 0;
    var newArray = new Array(2);
    newArray[0] = new Array();
    newArray[1] = new Array();

    window.alert(`Has d'inserir ${files} x ${columnes} que són ${files * columnes} elements. \nPoden ser tant paraules com asteriscs.`);

    for (let i = 0; i < files; i++) {
        for (let j = 0; j < columnes; j++) {
            let item = prompt(`Insereix l'element de la fila ${i} columna ${j}:`);
            if (item === "*") {
                numAsteriscs++;
            }
            newArray[i][j] = item;
        }
    }
    return numAsteriscs;
}

function distancia() {
    let first = prompt("Escriu la primera paraula: ");
    let second = prompt("Escriu la segona paraula: ");
    let distancia = 0;

    first = first.split();
    second = second.split();

    for (let i = 0; i < first.length; i++) {
        let char = first[i];
        for (let j = 0; j < second.length; j++) {
            if (char !== second[j]) {
                distancia++;
            }
        }
    }
    return distancia;
}