const { DeveloperFactory } = require('../Flyweight');

describe('Flweight Design Pattern Tests', function() {
	it('should not create duplicate objects', function() {
		const developerFactory = new DeveloperFactory();

		const csharpDeveloper = developerFactory.createDeveloper('c# and api', 1000);
		const apiDeveloper = developerFactory.createDeveloper('c# and api', 1000);
		expect(csharpDeveloper).toBe(apiDeveloper);
	});
});
