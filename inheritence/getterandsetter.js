class Person{
    
    set firstName(nfirstName)
    {
        if(typeof nfirstName ==="string")
        {
            this._firstName = nfirstName;
            //console.log("value initialized");
        }
        else
        {
            console.error("Name must be string");
        }
    }
    set lastName(name)
    {
        this._lastName = name;
    }
    get firstName()
    {
        return this._firstName;
    }
    get fullName()
    {
        return this._firstName+" "+this._lastName;
    }
    
    
}

// let person = new Person();
// person.firstName="hasan";
// person.lastName ="ali";
// //console.log(person.firstName)
// console.log(person.fullName)

//Destructuring: Extract values from Object

const person1 ={
    firstName: "Hasan",
    lastName: "Ali",
    age: 26,
    //job: "NRI"
}

const person2 ={
    firstName: "Arafat",
    lastName: "Ibna Mizan",
    age: 26,
    //job: "Teacher"
}

const{firstName,  age,lastName,job="Student"}=person2;

// console.log(firstName);
// console.log(lastName)
// console.log(age)
// console.log(job);

//print using display function

function display({firstName,lastName, age, job="student"})
{
    console.log(firstName);
    console.log(lastName)
    console.log(age)
    console.log(job);
}

//display(person1);

//using for loop

for(const x in person1)
{
    console.log(person1[x]);
}

//nested object

person3 = {
    firstName: "Hasan",
    lastName: "Ali",
    address: {
        village: "Jhauida",
        union: "Rifaetpur",
        thana: "Doulotpur"
    }
}

for(const x in person3.address)
{
    console.log(person3.address[x])
}