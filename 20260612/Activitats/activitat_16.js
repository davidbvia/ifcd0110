//let num1 = Number(prompt("Escriu el primer nombre: "));
//let num2 = Number(prompt("Escriu el segon nombre: "));
let num1 = 36;
let num2 = 48;
let divisors1 = new Array(), divisors2 = new Array();

// Funció per extreure els divisors dels nombres un a un
function divisorsNum(num) {
    let divisors = new Array();
    
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

divisors1.push(divisorsNum(num1));
divisors2.push(divisorsNum(num2));

let coincidents = new Array();

for (let i = 0; i < divisors1.length; i++) {
    for (let j = 0; j < divisors2.length; j++) {
        if (divisors1[i] !== divisors2[j]) {
            console.log(divisors2[j] + "\n");
        }
    }
}