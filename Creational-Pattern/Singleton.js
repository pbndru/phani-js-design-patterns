/*
    Singleton pattern is a creational design pattern 
    It creates only one instance of a class.
    If no instance found, it creates a new instance
*/
class DatabaseRepository {
	constructor(data) {
		if (DatabaseRepository.isExists) {
			return DatabaseRepository.instance;
		}
		this.data = data;

		DatabaseRepository.isExists = true;
        DatabaseRepository.instance = this;
        
		return this;
	}

	getDatabaseRepository() {
		return this.data;
	}
}

module.exports = DatabaseRepository;
