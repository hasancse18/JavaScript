class product{

    constructor(name ,price)
    {
        this.name = name;
        this.price = price;
    }
    displayProduct()
    {
        console.log(`The Name of the Product is:${this.name}`);
        console.log(`The Price is:${this.price}`);
    }
}

const product1= new product("Pant",16.00);
product1.displayProduct();
