//factory pattern
//usage: when you want to delegate object creation to a factory
// Define the Product interface
interface Product {
    name: string;
    price: number;
}

// Define the ProductA class that implements the Product interface
class ProductA implements Product {
    name: string;
    price: number;

    constructor() {
        this.name = 'Product A';
        this.price = 100;
    }
}

// Define the ProductB class that implements the Product interface
class ProductB implements Product {
    name: string;
    price: number;

    constructor() {
        this.name = 'Product B';
        this.price = 200;
    }
}

// Define the ProductFactory class
class ProductFactory {
    createProduct(type: string): Product {
        switch (type) {
            case 'A':
                return new ProductA();
            case 'B':
                return new ProductB();
            default:
                throw new Error('Invalid product type');
        }
    }
}

// Usage
const productFactory = new ProductFactory();
const productA = productFactory.createProduct('A');

console.log(productA.name); // Output: Product A
console.log(productA.price); // Output: 100

const productB = productFactory.createProduct('B');

console.log(productB.name); // Output: Product B
console.log(productB.price); // Output: 200
