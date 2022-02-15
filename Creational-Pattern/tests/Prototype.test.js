const developer = require('../Prototype');

describe('Prototype Design Pattern Tests', function() {
	it('should create a skeleton object', function() {
		const protoDeveloper = Object.create(developer, { occupation: { value: 'Software Developer' } });

		expect(protoDeveloper.salary).toEqual(50);
		expect(protoDeveloper.firstName()).toEqual('phani');
		expect(protoDeveloper.lastName()).toEqual('bandaru');
		expect(protoDeveloper.occupation).toEqual('Software Developer');
		expect(protoDeveloper.__proto__).toEqual(developer);
	});
});
