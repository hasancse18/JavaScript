const random1 = document.getElementById("random1");
const random2 = document.getElementById("random2");
const random3 = document.getElementById("radom3");

const button = document.getElementById("btn");
let max = 6;
let min = 1;
let x;
button.onclick= function()
{
    random1.textContent= Math.floor(Math.random()*max)+min;
    random2.textContent= Math.floor(Math.random()*max)+min;
    random3.textContent= Math.floor(Math.random()*max)+min;
}