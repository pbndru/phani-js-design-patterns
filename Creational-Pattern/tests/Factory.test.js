const { CarFactory } = require('../Factory');

describe('Factory Design Pattern Tests', function() {
	it('should create Electric car', function() {
		const carFactory = new CarFactory();

		const car = carFactory.createCar('tesla');

		expect(car.constructor.name).toEqual('ElectricCar');
		expect(car.electric()).toEqual('This is a electric car');
		expect(car.drive()).toEqual('tesla is a good car to drive');
	});

	it('should create Petrol car', function() {
		const carFactory = new CarFactory();

		const car = carFactory.createCar('audi');

		expect(car.constructor.name).toEqual('PetrolCar');
		expect(car.diesel()).toEqual('This is a diesel car');
		expect(car.petrol()).toEqual('This is a petrol car');
		expect(car.drive()).toEqual('audi is a good car to drive');
	});
});
