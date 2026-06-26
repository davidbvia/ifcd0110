let text = prompt("Escriu una frase qualsevol: ");
const separar = text.split("");
let recompteA = 0, recompteE = 0, recompteI = 0, recompteO = 0, recompteU = 0;

for (let i = 0; i < separar.length; i++) {
    if (separar[i].toLowerCase() == "a") {
        recompteA += 1;
    } else if (separar[i].toLowerCase() == "e") {
        recompteE += 1;
    } else if (separar[i].toLowerCase() == "i") {
        recompteI += 1;
    } else if (separar[i].toLowerCase() == "o") {
        recompteO += 1;
    } else if (separar[i].toLowerCase() == "u") {
        recompteU += 1;
    } else {}
}

console.log(`El text conté ${recompteA} vegades la lletra \"a\".`);
console.log(`El text conté ${recompteE} vegades la lletra \"e\".`);
console.log(`El text conté ${recompteI} vegades la lletra \"i\".`);
console.log(`El text conté ${recompteO} vegades la lletra \"o\".`);
console.log(`El text conté ${recompteU} vegades la lletra \"u\".`);