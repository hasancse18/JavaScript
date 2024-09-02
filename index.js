// console.log("This is from Script");

// let x = 2;
// console.log(x);

// let age = 26;
// let name = "hasan";
// console.log(`My name is ${name} and my age is ${age}`);

// document.getElementById("p1").textContent = `my name is ${name} and I am ${age} years old`;
//document.getElementsByClassName("p2").textContent=`my name is {name}`;
//taking input 
// easy way

// let username = window.prompt("User name please");
// console.log(username);

//professional way
// let username;
// document.getElementById("btn").onclick = function(){
//     username= document.getElementById("mytext").value;
//     document.getElementById("greet").textContent=`Hello ${username}`
// }



//calculate the Circumfenrence of the Circle
let area;
let radi;
const pi = 3.1416;
document.getElementById("btn").onclick = function()
{
    radi = document.getElementById("mytext").value;
    radi = Number(radi);
    area = 2*pi*radi;
    document.getElementById("r").textContent= `${area} cm`;
}

