function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}
function Customer(name) {
    this.name = name;
    this.rentedCars = []; 
}
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented the ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
};
Customer.prototype.returnCar = function(car) {
    const carIndex = this.rentedCars.indexOf(car);
    if (carIndex !== -1) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars.splice(carIndex, 1);
            console.log(`${this.name} returned the ${car.make} ${car.model}.`);
        }, 2000); 
    } else {
        console.log(`${this.name} has not rented the ${car.make} ${car.model}.`);
    }
};
function PremiumCustomer(name, discountRate = 0.10) {
    Customer.call(this, name); 
    this.discountRate = discountRate; 
}
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;
PremiumCustomer.prototype.rentCar = function(car, rentalPricePerDay) {
    const discountedPrice = rentalPricePerDay - (rentalPricePerDay * this.discountRate);
    console.log(`${this.name} rented the ${car.make} ${car.model} with a discount of ${this.discountRate * 100}%. Total price per day: $${discountedPrice}.`);
        Customer.prototype.rentCar.call(this, car);
};

function calculateRentalPrice(carType) {
    const basePrice = 50; 
    const carTypeRates = {
        SUV: 60,
        Sedan: 50,
        Coupe: 55
    };
    return carTypeRates[carType] || basePrice;
}
function Maintenance(car, delay) {
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} has finished maintenance and is now available for rent.`);
    }, delay);
}

const car1 = new Car("Toyota", "Corolla", 2020, true);
const car2 = new Car("Honda", "Civic", 2021, true);
const car3 = new Car("Ford", "Explorer", 2019, true);
const car4 = new Car("Chevrolet", "Camaro", 2022, true);
const customer1 = new Customer("John");
const premiumCustomer = new PremiumCustomer("Alice", 0.15);
customer1.rentCar(car1); 
premiumCustomer.rentCar(car3, calculateRentalPrice("SUV")); 
customer1.returnCar(car1); 
premiumCustomer.returnCar(car3); 
const carUnderMaintenance = new Car("Tesla", "Model S", 2022);
Maintenance(carUnderMaintenance, 3000); 
