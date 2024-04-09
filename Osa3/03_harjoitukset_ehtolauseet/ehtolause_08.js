/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

 */

function pluralize(substantiivi, määrä) {
     if (määrä === 0) { 
        return (`${määrä} ${substantiivi}a`)
     } else if (määrä >= 2) {
        return (`${määrä} ${substantiivi}a`)
     } else {
        return (`${määrä} ${substantiivi}`)
     }

}

// Esimerkkikäyttö - älä muokkaa
console.log('Minulla on ' + pluralize('kala', 0));
console.log('Minulla on ' + pluralize('koira', 1));
console.log('Minulla on ' + pluralize('papukaija', 7));
console.log('Minulla on ' + pluralize('kissa', 10));


// Treenaa: Keksi itse samanlainen funktio eri nimellä.

plural = (word, amount) => {
    if (amount === 0) {
        return (`${amount} ${word}s`)
    } else if (amount >= 2) {
        return (`${amount} ${word}s`)
    } else {
        return (`${amount} ${word}`)
    }
}

// Kutsu tekemääsi funktiota

console.log('I have ' + plural('dog', 10));
console.log('I have ' + plural('horse', 0));
console.log('I have ' + plural('cat', 1));