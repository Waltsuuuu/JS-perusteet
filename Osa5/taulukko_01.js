// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:
teamMembers.forEach((element) => console.log(`Vastaus.1 ${element}`) );

// TAI NÄIN (week5 solutions)

for (const person of teamMembers) {
    console.log(person);
  }

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:
teamMembers.shift();

console.log(`Vastaus.2 ${teamMembers}`);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:
teamMembers.pop();

console.log(`Vastaus.3 ${teamMembers}`);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:

teamMembers.unshift("Aleksi");

console.log(`Vastaus.4 ${teamMembers}`);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:

teamMembers.push("Linda");

console.log(`Vastaus.5 ${teamMembers}`);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:

let newTeamMembers = teamMembers.slice(2);

console.log(`Vastaus.6 ${newTeamMembers}`);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:

let löydä = teamMembers.find((element) => element === "Miikka");

console.log(`Vastaus.7 ${löydä}`);

//Oikea vastaus: (koska haluttiin indeksi, eli "paikka numero". Array alkaa nollasta joten 0=Aleksi 1=Emilia ja 2=Miikka)

console.log(teamMembers);

console.log(teamMembers.indexOf('Miikka'));

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:

let etsi = teamMembers.find((element) => element === "Jaakko");

console.log(`Vastaus.8 ${etsi}`);

//Oikea vastaus, taas sama homma kun edellisessä
console.log(teamMembers.indexOf('Jaakko'));


// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:

teamMembers.splice(2, 1, "Karoliina", "Bettiina");

console.log(`Vastaus.9 ${teamMembers}`);

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:

let uusiTaulukko = [];

uusiTaulukko = teamMembers.concat("Hemmo");
console.log(uusiTaulukko)


// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:

uusiTaulukko = teamMembers.slice();
console.log(`V.11 ${uusiTaulukko}`);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ['Tiina', 'Daniel'];
// Kirjoita koodisi tähän:'

yhdistetty = uusiTaulukko.concat(newMembers);
console.log(`V.12 ${yhdistetty}`);


// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:

findJukka = teamMembers.filter((word) => word == "Jukka");

console.log(`V.13 ${findJukka}`);


// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:

bigLetters = teamMembers.map((teamMembers) => teamMembers.toUpperCase());

console.log(bigLetters);