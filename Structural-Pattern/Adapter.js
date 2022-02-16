/*
	Adapter pattern is a structural design pattern
	This pattern is used to create wrappers on newly created objects and old objects can still work
*/

class OldDeveloper {
	constructor() {
		this.salaries = function(basic, language) {
			switch (language) {
				case 'javascript':
					return basic + 100;
				case 'api':
					return basic + 150;
				default:
					return NaN;
			}
		};
	}
}

class NewDeveloper {
	constructor() {
		this.javascript = function(basic) {
			return basic + 10;
		};
		this.api = function(basic) {
			return basic + 15;
		};
	}
}

class DeveloperAdapter {
	constructor() {
		const newDeveloper = new NewDeveloper();

		this.salaries = function(basic, language) {
			switch (language) {
				case 'javascript':
					return newDeveloper.javascript(basic);
				case 'api':
					return newDeveloper.api(basic);
				default:
					return NaN;
			}
		};
	}
}

module.exports = {
	OldDeveloper,
	NewDeveloper,
	DeveloperAdapter,
};
