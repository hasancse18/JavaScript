const mybox = document.getElementById("mybox");

let x=0;
let y=0;
document.addEventListener("keydown",(event)=>{
    if(event.key.startsWith("Arrow"))
    {
        switch(event.key)
        {
            case "ArrowUp":
                y-=10;
                break;
            case "ArrowDown":
                y+=10;
                break;
            case "ArrowRight":
                x+=10;
                break;
            case "ArrowLeft":
                x-=10;
                break;
        }
        if(y<20)
        {
            mybox.textContent ='🤨';
            mybox.style.backgroundColor = "lightblue";
        }
        else if(y>=20)
            {
                mybox.textContent =`😒`;
            }
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
        
    }
})