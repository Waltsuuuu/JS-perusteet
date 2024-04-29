//selects the first element with class "form-container"
const order = document.querySelector(".form-container");

let userName = document.getElementById('nameInput');
changeUsername = () => {
  userName = document.getElementById('nameInput').value;
}
const type = document.querySelector("#type");


//Function that calculates and updates total price.
const priceCalculator = () => {
  //pannukakku hinta
  let typePrice = Number(type.value);

  console.log(`Pannukakku = ${typePrice}€`);

  //pannukakun tyyppi for summary
  typeSummary = type.options[type.selectedIndex].id;

  console.log(typeSummary);

  //lisuke hinta
  let lisuke = document.getElementsByClassName("lisuke");
  let lisukePrice = 0;
  for (var i = 0; i < lisuke.length; i++) {
    if (lisuke[i].checked) {
      lisukePrice += Number.parseInt(lisuke[i].value);
    }
  }
  console.log(`Lisuke = ${lisukePrice}€`);

  //lisuke array for summary
  lisukeArray = [];
  for (var i = 0; i < lisuke.length; i++) {
    if (lisuke[i].checked) {
      lisukeArray.push(lisuke[i].id);
    }
  }
  console.log(lisukeArray);

  //extra hinta
  let extra = document.getElementsByClassName("extra");
  let extraPrice = 0;
  for (var i = 0; i < extra.length; i++) {
    if (extra[i].checked) {
      extraPrice += Number.parseInt(extra[i].value);
    }
  }
  console.log(`Extra lisuke = ${extraPrice}€`);

  //extras array for summary
  extraArray = [];

  for (var i = 0; i < extra.length; i++) {
    if (extra[i].checked) {
      extraArray.push(extra[i].id);
    }
  }
  console.log(extraArray);

  let userName = document.getElementById('nameInput').value;
  console.log(userName);

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
};

const returnToOrder = () => {
  document.getElementById('orderSummary').style.display = 'none';
  order.style.display = "";
  document.getElementById('submitOrder').style.display = "";
}


//SUBMITTING ORDER
const submitOrder = () => {
//Stops user from advancing if they have no entered their name.
  if (document.getElementById('nameInput').value == ""){
    window.alert("Lisää tilaajan nimi!");
    return
  }

//Hides order form and reveals order summary section
  document.getElementById('orderSummary').style.display = 'flex';
  order.style.display = "none";
  document.getElementById('submitOrder').style.display = "none";

  document.getElementById('namePlaceholder').textContent = userName;
  document.getElementById('typePlaceholder').innerHTML = typeSummary;
  document.getElementById('lisukePlaceholder').textContent = lisukeArray.join(', ');
  document.getElementById('extraPlaceholder').textContent = extraArray.join(', ');
  document.getElementById('pricePlaceholder').textContent = `${price}€`;
}



//EVENTLISTNERS

//when -change- happens in variable "order", run function priceCalculator.
order.addEventListener("change", priceCalculator);
//when submitOrder is clicked, run function submitOrder.
document.getElementById('submitOrder').addEventListener('click', submitOrder);
//when username text field is changed, run function changeUsername
userName.addEventListener('change', changeUsername);
//when user clicks 'palaa muokkaamaan tilausta on the summary page, returns user to order page.
document.getElementById('muokkaaTilausta').addEventListener('click', returnToOrder);




