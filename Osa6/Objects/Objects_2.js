/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

let library = {
  Book1: {
    title: "WebDeveloptment101",
    author: "Kimmo Koski",
    yearPublished: 2020,
  },

  Book2: {
    title: "BusinessBook",
    author: "Matti Kiiski",
    yearPublished: 2010,
  },
};

console.log(library.Book1);
console.log(library.Book2);

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here

console.log(library.Book1.title);

library.Book2.yearPublished = 2012;
console.log(library.Book2);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

library.Book1.genres = [""];
console.log(library.Book1);

library.Book2.isAvailable = true;
console.log(typeof library.Book2.isAvailable);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}

library.Book3 = new Book("JS-Basics", "Joe Will", 2024, [
  "Programming",
  "Education",
]);

library.Book4 = new Book("CookBook", "Anthony Bourdain", 2003, ["Cooking"]);

console.log(library);
console.log(library.Book3);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

//ADD GENRES LATER!!!!

class createBook {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}

document.querySelector("form").onsubmit = function () {
  let usrTitle = document.getElementById("title").value;
  let usrAuthor = document.getElementById("author").value;
  let usrYearPublished = document.getElementById("yearPublished").value;
  let select = document.getElementById("genres"),
    options = select.getElementsByTagName("option"),
    values = [];
    
  for (var i = options.length; i--; ) {
    if (options[i].selected) values.push(options[i].value);
  }
  let usrGenres = values;

  console.log(usrTitle);
  console.log(usrAuthor);
  console.log(usrYearPublished);
  console.log(usrGenres);

  let usrBook = new createBook(usrTitle, usrAuthor, usrYearPublished, usrGenres);


  console.log(library);
  console.log(usrBook);
  return false;
};

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const libraryString = JSON.stringify(library);
console.log(libraryString);

const libraryObject = JSON.parse(libraryString);
console.log(libraryObject.Book1.title);