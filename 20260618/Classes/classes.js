class Cotxe {
    constructor(nom, any) {
        this.nom = nom,
            this.any = any
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.any;
    }
}

// Inicialitzar el constructor i afegir nou objecte
const cotxe1 = new Cotxe(nom = "Ford", any = 2014);
console.log(`El meu cotxe és un ${cotxe1.nom} de l'any ${cotxe1.any}`);

// Mètodes de la classe
console.log(`L'edat del cotxe és de ${cotxe1.age()} anys.`);

// Recuperar l'edat del vehicle
document.getElementById("edat").innerHTML =
    `L'edat del vehicle és de <b>${cotxe1.age()}</b> anys`;

// Creació de la classe animal
class Animal {
    constructor(nom, pes, velocitat, color, edat, esperancaVida, especie, esPerillos,
        queMenjo, queEmMenja, habitat) {
        this.nom = nom,
            this.pes = pes,
            this.velocitat = velocitat,
            this.color = color,
            this.edat = edat,
            this.esperancaVida = esperancaVida,
            this.especie = especie,
            this.esPerillos = esPerillos,
            this.queMenjo = queMenjo,
            this.queEmMenja = queEmMenja,
            this.habitat = habitat
    }

    correr() { }
    caminar() { }
    menjar() { }
    amagarSe() { }
    lluitar() { }
}

// Afegir un animal a la classe
const animal1 = new Animal(nom = "Tigre", pes = "35 Kg.", edat = 12, especie = "Felina");

document.getElementById("nomAnimal").innerHTML = `Nom de l'animal: ${animal1.nom}`;
document.getElementById("pesAnimal").innerHTML = `Pes: ${animal1.pes}`;
document.getElementById("especieAnimal").innerHTML = `Espècie: ${animal1.especie}`;

// Herències (mira-t'ho a banda!!) -> https://www.w3schools.com/js/js_class_inheritance.asp

