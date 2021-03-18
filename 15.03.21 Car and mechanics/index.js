const EventEmitter = require("events");

const eventName = "Car wreck";

class Car extends EventEmitter {

    speed = 0;
    maxSpeed = 120;

    constructor(name) {
        super();
        this.name = name;
    }
    increaseSpeed(val) {
        this.speed += val;
        console.log("Car speed is increased up to " + this.speed);
        if (this.speed >= this.maxSpeed) {
            this.emit(eventName, this.name);
        }
    }
}

class Mechanic  extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
    
    repairCar() {
        console.log("Mechanic " + this.name + " is going to repair the car");
    }
}

let mechanic1 = new Mechanic("John");
let mechanic2 = new Mechanic("Phillip");

let car1 = new Car("Truck");
    car1.on(eventName, (name) => {
        console.log("Car " + name + " is crushing");
        mechanic1.repairCar();
        mechanic2.repairCar();
    });

car1.increaseSpeed(50);
car1.increaseSpeed(50);
car1.increaseSpeed(20);

module.exports.Car = Car;
module.exports.Mechanic = Mechanic;

