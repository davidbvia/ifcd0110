// Multiplica dos nombres només si els dos són positius
let num1, num2;
function multiplica(num1, num2) {
    if (num1 >= 0 & num2 >= 0) {
        let resultat = num1 * num2;
        return `La multiplicació dels dos nombres positius és: ${resultat}`;
    } else {
        return `Un dels dos nombres o tots dos són negatius.`;
    }
}

console.log(multiplica(-20, 768));
console.log(multiplica(20, 768));