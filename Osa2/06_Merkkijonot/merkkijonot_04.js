/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {
    return name.charAt(0);
}

// Esimerkki - älä muokkaa

console.log(getFirstCharacter('Amsterdam')); // "A"
console.log(getFirstCharacter('Japan')); // "J"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

firstChar = (string) => {
    return string.charAt(0);
}

// Kutsu tekemääsi funktiota

console.log(firstChar('Kasvi'));