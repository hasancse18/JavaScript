console.log("you are here")

function walkDog()
{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>
            {
                resolve("You Walk the Dog");
            },1500)
    });
}

function cleanKitchen()
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("You Clean The Kithcen");
        }, 2500);
    });
}

function takeOutTrash()
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("You Take Out the Trash");
        }, 500);
    });
    
}

walkDog().then((value)=>{ console.log(value); return cleanKitchen()} )
         .then((value)=>{ console.log(value); return takeOutTrash()})
         .then((value)=>{ console.log(value); console.log("You are Finished")})
         
            