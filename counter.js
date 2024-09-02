

const countable = document.getElementById("countable");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");

let count =0;
decreasebtn.onclick = function()
{
    count--;
    countable.textContent = count;
}
resetbtn.onclick = function()
{
    count =0;
    countable.textContent= count;
}

increasebtn.onclick = function()
{
    count++;
    countable.textContent = count;
}
let z ;
console.log(Math.sin(3.1416/6));