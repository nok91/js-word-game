const { getScore } = require('../getScore');

describe('getScore()', () => {
	it('should return 0 if arguments are missing or not valid', () => {
		expect(getScore()).toBe(0);
		expect(getScore('')).toBe(0);
		expect(getScore(undefined)).toBe(0);
	});
	it('should return score for each guessed score', () => {
		expect(getScore({
			baseSting: 'heart',
			guessedString: 'head'
		})).toBe(3);
		expect(getScore({
			baseSting: 'hello',
			guessedString: 'hi'
		})).toBe(1);
		expect(getScore({
			baseSting: 'yellow',
			guessedString: 'bic'
		})).toBe(0);
		expect(getScore({
			baseSting: 'yellow',
			guessedString: ''
		})).toBe(0);
		expect(getScore({
			baseSting: '',
			guessedString: 'crazy'
		})).toBe(0);
	});
});
