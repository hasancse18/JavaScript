const mybox = document.getElementById("myBox");


mybox.addEventListener("click",function()
{
    mybox.textContent =`Hit Slow My Baby!`;
    mybox.style.backgroundColor ="red";
})

mybox.addEventListener("mouseover", (event) =>
{
    mybox.style.borderRadius = "0px";
    mybox.style.transition ="1s ease";
    mybox.textContent =`Hit Me Baby!`;
    mybox.style.backgroundColor = "tomato";
    
})

mybox.addEventListener("mouseleave",event=>{
    mybox.textContent=`Don't Leave Me`;
    mybox.style.transition ="2s ease";
    mybox.style.borderRadius = "50px";
})