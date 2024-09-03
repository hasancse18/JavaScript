


const textbox = document.getElementById("textbox");
const farhenhite = document.getElementById("farhenhite");
const celcius = document.getElementById("celcius");
const result = document.getElementById("result");
const button = document.getElementById("button");

let temp;
button.onclick = function()
{
    if(farhenhite.checked)
    {
        temp= Number(textbox.value);

        temp = ((temp*9)/5)+32;
        result.textContent = temp.toFixed(1) +" F";
    }
    else if(celcius.checked)
    {
        temp= Number(textbox.value);
        temp = ((temp-32)/9)*5;
        result.textContent = temp.toFixed(1) + " C";
    }
    else
    {
        result.textContent = `Select a Unit`;
    }
}
