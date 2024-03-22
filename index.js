let productTable = document.getElementById("tabelaProduto");
let machineSelect = document.getElementById("machine-select");
let customerSelect = document.getElementById("customer-select");
let totalStock = 0;

// Função para adicionar produto à tabela
function addProduct() {
    let productName = document.getElementById("product-name").value;
    let productQuantity = document.getElementById("product-quantity").value;

    if (productName && productQuantity) {
        let newRow = productTable.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        cell1.innerHTML = productName;
        cell2.innerHTML = productQuantity;

        totalStock += parseInt(productQuantity);
        document.getElementById("total-stock").innerHTML = totalStock;

        clearProductFields();
    } else {
        alert("Por favor, preencha o nome e a quantidade do produto.");
    }
}

// Função para limpar campos do produto
function clearProductFields() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value = "";
}

// Função para remover produto da tabela
function removeProduct() {
    let rowCount = productTable.rows.length;
    if (rowCount > 1) {
        let lastRow = productTable.rows[rowCount - 1];
        let quantityToRemove = parseInt(lastRow.cells[1].innerHTML);
        totalStock -= quantityToRemove;
        productTable.deleteRow(rowCount - 1);
        document.getElementById("total-stock").innerHTML = totalStock;
    } else {
        alert("Não há produtos para remover.");
    }
}

// Função para adicionar máquina à lista de seleção
function addMachine() {
    let machineName = document.getElementById("machine-name").value;
    let machineRate = document.getElementById("machine-rate").value;

    if (machineName && machineRate) {
        let option = document.createElement("option");
        option.text = `${machineName} - R$ ${machineRate}/h`;
        machineSelect.add(option);

        clearMachineFields();
    } else {
        alert("Por favor, preencha o nome e a tarifa da máquina.");
    }
}

// Função para limpar campos da máquina
function clearMachineFields() {
    document.getElementById("machine-name").value = "";
    document.getElementById("machine-rate").value = "";
}

// Função para adicionar cliente à lista de seleção
function addCustomer() {
    let customerName = document.getElementById("customer-name").value;
    let customerEmail = document.getElementById("customer-email").value;
    let customerPhone = document.getElementById("customer-telefone").value;

    if (customerName && customerEmail && customerPhone) {
        let option = document.createElement("option");
        option.text = `${customerName} - ${customerEmail} - ${customerPhone}`;
        customerSelect.add(option);

        clearCustomerFields();
    } else {
        alert("Por favor, preencha todos os campos do cliente.");
    }
}

// Função para limpar campos do cliente
function clearCustomerFields() {
    document.getElementById("customer-name").value = "";
    document.getElementById("customer-email").value = "";
    document.getElementById("customer-telefone").value = "";
}

// Função para agendar uso da máquina
function scheduleUsage() {
    let selectedMachine = machineSelect.value;
    let usageTime = document.getElementById("usage-time").value;
    let selectedCustomer = customerSelect.value;

    // Implemente a lógica de agendamento aqui
    alert(`Máquina: ${selectedMachine}, Tempo de Uso: ${usageTime}, Cliente: ${selectedCustomer}`);

    // Limpa o campo de tempo de uso
    document.getElementById("usage-time").value = "";
}

// Adiciona event listeners aos botões
document.getElementById("buttonProduto").addEventListener("click", addProduct);
document.getElementById("buttonRemover").addEventListener("click", removeProduct);
document.getElementById("buttonCadastrar").addEventListener("click", addMachine);
document.getElementById("buttonCliente").addEventListener("click", addCustomer);
document.getElementById("buttonAgendar").addEventListener("click", scheduleUsage);
