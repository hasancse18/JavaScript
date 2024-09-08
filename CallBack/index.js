//console.log("you are Here")


function task2(call)
{
    setTimeout(function(){
        console.log("This is Task 2");
        call();
    },1000)
}


function task1(call)
{
   setTimeout(()=>{
    console.log("This is Task 1");
    call();
   },2000) 
}



function task3(call)
{
    setTimeout(()=>{
        console.log("This is Task 3");
        call();
    },3000)
}

//this is one way
// task1(function()
// {
//     task2(function(){
//         task3(function(){
//             console.log("All Task Completed");
//         });
//     });
// });

//We can call That through Anonymous Function//
task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("All Task Completed");
        });
    });
});
