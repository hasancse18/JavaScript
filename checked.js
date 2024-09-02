

const checkbox = document.getElementById("checkbox");
const visa =document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const subresult = document.getElementById("subresult");
const cardresult = document.getElementById("cardresult");
const btn = document.getElementById("btn");

console.log("you are here")
btn.onclick = function()
{
    if(checkbox.checked)
    {
        subresult.textContent=`You Are Subscribed`;
    }
    else
    {
        subresult.textContent=`You Are not Subscribed!`;
    }

    if(visa.checked)
    {
        cardresult.textContent=`You Are Paying with Visa Card`;
    }
    else if(mastercard.checked)
    {
        cardresult.textContent = `You Are Paying with MasterCard`
    }
    else if (paypal.checked)
    {
        cardresult.textContent=`You Are Paying with PayPal`
    }
    else
    {
        cardresult.textContent=`You Are not Paying`
    }
}