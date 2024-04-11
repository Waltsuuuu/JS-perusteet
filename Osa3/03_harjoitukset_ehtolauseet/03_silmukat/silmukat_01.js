// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.


//Creates empty array
let myArray = [];

/* For-loop. (i starts at 1, i does not go over 100, i gets incremented by 2) 
{pushes (adds to the end of array) i into myArray},this goes on until we reach 99. */ 
for (let i = 1; i < 100; i += 2) {
  myArray.push(i);
}

console.log(myArray);

