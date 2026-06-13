let num1 = Number(prompt("Escriu el primer nombre: "));
let num2 = Number(prompt("Escriu el segon nombre: "));
let divisors1 = new Array(), divisors2 = new Array();

// Funció per extreure els divisors dels nombres un a un
function divisorsNum(num) {
    let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let divisors = new Array();
    
    for (let i = 0; i < nombres.length; i++) {
        if (num % nombres[i] === 0) {
            divisors.push(nombres[i]);
        }
    }

    return divisors;
}

divisors1.push(divisorsNum(num1));
divisors2.push(divisorsNum(num2));

//let coincidents = new Array();

for (let i = 0; i < divisors1.length; i++) {
    console.log(divisors1[i]);
}
