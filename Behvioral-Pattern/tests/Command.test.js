const { CommandDeveloper, Developer } = require('../Command');

describe('Command Pattern Tests', function() {
	it('should return bonus salary', function() {
		const salary = new CommandDeveloper(new Developer(500));
		expect(salary.processCommand('bonus')).toEqual(1500);
	});
	it('should return performance salary', function() {
		const salary = new CommandDeveloper(new Developer(600));
		expect(salary.processCommand('performance')).toEqual(2600);
	});
	it('should return benefits salary', function() {
		const salary = new CommandDeveloper(new Developer(600));
		expect(salary.processCommand('benefits')).toEqual(1100);
	});
	it('should execute all the commands', function() {
		const salary = new CommandDeveloper(new Developer(100));
		salary.processCommand('performance');
		salary.processCommand('bonus');
		salary.processCommand('benefits');
		expect(salary.commands).toEqual(['performance', 'bonus', 'benefits']);
	});
});
