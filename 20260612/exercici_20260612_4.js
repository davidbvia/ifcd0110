// Funció per sumar dos nombres
let num1, num2;
function sum(num1, num2) {
    return num1 + num2;
}
console.log(`La suma dels dos nombres és: ${sum(34, 98)}`);

// Funció per mostrar un text
function alertBox() {
    let text = "Això és el missatge!!";
    return text;
}
console.log(alertBox());

// Funció per sumar 5 a un valor
function sumar(a) {
    return a += 5;
}
console.log(sumar(23));