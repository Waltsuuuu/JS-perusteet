//selects the first element with class "form-container"
const order = document.querySelector(".form-container");

//Function that calculates and updates total price.
const priceCalculator = () => {
  //pannukakku hinta
  const type = document.querySelector("#type");
  let typePrice = Number(type.value);

  console.log(`Pannukakku = ${typePrice}€`);

  //lisuke hinta
  let lisuke = document.getElementsByClassName("lisuke");
  let lisukePrice = 0;
  for (var i = 0; i < lisuke.length; i++) {
    if (lisuke[i].checked) {
      lisukePrice += Number.parseInt(lisuke[i].value);
    }
  }

  console.log(`Lisuke = ${lisukePrice}€`);

  //extra hinta
  let extra = document.getElementsByClassName("extra");
  let extraPrice = 0;
  for (var i = 0; i < extra.length; i++) {
    if (extra[i].checked) {
      extraPrice += Number.parseInt(extra[i].value);
    }
  }

  console.log(`Extra lisuke = ${extraPrice}€`);

  //kokonaishinta
  price = typePrice + lisukePrice + extraPrice;

  console.log(`KOKONAISHINTA = ${price}€`);

  //returns a collection of elements with the class totalPrice !!NOT ARRAY!!
  let hintaNäyttö = document.getElementsByClassName("totalPrice");

  console.log(hintaNäyttö);
  
  //Turns collection into array
  hintaNäyttöArr = Array.from(hintaNäyttö);

  //Runs function on each array element, function changes the elements innerHTML to variable price.
  hintaNäyttöArr.forEach((element) => element.innerHTML = (`${price}€`));

  //This was what I originally came up with, before realizing hintaNäyttö is not an array :))
  /*
  //iterates over the collection
  for (let i = 0; i < hintaNäyttö.length; i++) {
    //accesses each element
    const element = hintaNäyttö[i];
    //edits the text content of elements and replaces it with the price
    element.textContent = `${price}€`;
  }
  */
};

//when -change- happens in variable "order", run function priceCalculator.
order.addEventListener("change", priceCalculator);
