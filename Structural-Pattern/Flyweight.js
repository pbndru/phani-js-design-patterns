/*
	This is a structural design pattern 
*/

class Developer {
	constructor(language, salary) {
		this.language = language;
		this.salary = salary;
	}
}

class DeveloperFactory {
	constructor() {
		this._developers = [];
	}

	createDeveloper(language, salary) {
		let developer = this.getDeveloper(language);
		if (developer) {
			return developer;
		} else {
			const newDeveloper = new Developer(language, salary);
			this._developers.push(newDeveloper);
			return newDeveloper;
		}
	}

	getDeveloper(language) {
		return this._developers.find(developer => developer.language === language);
	}
}

module.exports = {
	DeveloperFactory,
};