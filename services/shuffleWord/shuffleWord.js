/**
  * Shuffle randomly a string chars
  * @param {string} word
  * @returns {string} shuffled word
  */
function shuffleWord(word = '') {
	if (typeof word !== 'string') return '';

	const shuffleChars = word.split('');

	for (let i = shuffleChars.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const tmp = shuffleChars[i];
		shuffleChars[i] = shuffleChars[j];
		shuffleChars[j] = tmp;
	}

	return shuffleChars.join('');
}

module.exports = {
	shuffleWord
};
