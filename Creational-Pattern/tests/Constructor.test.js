const Employee = require('../Constructor');

describe('Constructor Design Pattern Tests', function() {
	it('should create a family instance', function() {
		const employee = new Employee("phani", "bandaru", "developer");
		expect(employee.getEmployeeDetails()).toBe('phani bandaru is a developer');
	});
});
