// Llegir dos nombres i dir quin es mes gran
let num1, num2;
function major(num1, num2) {
    let resultat;
    if (num1 > num2) {
        return `El nombre més gran és: ${num1}`;
    } else {
        return `El nombre més gran és: ${num2}`;
    }
}
console.log(major(20, 10));