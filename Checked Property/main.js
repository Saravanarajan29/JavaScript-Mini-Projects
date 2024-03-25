const myCheckBox = document.getElementById("myCheckBox");
const visabtn = document.getElementById("visabtn");
const masrterCardbtn = document.getElementById("masrterCardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mySubmit = document.getElementById("mySubmit");
const subbtn = document.getElementById("subbtn");
const resultbtn = document.getElementById("resultbtn");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subbtn.textContent = `You are Subscribed!`;
    }
    else{
        subbtn.textContent = `You are Not Subscribed.`;
    }

    if(visabtn.checked){
        resultbtn.textContent = `You are using Visa for Payment.`;
    }
    else if(masrterCardbtn.checked){
        resultbtn.textContent = `You are using MasterCard for Payment.`;
    }
    else if(paypalbtn.checked){
        resultbtn.textContent = `You are using paypal for Payment.`;
    }
    else{
        resultbtn.textContent = `You Should Select Payment Type.`;
    }
}