let num = Number(prompt("Escriu un nombre enter qualsevol: "));
let divisors = new Array();

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        divisors.push(i);
    }
}

if (divisors.length === 0) {
    console.log(`El nombre ${num} és un nombre primer.`);
} else {
    console.log(`El nombre ${num} NO és un nombre primer.`);
}