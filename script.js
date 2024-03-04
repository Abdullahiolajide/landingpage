const alertBg = document.getElementById("alert-container");
const alertBox = document.getElementById("alert-box");
const accountName = document.getElementById("account-name")
const accountNumber = document.getElementById("account-number")
const transferAmount = document.getElementById("transfer-amount")
// let accountBalance = document.querySelector("#balance")
// let confirm = document.getElementById('confirm');
// let cancelButton = document.getElementById("cancel-btn");

// Declaring value for balance in the localStorage

// console.log(accountBalance.innerHTML)
function customAlert(){
alertBox.style.display = "block"
alertBg.style.display = "block"
amount.innerHTML= '$' + transferAmount.value;
aName.innerHTML = accountName.value
aNumber.innerHTML = accountNumber.value
}


function success(){
alertBox.style.display = "none"
alertBg.style.display = "none"
alert("success")
}
function cancelBtn(){
alertBox.style.display = "none"
alertBg.style.display = "none"
}