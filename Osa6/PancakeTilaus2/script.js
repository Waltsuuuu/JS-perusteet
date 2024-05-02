const order = document.querySelector(".form-container");
//Global variable for pancake type
const type = document.querySelector("#type");
let userName = document.getElementById("nameInput");
let userEmail = document.getElementById("emailInput");

changeUsername = () => {
  userName = document.getElementById("nameInput").value;
};

changeEmail = () => {
  userEmail = document.getElementById("emailInput").value;
};

class pancakeOrder {
  constructor(name, email, type, lisukkeet, extras, price, status) {
    this.name = name;
    this.email = email;
    this.type = type;
    this.lisukkeet = lisukkeet;
    this.extra = extras;
    this.price = price;
    this.status = status
  }
}

const orders = [];


//ORDER FORM - CALCULATES AND UPDATES USER ON ORDER PRICE.
const priceCalculator = () => {
  //Pancake price
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

 // let userName = document.getElementById("nameInput").value;
  console.log(userName);

  //kokonaishinta
  let price = typePrice + lisukePrice + extraPrice;

  console.log(`KOKONAISHINTA = ${price}€`);

  //returns a collection of elements with the class totalPrice !!NOT ARRAY!!
  let hintaNäyttö = document.getElementsByClassName("totalPrice");

  console.log(hintaNäyttö);

  //Turns collection into array
  hintaNäyttöArr = Array.from(hintaNäyttö);

  //Runs function on each array element, function changes the elements innerHTML to variable price.
  hintaNäyttöArr.forEach((element) => (element.innerHTML = `${price}€`));

  const banner = document.getElementById('price-banner');
  banner.animate(
    [
     {transform: 'translateY(0)'},
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
  
};

//Re-reveals hidden elements if user decides to go back to change order
const returnToOrder = () => {
  document.getElementById("orderSummary").style.display = "none";
  order.style.display = "";
  document.getElementById("submitOrder").style.display = "";
  document.getElementById("lisukeLi").style.display = "";
  document.getElementById("extraLi").style.display = "";
  document.getElementById("price-banner").style.display = "";
};

//SUBMITTING ORDER - User gets summary of their order to review.
const submitOrder = () => {
  //Stops user from advancing if they have no entered their name or email
  if (document.getElementById("nameInput").value == "") {
    window.alert("Lisää tilaajan nimi!");
    return;
  };

  if (document.getElementById('emailInput').value == "") {
    window.alert("Enter email");
    return;
  };

  //Makes sure user email is correctly formatted
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userEmail.match(mailformat)){
  } else {
    window.alert("You have entered an invalid email address!");
    return;
  };

  //Hides order form and reveals order summary section
  document.getElementById("orderSummary").style.display = "flex";
  order.style.display = "none";
  document.getElementById("submitOrder").style.display = "none";
  document.getElementById("price-banner").style.display = "none";

  //Gets users order details and lists them in summary
  document.getElementById("namePlaceholder").textContent = userName;
  document.getElementById("emailPlaceholder").textContent = userEmail;
  document.getElementById("typePlaceholder").innerHTML = typeSummary;
  
  //If user doesnt select lisukkeet, lisukkeet listitem hidden. 
  //If lisukkeet selected, display lisukkeet array
  if (lisukeArray.length <= 0) {
    document.getElementById("lisukeLi").style.display = "none";
  } else {  
  document.getElementById("lisukePlaceholder").textContent =
    lisukeArray.join(", ")
  };

  if (extraArray.length <= 0) {
    document.getElementById("extraLi").style.display = "none";
  } else {
  document.getElementById("extraPlaceholder").textContent =
    extraArray.join(", ");
  }
  document.getElementById("pricePlaceholder").textContent = `${price}€`;
}

//FINAL ORDER CONFIRMATION
const finalOrder = () => {
  document.getElementById("orderSummary").style.display = "none";
  document.getElementById("kiitos").style.display = "block";





  const order = new pancakeOrder(userName, userEmail, typeSummary, lisukeArray, extraArray, price);
  console.log(order);

  orders.push(order);

  const ordersString = JSON.stringify(orders);

  const userOrderJSON = JSON.stringify(order);

  localStorage.setItem('userOrder', userOrderJSON);

  localStorage.setItem('orders', ordersString);

  

}

//EVENTLISTENERS

//when -change- happens in variable "order", run function priceCalculator.
order.addEventListener("change", priceCalculator);
//when submitOrder is clicked, run function submitOrder.
document.getElementById("submitOrder").addEventListener("click", submitOrder);
//when username text field is changed, run function changeUsername
userName.addEventListener("change", changeUsername);
//when userEmail textfield is change, run function changeEmil
userEmail.addEventListener("change", changeEmail);
//when user clicks 'palaa muokkaamaan tilausta on the summary page, returns user to order page.
document.getElementById("muokkaaTilausta").addEventListener("click", returnToOrder);
//when user clicks vahvista tilaus, run finalOrder function
document.getElementById("vahvistaTilaus").addEventListener("click", finalOrder)
