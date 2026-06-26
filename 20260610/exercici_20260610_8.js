// Saber si un nombre és parell o senar
let num;
function parell(num) {
    if (num % 2 == 0) {
        return `El nombre ${num} és parell.`;
    } else {
        return `El nom bre ${num} és senar.`;
    }
}

console.log(parell(22));
console.log(parell(31));