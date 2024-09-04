let number = [1,2,3,4,5,6,7,8];

//number.forEach(square);
//number.forEach(display);

let fruit =["apple","banana","coconut","orange"];
fruit.forEach(capitalize);
//fruit.forEach(display);
function uppercase(element,index,array)
{
    array[index]= element.toUpperCase();
}

function capitalize(element,index,array)
{
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
function square(element,index,array)
{
    array[index] = Math.pow(element,2);
}

function display(element)
{
    console.log(element);
}

//Now working with map function

let s = number.map(Squared);
function Squared(element)
{
    return Math.pow(element,2);
}
//console.log(s);
// an entire function can be passed as an argument//
let a = number.map(function(element)
{
    return Math.pow(element,2);
})

//console.log(a);
//console.log(Math.max(...number));

let even = number.filter( function(element)
{
    return element%2==0;
})
console.log(even)

//arrow function

let odd = number.filter((element)=> element%2!=0)
console.log(odd);