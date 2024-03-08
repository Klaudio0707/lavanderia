// Initialize variables
let productTable = document.getElementById("tabelaProduto");
let machineTable = document.getElementById("machine-select");
let customerTable = document.getElementById("customer-select");
let totalStock = 0;

// Function to add product to the table
function addProduct() {
  let productName = document.getElementById("product-name").value;
  let productQuantity = document.getElementById("product-quantity").value;
  totalStock += parseInt(productQuantity);

  let newRow = productTable.insertRow(-1);
  newRow.insertCell(0).innerHTML = productName;
  newRow.insertCell(1).innerHTML = productQuantity;

  document.getElementById("total-stock").innerHTML = totalStock;

  // Clear input fields
  document.getElementById("product-name").value = "";
  document.getElementById("product-quantity").value = "";
}

// Function to remove product from the table
function removeProduct() {
  if (productTable.rows.length > 1) {
    totalStock -= parseInt(productTable.rows[1].cells[1].innerHTML);
    productTable.deleteRow(1);

    document.getElementById("total-stock").innerHTML = totalStock;
  }
}

// Function to add machine to the select element
function addMachine() {
  let machineName = document.getElementById("machine-name").value;
  let machineRate = document.getElementById("machine-rate").value;

  let newOption = document.createElement("option");
  newOption.value = machineName;
  newOption.innerHTML = machineName + " - R$ " + machineRate + "/h";

  machineTable.appendChild(newOption);

  // Clear input fields
  document.getElementById("machine-name").value = "";
  document.getElementById("machine-rate").value = "";
}

// Function to add customer to the select element
function addCustomer() {
  let customerName = document.getElementById("customer-name").value;
  let customerEmail = document.getElementById("customer-email").value;
  let customerPhone = document.getElementById("customer-telefone").value;

  let newOption = document.createElement("option");
  newOption.value = customerName;
  newOption.innerHTML = customerName + " - " + customerEmail + " - " + customerPhone;

  customerTable.appendChild(newOption);

  // Clear input fields
  document.getElementById("customer-name").value = "";
  document.getElementById("customer-email").value = "";
  document.getElementById("customer-telefone").value = "";
}

// Function to schedule machine usage
function scheduleUsage() {
  let selectedMachine = machineTable.value;
  let usageTime = document.getElementById("usage-time").value;
  let selectedCustomer = customerTable.value;

  // TODO: Implement functionality to schedule machine usage

  // Clear input fields
  document.getElementById("usage-time").value = "";
}

// Add event listeners to buttons
document.getElementById("buttonProduto").addEventListener("click", addProduct);
document.getElementById("buttonRemover").addEventListener("click", removeProduct);
