const myimage = document.getElementById("myimage");
const btn = document.getElementById("btn");


btn.addEventListener("click",(event)=>
{
    if(myimage.style.visibility === "hidden")
    {
        myimage.style.visibility="visible";
        btn.textContent =`Hide`;
    }
    else
    {
        myimage.style.visibility="hidden";
        btn.textContent = `Show`
    }
})