function isEven(a)
{
    return a%2===0? "Even" : "Odd";
}

console.log(`The number is ${isEven(11)}`);

function add(a,b)
{
    return a+b;
}

function subtraction(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

//console.log(`The Addition ${add(2,3)}`)

//rest operators

function addNumber(...numbers)
{
    let sum=0;
    for(number of numbers)
    {
        sum+=number;
    }
    return sum;
}


function average(...numbers)
{
    let avg=0;
    for(number of numbers)
    {
        avg +=number;
    }
    return avg/numbers.length;
}

const result = average(1,2,3,4,5,6,7);
console.log(result.toFixed(1));

//spread operator

let numbers =["hasan","arafat"];
console.log(numbers);

let name = "hasan";
let name1 = ["arafat","roza"];
//name = [...name].join("-");
console.log([...name].join("-"));
console.log(...name)

let str = [name,...name1];
console.log(str);