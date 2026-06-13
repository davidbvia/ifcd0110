let num = Number(prompt("Escriu un nombre enter qualsevol: "));
let nombres = [2, 3, 4, 5, 6, 7, 8, 9];
let divisors = new Array();

for (let i = 0; i <= nombres.length; i++) {
    if (num % nombres[i] == 0) {
        divisors.push(nombres[i]);
    }
}

if (divisors.length === 0) {
    console.log(`El nombre ${num} és un nombre primer.`);
} else {
    console.log(`El nombre ${num} NO és un nombre primer.`);
}