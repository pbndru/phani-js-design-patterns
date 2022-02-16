/*
	Decorator pattern is a structural design pattern 
	It adds additional behaviour to existing classes
*/

class Developer {
	constructor(name, email, salary) {
		this.name = name;
		this.email = email;
		this.salary = salary;
	}

	getDeveloperDetails() {
		return `${this.name} - ${this.email}`;
	}
}

// first decorator
function bonus(developer) {
	developer.isEligibleForBonus = true;
	developer.eligible = function() {
		return `Bonus eligible for ${developer.getDeveloperDetails()}`;
	};

	return developer;
}

// second decorator
function performance(developer) {
	developer.isEligibleForPerformance = true;
	developer.salary += 2000;
	return developer;
}

module.exports = {
	Developer,
	bonus,
	performance,
};
