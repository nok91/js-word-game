const { shuffleWord } = require('../shuffleWord');

describe('shuffleWord()', () => {
	it('should return empty string if prop word is not a type string', () => {
		expect(shuffleWord()).toBe('');
		expect(shuffleWord(null)).toBe('');
		expect(shuffleWord(undefined)).toBe('');
		expect(shuffleWord(() => {})).toBe('');
		expect(shuffleWord(123132112313)).toBe('');
		expect(shuffleWord({})).toBe('');
	});

	it('should word match with shuffled word', () => {
		const pickWord = 'process';
		const shuffledChars = shuffleWord(pickWord);
		expect(pickWord.length).toBe(shuffledChars.length);
	});

	it('should all chars of shuffled generated word match the original word ', () => {
		const pickWord = 'supercalifragilisticexpialidocious';
		const shuffledChars = shuffleWord(pickWord);
		const pickWordsArr = pickWord.split('');
		const shuffledCharsArr = shuffledChars.split('');

		shuffledCharsArr.forEach((value) => {
			expect(pickWordsArr.includes(value)).toBe(true);
		});
	});
});
