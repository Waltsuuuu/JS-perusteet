const order = document.querySelector(".form-container");
const type = document.querySelector("#type");
let userName = document.getElementById("nameInput");
let userEmail = document.getElementById("emailInput");
let price;
var ordersArray = [];

//Name and Email
changeUsername = () => {
  userName = document.getElementById("nameInput").value;
};

changeEmail = () => {
  userEmail = document.getElementById("emailInput").value;
};

//PancakeOrder constructor
class PancakeOrder {
  constructor(userName, userEmail, typeSummary, lisukkeArray, extraArray, price, status) {
    (this.userName = userName),
    (this.userEmail = userEmail),
    (this.typeSummary = typeSummary),
    (this.lisukeArray = lisukkeArray),
    (this.extraArray = extraArray),
    (this.price = price),
    (this.status = status);
  }

  static saveOrder(ordersArray) {
    localStorage.setItem("orders", JSON.stringify(ordersArray));
  }

  static loadOrders() {
    let storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      let orderData = JSON.parse(storedOrders);
      orderData.forEach(function (orderData) {
        let order = new PancakeOrder(
          orderData.userName,
          orderData.userEmail,
          orderData.typeSummary,
          orderData.lisukeArray,
          orderData.extraArray,
          orderData.price,
          orderData.status
        )
        console.log(order);
        ordersArray.push(order);
      });
      };
    }
  };

//ORDER FORM - CALCULATES AND UPDATES USER ON ORDER PRICE.
const priceCalculator = () => {
  //Pancake price
  let typePrice = Number(type.value);
  console.log(`Type price = ${typePrice}€`);

  //Lisuke price
  let lisuke = document.getElementsByClassName("lisuke");
  let lisukePrice = 0;
  for (var i = 0; i < lisuke.length; i++) {
    if (lisuke[i].checked) {
      lisukePrice += Number.parseInt(lisuke[i].value);
    }
  }
  console.log(`Lisuke price= ${lisukePrice}€`);

  //Extra price
  let extra = document.getElementsByClassName("extra");
  let extraPrice = 0;
  for (var i = 0; i < extra.length; i++) {
    if (extra[i].checked) {
      extraPrice += Number.parseInt(extra[i].value);
    }
  }
  console.log(`Extra price = ${extraPrice}€`);

  //Total price
  price = typePrice + lisukePrice + extraPrice;
  console.log(`Total price = ${price}€`);

  //The above gets the value numbers for price, below gets the value names for order summary and creating order object.

  //Type pancake summary
  typeSummary = type.options[type.selectedIndex].id;
  console.log(`TYPE = ${typeSummary}`);

  //Lisuke summary
  lisukeArray = [];
  for (var i = 0; i < lisuke.length; i++) {
    if (lisuke[i].checked) {
      lisukeArray.push(lisuke[i].id);
    }
  }
  console.log(`LISUKKEET = ${lisukeArray}`)

  //Extras summary
  extraArray = [];

  for (var i = 0; i < extra.length; i++) {
    if (extra[i].checked) {
      extraArray.push(extra[i].id);
    }
  }
  console.log(`EXTRAS = ${extraArray}`);

  //DOM CHANGES BELOW

  //Shows the live change in price
  let priceDisplay = document.querySelector(".totalPrice");
  priceDisplay.textContent = `${price}€`;

  //Price change animation
  const banner = document.getElementById("price-banner");
  banner.animate(
    [
      { transform: "scale(1)" },
      { transform: "rotate(90deg)" },
      { transform: "scale(1.1)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 200,
      iterations: 1,
    }
  );
};

//Reveals hidden elements if user decides to go back and change order
const returnToOrder = () => {
  document.getElementById("orderSummary").style.display = "none";
  order.style.display = "";
  document.getElementById("submitOrder").style.display = "";
  document.getElementById("lisukeLi").style.display = "";
  document.getElementById("extraLi").style.display = "";
  document.getElementById("price-banner").style.display = "";
};

//SUBMITTING ORDER - User gets to view summary of their order
const submitOrder = () => {
  //Stops user from advancing if they have no entered their name or email
  if (document.getElementById("nameInput").value == "") {
    window.alert("Lisää tilaajan nimi!");
    return;
  }

  if (document.getElementById("emailInput").value == "") {
    window.alert("Enter email");
    return;
  }

  //Makes sure user email is correctly formatted
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userEmail.match(mailformat)) {
  } else {
    window.alert("You have entered an invalid email address!");
    return;
  }

  //Hides order form and reveals order summary section
  document.getElementById("orderSummary").style.display = "flex";
  order.style.display = "none";
  document.getElementById("submitOrder").style.display = "none";
  document.getElementById("price-banner").style.display = "none";

  //Gets users order details and lists them in summary
  document.getElementById("namePlaceholder").textContent = userName;
  document.getElementById("emailPlaceholder").textContent = userEmail;
  document.getElementById("typePlaceholder").innerHTML = typeSummary;

  //If user doesnt select lisukkeet/extras, li hidden.
  if (lisukeArray.length <= 0) {
    document.getElementById("lisukeLi").style.display = "none";
  } else {
    document.getElementById("lisukePlaceholder").textContent =
      lisukeArray.join(", ");
  }

  if (extraArray.length <= 0) {
    document.getElementById("extraLi").style.display = "none";
  } else {
    document.getElementById("extraPlaceholder").textContent =
      extraArray.join(", ");
  }
  document.getElementById("pricePlaceholder").textContent = `${price}€`;
};

//FINAL ORDER CONFIRMATION 
const finalOrder = () => {
  document.getElementById("orderSummary").style.display = "none";
  document.getElementById("kiitos").style.display = "flex";

  var userOrder = {
    userName,
    userEmail,
    typeSummary,
    lisukeArray,
    extraArray,
    price,
  };
  console.log(userOrder);

  ordersArray.push(userOrder);

  PancakeOrder.saveOrder(ordersArray);

};

//REFRESH PAGE - After order is completed
const returnHome = () => {
  location.reload();
}

//Loads orders from localstorage.
window.onload = function () {
  PancakeOrder.loadOrders();
}

//EVENTLISTENERS
order.addEventListener("change", priceCalculator);
document.getElementById("submitOrder").addEventListener("click", submitOrder);
userName.addEventListener("change", changeUsername);
userEmail.addEventListener("change", changeEmail);
document
  .getElementById("muokkaaTilausta")
  .addEventListener("click", returnToOrder);
document.getElementById("vahvistaTilaus").addEventListener("click", finalOrder);
document.getElementById('returnHome').addEventListener("click", returnHome);
