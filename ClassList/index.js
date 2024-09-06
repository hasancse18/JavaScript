let buttons = document.querySelectorAll(".myButton")

buttons.forEach(element =>{
    element.classList.add("enabled")
})

buttons.forEach(button =>
{
    button.addEventListener("mouseover",event=>{
        button.classList.toggle("hover");
    });

    button.addEventListener("mouseout",event=>{
        button.classList.toggle("hover");
    });
}
);

buttons.forEach( button =>{
    button.addEventListener("click", event=>{
        if(button.contains("disabled"))
        {
            button.textContent+="😒";
        }
        else
        {
            button.classList.add("disabled");
        }
    } );
});