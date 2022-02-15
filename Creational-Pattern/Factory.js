/*
    Factory Pattern is a Creational design pattern
	Here we give the responsibility of object instatiation to its sub classes.
*/

class CarFactory {
	constructor() {
		this.createCar = function(carType) {
			let car;
			if (carType === 'tesla') car = new ElectricCar();
			else if (carType === 'audi') car = new PetrolCar();
			car.drive = function() {
				return `${this.carType} is a good car to drive`;
			};

			return car;
		};
	}
}

class ElectricCar {
	constructor() {
		this.carType = 'tesla';
		this.electric = function() {
			return 'This is a electric car';
		};
	}
}

class PetrolCar {
	constructor() {
		this.carType = 'audi';
		this.diesel = function() {
			return 'This is a diesel car';
		};
		this.petrol = function() {
			return 'This is a petrol car';
		};
	}
}

module.exports = {
	CarFactory,
};
