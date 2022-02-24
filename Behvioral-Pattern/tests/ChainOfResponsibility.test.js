const EmployeeCalcuation = require('../ChainOfResponsibility');

describe('Chain of Responsibility Pattern Tests', function() {
	it('default salary of new employee is zero', function() {
		const salary = new EmployeeCalcuation();
		expect(salary.bonusAndOtherBenefits(5000).bonusAndOtherBenefits(6000).employeeSalary).toEqual(11000);
	});

	it('default salary of existing employee moving to new department is not zer0', function() {
		const salary = new EmployeeCalcuation(3000);
		expect(salary.bonusAndOtherBenefits(5000).bonusAndOtherBenefits(6000).employeeSalary).toEqual(14000);
	});
});
