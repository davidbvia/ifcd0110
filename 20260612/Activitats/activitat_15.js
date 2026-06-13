let num = Number(prompt("Escriu un nombre enter qualsevol: "));
let divisors = new Array();
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= nombres.length; i++) {
    if (num % nombres[i] == 0) {
        divisors.push(nombres[i]);
    }
}
divisors.push(num);

for (let i = 0; i < divisors.length; i++) {
    console.log(`El nombre ${num} és divisible per ${divisors[i]}`);
}