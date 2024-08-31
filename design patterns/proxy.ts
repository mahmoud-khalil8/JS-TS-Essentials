//proxy pattern
//usage: when you want to control access to an object

// The Subject interface
interface Truck {
    drive(): void;
}

// RealSubject class: the actual object we want to control access to
class RealCar implements Truck {
    drive(): void {
        console.log("The car is being driven.");
    }
}

// Proxy class: controls access to the RealCar
class CarProxy implements Truck {
    private realCar: RealCar;
    private driverHasLicense: boolean;

    constructor(driverHasLicense: boolean) {
        this.realCar = new RealCar();
        this.driverHasLicense = driverHasLicense;
    }

    drive(): void {
        if (this.driverHasLicense) {
            this.realCar.drive();
        } else {
            console.log("You cannot drive the car without a license.");
        }
    }
}

// Usage
const carWithLicense: Truck = new CarProxy(true);
carWithLicense.drive(); // Output: The car is being driven.

const carWithoutLicense: Truck = new CarProxy(false);
carWithoutLicense.drive(); // Output: You cannot drive the car without a license.
