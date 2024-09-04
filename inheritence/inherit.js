class Animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    move(speed)
    {
        console.log(`The ${this.name} moves at a spped of ${speed} mph`);
    }
}

class Rabbit extends Animal{
    constructor(name,age,speed)
    {
        super(name,age);
        this.speed = speed;
    }

    run()
    {
        console.log(`This ${this.name} can run`)
        super.move(this.speed);
    }
}

class Fish extends Animal{
    constructor(name,age,speed)
    {
        super(name, age)
        this.speed = speed;
    }

    swim()
    {
        console.log(`This ${this.name} can swim`)
    }
}

const rabbit = new Rabbit("Rabbit",10,20);

rabbit.run();

