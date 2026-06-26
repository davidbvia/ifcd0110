let num1 = Number(prompt("Escriu el primer nombre: "));
let num2 = Number(prompt("Escriu el segon nombre: "));

if (num1 === num2) {
    console.log("Els nombres no poden ser iguals!");
} else {
    if (num1 > num2) {
        console.log(`El nombre ${num1} és superior a ${num2}`);
    } else {
        console.log(`El nombre ${num2} és superior a ${num1}`);
    }
}