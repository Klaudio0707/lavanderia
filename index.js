

function addStock() {
 const nomeProduto = document.getElementById("product-name");
 

}




window.onload = function() {
//coleta dos click do botão e select da tabela
    buttonAdd = document.getElementById("buttonProduto");
    tabelaP = document.getElementById("tabelaProduto");


//coleta dos input nome e quantidade  do produto para estoque
    nomeProduto = document.getElementById("product-name");
    quantidadeProduto = document.getElementById("product-quantity");
   


    buttonAdd.addEventListener("click", function(){
        let trProduto = document.createElement("tr");
    
        trProduto.innerHTML = 
            `
             <td> ${nomeproduto} </td>
             <td> ${quantidadeProduto} </td>

            `
    
            tabelaP.appendChild(trProduto);
    });
}
