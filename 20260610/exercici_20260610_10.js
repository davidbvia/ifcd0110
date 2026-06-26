// Nota final teoria 75% i pràctica 25%
let teoria, practica;
function nota(teoria, practica) {
    let resultat = (teoria * 0.75) + (practica * 0.25)
    if (resultat >= 5) {
        return `Has aprovat amb un: ${resultat}`;
    } else {
        return `Has suspès amb una nota de: ${resultat}`;
    }
}
console.log(nota(6, 8)); 