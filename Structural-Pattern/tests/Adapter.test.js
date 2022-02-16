const { NewDeveloper, OldDeveloper, DeveloperAdapter } = require('../Adapter');

describe('Adapter Design Pattern Tests', function() {
	it('should show salary for javascript', function() {
		const oldDeveloper = new OldDeveloper();
		expect(oldDeveloper.salaries(1000, 'javascript')).toEqual(1100);

		const newDeveloper = new NewDeveloper();
		expect(newDeveloper.javascript(1000, 'javascript')).toEqual(1010);

		const adaptedDeveloper = new DeveloperAdapter();
		expect(adaptedDeveloper.salaries(1000, 'javascript')).toEqual(1010);
	});

	it('should show salary for api', function() {
		const oldDeveloper = new OldDeveloper();
		expect(oldDeveloper.salaries(1000, 'api')).toEqual(1150);

		const newDeveloper = new NewDeveloper();
		expect(newDeveloper.api(1000, 'api')).toEqual(1015);

		const adaptedDeveloper = new DeveloperAdapter();
		expect(adaptedDeveloper.salaries(1000, 'api')).toEqual(1015);
	});
});
