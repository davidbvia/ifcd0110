let num1 = Number(prompt("Escriu el primer nombre: "));
let num2 = Number(prompt("Escriu el segon nombre: "));
let num3 = Number(prompt("Escriu el tercer nombre: "));


if (num1 === num2 || num2 === num3 || num1 === num3) {
    console.log("Algun dels tres parells de nombres és igual!");
} else {
    if (num1 > num2 && num1 > num3) {
        console.log(`El nombre ${num1} és superior a ${num2} i a ${num3}`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`El nombre ${num2} és superior a ${num1} i a ${num3}`);
    } else {
        console.log(`El número ${num3} és superior a ${num1} i a ${num2}`);
    }
}