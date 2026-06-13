let text = prompt("Escriu una frase qualsevol: ");
const separar = text.split("");
let recompte = 0;

for (let i = 0; i < separar.length; i++) {
    if (separar[i] == "a") {
        recompte += 1;
    } else if (separar[i] == "e") {
        recompte += 1;
    } else if (separar[i] == "i") {
        recompte += 1;
    } else if (separar[i] == "o") {
        recompte += 1;
    } else if (separar[i] == "u") {
        recompte += 1;
    }
}

console.log(`En la frase inserida, ${recompte} de les lletres són vocals.`)