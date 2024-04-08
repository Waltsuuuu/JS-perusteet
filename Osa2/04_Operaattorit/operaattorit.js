/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/

//Muuttujat a ja b, joilla molemmilla kokonaislukuarvot
let a = 1;
let b = 2;
//Laskee luvut a ja b yhteen
let summa = a + b;
//Vähentää luvun a luvusta B
let erotus = a - b;
//Suorittaa kertolaskun
let tulo = a * b;
//Suorittaa jakolaskun
let osamäärä = a / b;
//Kertoo onko jakolaskun tulos parillinen vai pariton. Output 0 jos parillinen ja Output 1 jos pariton.
let jakojäännös = a % b;

//Tulostaa operaatioiden luvut consoliin
console.log(summa)
console.log(erotus)
console.log(tulo)
console.log(osamäärä)
console.log(jakojäännös)