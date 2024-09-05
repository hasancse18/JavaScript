
console.log("you are here")
const people = [{name: "Hasan Ali", age: 30, gpa: 2.96},
                {name: "Arafat", age: 26, gpa: 3.54},
                {name: "Al Amin", age: 24, gpa: 2.57},
                {name: "Tonu", age: 27, gpa: 3.3}];

//sort depending on the value of their age//
people.sort((a,b) => a.age - b.age)

//console.log(people);


//Date time//

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const dateToday = date.getDate();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

const dayOfWeek = date.getDay();

console.log(year+" "+month+" "+dateToday+" "+hour+" "+min+" "+sec+" ")


