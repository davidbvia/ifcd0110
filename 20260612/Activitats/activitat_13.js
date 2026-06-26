let num = Number(prompt("Escriu un nombre enter qualsevol: "));


if (num % 2 === 0) {
    console.log(`El nombre ${num} és divisible  per 2`);
} else if (num % 3 === 0) {
    console.log(`El nombre ${num} és divisible  per 3`);
} else if (num % 5 === 0) {
    console.log(`El nombre ${num} és divisible  per 5`);
} else if (num % 7 === 0) {
    console.log(`El nombre ${num} és divisible  per 7`);
} else {
    console.log(`El nombre ${num} no és divisible per 2, 3, 5 ó 7`);
}