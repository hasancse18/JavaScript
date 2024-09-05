function updateClock()
{
    const now = new Date();
    let hours = now.getHours();
    const meridem = hours>=12? "PM":"AM";
    hours = hours % 12 || 12;
   // meridem= meridem.toString();
    hours = hours.toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);//double digit er jonne
    const sec = now.getSeconds().toString().padStart(2,0);

    const time = `${hours}:${min}:${sec} ${meridem}`;
    document.getElementById("clock").textContent=time;
}

updateClock();
setInterval(updateClock,1000);