const { HRRegistration, DeveloperRegistration, TesterRegistration } = require('../Facade');

describe('Facade Design Pattern Tests', function() {
	it('should register a Developer', function() {
		const registration = new HRRegistration();

		const developerRegistration = registration.registration('Phani', 'developer', 'IR35');
		expect(developerRegistration).toEqual('1 - Phani developer registered - IR35');
	});

	it('should register a Tester', function() {
		const registration = new HRRegistration();

		const testerRegistration = registration.registration('Phani', 'tester', 'IR35');
		expect(testerRegistration).toEqual('2 - Phani tester registered - IR35');
	});

	it('should use singleton pattern', function() {
		const registration = new HRRegistration();

		const developerRegistration = registration.registration('Sam', 'developer', 'IR35');
		const testerRegistration = registration.registration('Sammy', 'tester', 'IR35');

		expect(developerRegistration).toEqual('3 - Sam developer registered - IR35');
		
		expect(new DeveloperRegistration().registrations).toEqual([
			{ id: 1, name: 'Phani', details: 'IR35' },
			{ id: 3, name: 'Sam', details: 'IR35' },
		]);

		expect(testerRegistration).toEqual('4 - Sammy tester registered - IR35');
		expect(new TesterRegistration().registrations).toEqual([
			{ id: 2, name: 'Phani', details: 'IR35' },
			{ id: 4, name: 'Sammy', details: 'IR35' },
		]);
	});
});
