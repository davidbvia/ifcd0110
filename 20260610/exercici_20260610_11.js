/* Calcular preu bitllet bus anada i tornada, tenint en compte la distància, 
el preu per km i el nombre de dies */
let distancia, preuKm, numDies;
function calcula(distancia, preuKm, numDies) {
    let preu = 0;
    preu = distancia * preuKm * numDies;
    if (numDies > 7 & distancia > 800) {
        preu = preu * 0.85;
    } 
    return preu;
}

console.log(`El preu del bitllet és: ${calcula(800, 0.10, 8)}`);
console.log(`El preu del bitllet és: ${calcula(800, 0.10, 7)}`);
console.log(`El preu del bitllet és: ${calcula(1200, 0.10, 15)}`);