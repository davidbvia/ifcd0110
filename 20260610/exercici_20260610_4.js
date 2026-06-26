// Sumar tots els nombres parells de l'1 al 100
let resultat = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        resultat += i;
    }
}

console.log(`La suma dels nombres parells de l'1 al 100 és: ${resultat}`);