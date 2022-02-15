/*
	Constructor pattern is a creational design pattern 
	It creates new objects of similar family
*/
class Employee {
	constructor(firstName, lastName, occupation) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.occupation = occupation;
	}

	getEmployeeDetails() {
		return `${this.firstName} ${this.lastName} is a ${this.occupation}`;
	}
}

module.exports = Employee;
