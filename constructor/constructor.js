

function procuction(name,price)
{
    this.name = name;
    this.price = price;

    this.displayProduct=function ()
    {
        console.log(this.name);
        console.log(this.price);
    }
}

const product1 = new procuction("Pant","10");
product1.displayProduct();