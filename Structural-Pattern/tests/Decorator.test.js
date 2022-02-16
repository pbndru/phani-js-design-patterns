const { Developer, bonus, performance } = require('../Decorator');

describe('Decorator Design Pattern Test', function() {
	it('should be given bonus', function() {
		const developer = bonus(new Developer('phani', 'ph@test.com', 5000));

		expect(developer.isEligibleForBonus).toBeTruthy();
		expect(developer.eligible()).toEqual('Bonus eligible for phani - ph@test.com');
	});

	it('should be given performance salary', function() {
		const developer = performance(new Developer('phani', 'ph@test.com', 5000));

		expect(developer.isEligibleForPerformance).toBeTruthy();
		expect(developer.salary).toEqual(7000);
	});
});
