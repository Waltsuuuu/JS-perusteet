class PancakeOrder {
  constructor(
    userName,
    userEmail,
    typeSummary,
    lisukkeArray,
    extraArray,
    price,
    status
  ) {
    (this.userName = userName),
      (this.userEmail = userEmail),
      (this.typeSummary = typeSummary),
      (this.lisukeArray = lisukkeArray),
      (this.extraArray = extraArray),
      (this.price = price),
      (this.status = status);
  }

  tilausTaulukko() {
    const table = document.getElementById("orderTable");
    const newRow = table.insertRow(-1);
    const cellName = newRow.insertCell();
    const cellEmail = newRow.insertCell();
    const cellType = newRow.insertCell();
    const cellLisuke = newRow.insertCell();
    const cellExtra = newRow.insertCell();
    const cellPrice = newRow.insertCell();
    const cellStatus = newRow.insertCell();

    cellName.textContent = this.userName;
    cellEmail.textContent = this.userEmail;
    cellType.textContent = this.typeSummary;
    cellLisuke.textContent = this.lisukeArray;
    cellExtra.textContent = this.extraArray;
    cellPrice.textContent = `${this.price}€`;
    cellStatus.textContent = this.status;
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
        );
        order.tilausTaulukko();
        console.log(storedOrders);
          });
    }
  }
};

window.onload = function () {
    PancakeOrder.loadOrders();
  };
  
const deleteData = () => {
    localStorage.clear();
    location.reload()
}

document.getElementById('deleteAll').addEventListener('click', deleteData);