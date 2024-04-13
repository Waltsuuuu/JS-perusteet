/*Develop a program that outputs all even, positive numbers less than 100 in the following pattern:
 2, 98, 4, 96, 6, 94, 
and so on, up to the last number before 100. Display the result in a single line. */

let myArray = []

for (let i = 2; i < 100; i += 2) {
    myArray.push(i, 100 - i); //pushes 1 AND limit - i, so 100 - i, into myArray. 
  }

console.log(myArray);

//the for-loop returns the numbers in both pairs ex( 2, 98 AND 98, 2) so we split the array in half.
myArray.length = 49;

//creates and returns a new string by concatenating all of the elements in this array, separated by commas. or "into a single line"
let result = myArray.join(', ');

//prints the result
console.log(result);