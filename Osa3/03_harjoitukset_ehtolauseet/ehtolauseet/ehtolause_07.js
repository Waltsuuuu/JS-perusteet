/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/

assignGrade = (points) => {
    if (points >= 90) {
        return ("A")
    } else if (points >= 80) {
        return ("B")
    } else if (points >= 70) {
        return ("C")
    } else if (points >= 60) {
        return ("D")
    } else {
        return ("F")
    }
}


// Esimerkkikäyttö - älä muokkaa
console.log('Sinä sait ' + assignGrade(95)); // Sinä sait A
console.log('Sinä sait ' + assignGrade(81)); // Sinä sait B
console.log('Sinä sait ' + assignGrade(72)); // Sinä sait C
console.log('Sinä sait ' + assignGrade(64)); // Sinä sait D
console.log('Sinä sait ' + assignGrade(42)); // Sinä sait F



// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.

//10 points A, 9-8 points B, 7-6 points C, 5 points D, less F

function grader(score) {
    if (score === 10) {
        return ("Grade A")
    } else if (score >= 8) {
        return ("Grade B)")
    } else if (score >= 6) {
        return ("Grade C")
    } else if (score === 5) {
        return ("Grade D")
    } else {
        return("You failed")
    }
}


// Kutsu tekemääsi funktiota
console.log(grader(10));
console.log(grader(4));
console.log(grader(6));