const DatabaseRepository = require('../Singleton');

describe('Singleton Design Pattern Tests', function() {
	it('should have only one instance', function() {
		const sqlServerDB = new DatabaseRepository('sqlServerDB');
		const oracleDB = new DatabaseRepository('oracleDB');

		expect(sqlServerDB.getDatabaseRepository()).toBe('sqlServerDB');
		expect(oracleDB.getDatabaseRepository()).toBe('sqlServerDB');

		expect(sqlServerDB).toEqual(oracleDB);
	});
});
