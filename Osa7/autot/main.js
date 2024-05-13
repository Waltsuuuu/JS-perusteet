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
  event.preventDefault();

  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const table = document.getElementById("autoTable");
  const rows = table.getElementsByTagName("tr");
  let found = false;

  // Loop through all table rows (skip the first row - header row)
  for (let i = 1; i < rows.length; i++) {
    const rekisteriCell = rows[i].getElementsByTagName("td")[0]; // Get rekisteri cell (first column)
    if (rekisteriCell) {
      const rekisteriText = rekisteriCell.textContent.trim().toLowerCase();
      const display = rekisteriText.includes(searchInput); // Check if make matches search input
      console.log(rekisteriText);
      console.log(display);
      rows[i].style.display = display ? "" : "none"; // Show/hide row based on search result
      if (display) {
        found = true; // Set flag to true if at least one match is found
      }
    }

    if (!found) {
      window.alert("Rekisterinumerolla ei löytnyt autoja");
      document.getElementById('searchInput').value = "";
      rows[i].style.display = '';
      return;
    } else {   document.getElementById('searchInput').value = "";

    }
  }
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

/*
  userAuto = new Auto(
    rekisterinumero,
    valmistaja,
    malli,
    omistaja,
    hinta,
    vari
  );
  autot.push(userAuto);

  let autoTr = document.createElement("tr");
  document.getElementById("carTable").append(autoTr);

  let rekTd = document.createElement("td");
  let valTd = document.createElement("td");
  let malTd = document.createElement("td");
  let omiTd = document.createElement("td");
  let hinTd = document.createElement("td");
  let varTd = document.createElement("td");

  rekTd.textContent = userAuto.rekisterinumero;
  valTd.textContent = userAuto.valmistaja;
  malTd.textContent = userAuto.malli;
  omiTd.textContent = userAuto.omistaja;
  hinTd.textContent = userAuto.hinta;
  varTd.textContent = userAuto.vari;

  autoTr.append(rekTd, valTd, malTd, omiTd, hinTd, varTd);

  console.log(userAuto);
  console.log(autot);

  localStorage.setItem("AutotTaulukko", autoTaulukko);
  localStorage.setItem("AutotLista", JSON.stringify(autot));

  document.forms[0].reset();
};

document.getElementById("autoSubmit").addEventListener("click", addAuto);
*/
