/*
	Facade pattern is a structural design pattern
	It provides a public interface to use and hides the complexity of its subclasses.
*/

let id = 0;

class HRRegistration {
	registration(name, designation, details) {
		const id = HRRegistration.guid();
		let registry;
		if (designation === 'developer') registry = new DeveloperRegistration();
		else if (designation === 'tester') registry = new TesterRegistration();
		return registry.addRegistration({ id, name, details });
	}

	static guid() {
		return ++id;
	}
}

class Register {
	constructor() {
		this.registrations = [];
	}

	addRegistration(registration) {
		this.registrations.push(registration);
		return this.confirmRegistration(registration);
	}

	getRegistration(id) {
		return this.registrations.find(registration => registration.id === id);
	}

	confirmRegistration(registration) {}
}

class DeveloperRegistration extends Register {
	constructor() {
		super();
		if (DeveloperRegistration.exists) {
			return DeveloperRegistration.instance;
		}
		DeveloperRegistration.instance = this;
		DeveloperRegistration.exists = true;
		return this;
	}

	confirmRegistration({ id, name, details }) {
		return `${id} - ${name} developer registered - ${details}`;
	}
}

class TesterRegistration extends Register {
	constructor() {
		super();
		if (TesterRegistration.exists) {
			return TesterRegistration.instance;
		}
		TesterRegistration.instance = this;
		TesterRegistration.exists = true;
		return this;
	}

	confirmRegistration({ id, name, details }) {
		return `${id} - ${name} tester registered - ${details}`;
	}
}

module.exports = {
	HRRegistration,
	DeveloperRegistration,
	TesterRegistration,
};
