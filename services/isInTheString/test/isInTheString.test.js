const { isInTheString } = require('../isInTheString');

describe('isInTheString()', () => {
	it('should return true if exist and false if not', () => {
		expect(isInTheString({
			baseSting: 'abcdaf',
	        guessedString: 'zzzz'
		})).toBe(false);

		expect(isInTheString({
			baseSting: 'abcdaf',
	        guessedString: 'zzzzcasa'
		})).toBe(true);
	});
});
