//facade design pattern

//usage: when you want to provide a simple interface to a complex system

//subsystem1
class Engine {
    start() {
        console.log('Engine started');
    }
    stop() {
        console.log('Engine stopped');
    }
}

//subsystem2
class Light {
    turnOn() {
        console.log('Lights on');
    }
    turnOff() {
        console.log('Lights off');
    }
}

//subsystem3
class Fuel {
    provideFuel() {
        console.log('Fuel provided');
    }
}

//facade
class Car {
    engine: Engine
    light: Light
    fuel: Fuel
    constructor() {
        this.engine = new Engine()
        this.light = new Light()
        this.fuel = new Fuel()
    }
    start() {
        this.light.turnOn()
        this.fuel.provideFuel()
        this.engine.start()
    }
    stop() {
        this.light.turnOff()
        this.engine.stop()
    }
}

const car = new Car()
car.start()

/*facade design pattern is used to provide a simple interface 
to a complex system*/