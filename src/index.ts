// 1. Define the Vehicle Interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Implement the Car Class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// 3. Create an instance of the Car class and call the start method
const myCar = new Car("Toyota", "Corolla", 2021);
myCar.start();
