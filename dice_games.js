const btn = document.getElementById("btn");
const num = document.getElementById("num");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

btn.onclick = function()
{
    const values=[];
    const images =[];
    const n= num.value;
    for(let i=0;i< n;i++)
    {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_games/${value}.png">`);
    }
    console.log(values);
    diceImages.innerHTML = images.join(" ");

}