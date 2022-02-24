/*
	This is a behavioural design pattern
	
*/

class EmployeeCalcuation {
	constructor(defaultSalary = 0) {
		this.employeeSalary = defaultSalary;
	}

	bonusAndOtherBenefits(salary) {
		this.employeeSalary += salary;
		return this;
	}
}

module.exports = EmployeeCalcuation;
