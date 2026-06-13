let planetes = ["Mercuri", "Jupiter", "Saturn"];
let teAnelles = [false, false, true];

for (let i = 0; i <=2; i++) {
    if (teAnelles[i] === true) {
        console.log(`El planeta ${planetes[i]} té anells.`);
    } else {
        console.log(`El planeta ${planetes[i]} NO té anells.`)
    }
}