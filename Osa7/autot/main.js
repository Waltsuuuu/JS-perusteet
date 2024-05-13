class Auto {
  constructor(rekisterinumero, valmistaja, malli, omistaja, hinta, vari) {
    (this.rekisterinumero = rekisterinumero),
      (this.valmistaja = valmistaja),
      (this.malli = malli),
      (this.omistaja = omistaja),
      (this.hinta = hinta),
      (this.vari = vari);
  }

  autoTaulukko() {
    const table = document.getElementById("autoTable");
    const newRow = table.insertRow(-1);
    const cellRekisteri = newRow.insertCell();
    const cellValmistaja = newRow.insertCell();
    const cellMalli = newRow.insertCell();
    const cellOmistaja = newRow.insertCell();
    const cellHinta = newRow.insertCell();
    const cellVari = newRow.insertCell();

    cellRekisteri.textContent = this.rekisterinumero;
    cellValmistaja.textContent = this.valmistaja;
    cellMalli.textContent = this.malli;
    cellOmistaja.textContent = this.omistaja;
    cellHinta.textContent = this.hinta;
    cellVari.textContent = this.vari;
  }

  // Method to save Auto data to local storage
  static saveAutot(autot) {
    localStorage.setItem("autot", JSON.stringify(autot));
    alert("Autot data saved to local storage!");
  }

  // Method to load Auto data from local storage
  static loadAutot() {
    let storedAutot = localStorage.getItem("autot");
    if (storedAutot) {
      let autoData = JSON.parse(storedAutot);
      autoData.forEach(function (autoData) {
        let auto = new Auto(
          autoData.rekisterinumero,
          autoData.valmistaja,
          autoData.malli,
          autoData.omistaja,
          autoData.hinta,
          autoData.vari
        );
        auto.autoTaulukko(); // Add loaded Auto to the table
      });
    }
  }
}

function addAuto(event) {
  event.preventDefault();

  const rekisterinumero = document.getElementById("rekisterinumeroInput").value;
  const valmistaja = document.getElementById("valmistajaInput").value;
  const malli = document.getElementById("malliInput").value;
  const omistaja = document.getElementById("omistajaInput").value;
  const hinta = document.getElementById("hintaInput").value;
  const vari = document.getElementById("variInput").value;

  if (rekisterinumero && valmistaja && malli && omistaja && hinta && vari) {
    var auto = new Auto(
      rekisterinumero,
      valmistaja,
      malli,
      omistaja,
      hinta,
      vari
    );
    auto.autoTaulukko(); // Add new Auto to the table
    clearInput(); // Clear input fields after adding Auto
  } else {
    alert("Please fill in all fields!");
  }
}

function clearInput() {
  document.getElementById("rekisterinumeroInput").value = "";
  document.getElementById("valmistajaInput").value = "";
  document.getElementById("malliInput").value = "";
  document.getElementById("omistajaInput").value = "";
  document.getElementById("hintaInput").value = "";
  document.getElementById("variInput").value = "";
}

function saveTable() {
  var autot = [];
  let table = document.getElementById("autoTable");
  for (var i = 1; i < table.rows.length; i++) {
    var autoData = {
      rekisterinumero: table.rows[i].cells[0].textContent,
      valmistaja: table.rows[i].cells[1].textContent,
      malli: table.rows[i].cells[2].textContent,
      omistaja: table.rows[i].cells[3].textContent,
      hinta: table.rows[i].cells[4].textContent,
      vari: table.rows[i].cells[5].textContent,
    };
    autot.push(autoData);
  }
  Auto.saveAutot(autot); // Save Auto data to local storage
}

function deleteTable() {
  answer = window.prompt(
    "Oletko varma, että haluat nollata taulukon ja muistin? Kyllä, vastaa Y. Ei, vastaa N."
  );
  if ((answer = "Y")) {
    localStorage.clear();
    location.reload();
  } else {
  }
}

function searchCars(event) {

}

function refreshData() {
  location.reload();
  return;
};
// Load Auto data from local storage on page load
window.onload = function () {
  Auto.loadAutot(); // Load Auto data from local storage
};

document.getElementById("refreshData").addEventListener('click', refreshData);

document.getElementById("saveData").addEventListener("click", saveTable);

document.getElementById("deleteData").addEventListener("click", deleteTable);

document.getElementById("autoSearch").addEventListener("click", searchCars);

document.getElementById("autoSubmit").addEventListener("click", addAuto);

