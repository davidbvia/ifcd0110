let num = Number(prompt("Escriu un nombre enter qualsevol: "));
let divisors = new Array();

for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        divisors.push(i);
    }
}

console.log(`El nombre ${num} és divisible per: `)
for (let i = 0; i < divisors.length; i++) {
    console.log(divisors[i]);
}