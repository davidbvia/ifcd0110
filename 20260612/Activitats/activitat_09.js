let text = prompt("Escriu una frase qualsevol: ");
const separar = text.split("");
let recompte = 0;

for (let i = 0; i < separar.length; i++) {
    if (separar[i] == "a") {
        recompte += 1
    }
}
console.log(`El text conté ${recompte} vegades la lletra \"a\".`);
