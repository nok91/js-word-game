const { getWordList } = require('../../getWordList');
const { isInTheList } = require('../../isInTheList');
const { getRandomWord } = require('../getRandomWord');

describe('getRandomWord()', () => {
	it('should selected word be in the list ', () => {
		const wordList = getWordList();

		for (let i = 0; i <= 100; i++) {
			const pickRandomWord = getRandomWord();
			const isValid = isInTheList({
				list: wordList,
				selector: pickRandomWord
			});
			expect(isValid).toBe(true);
		}
	});
});
