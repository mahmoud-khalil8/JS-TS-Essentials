//prototype pattern 
//usage: when you want to create a new object by copying an existing object
// Define the Product interface
interface Product2 {
    clone(): Product2;
}

// Define the ConcreteProduct class that implements the Product interface
class ConcreteProduct implements Product2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    clone(): Product2 {
        return new ConcreteProduct(this.name);
    }
}

// Usage
const product1 = new ConcreteProduct('Product 1');
const product2 = product1.clone();

