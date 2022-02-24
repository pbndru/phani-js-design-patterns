/*
	This is a behavioural design pattern
*/

class Developer {
	constructor(salary) {
		this.salary = salary;
	}

	bonus() {
		return this.salary + 1000;
	}

	performance() {
		return this.salary + 2000;
	}

	benefits() {
		return this.salary + 500;
	}
}

class CommandDeveloper {
	constructor(type) {
		this.type = type;
		this.commands = [];
	}
	processCommand(command) {
		this.commands.push(command);
		return this.type[command]();
	}
}

module.exports = {
	CommandDeveloper,
	Developer,
};
