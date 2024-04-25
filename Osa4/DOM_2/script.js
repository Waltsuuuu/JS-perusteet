/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

document.getElementById("addFruitBtn").addEventListener("click", function () {
    let fruit = document.getElementById("fruitInput").value;
    console.log(fruit);
    
    const li = document.createElement("li");
    li.innerHTML = `${fruit}`;
    document.getElementById("fruitList").append(li);
    document.getElementById("fruitInput").value = "";
});