/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

let num1 = parseFloat("123.856");
let num2 = parseFloat("654.321");

let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

let sqrtNum1 = Math.sqrt(roundedNum1);

let maxNum = Math.max(num1, num2)

console.log(roundedNum1)
console.log(roundedNum2)
console.log(sqrtNum1)
console.log(maxNum)

console.log(typeof num1)
console.log(typeof roundedNum1)
console.log(typeof sqrtNum1)
console.log(typeof maxNum)