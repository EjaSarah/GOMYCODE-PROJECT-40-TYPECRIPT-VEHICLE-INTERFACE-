"use strict";
// 2. Implement the Car Class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// 3. Create an instance of the Car class and call the start method
const myCar = new Car("Toyota", "Corolla", 2021);
myCar.start();
