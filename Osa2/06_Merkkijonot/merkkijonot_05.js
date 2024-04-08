/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
    return name.charAt(name.length -1);
  }
  
  // Esimerkki - älä muokkaa
  console.log(getLastCharacter('Sam')); // "m"
  console.log(getLastCharacter('Alex')); // "x"
  console.log(getLastCharacter('Charley')); // "y"
  
  
  
  // Treenaa: Keksi itse samanlainen funktio eri nimellä
  
  lastChar = (string) => {
    return string.slice(-1);
  }
  
  // Kutsu tekemääsi funktiota

  console.log(lastChar('Hubert'));