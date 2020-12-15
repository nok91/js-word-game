/**
 * Get a random word from the wordlist.txt
 * @param {number} max
 * @return {object} random string
 */
const { getWordList } = require('../getWordList');

function getRandomWord() {
	const wordList = getWordList();
	const randomIndex = Math.floor(Math.random() * wordList.length);
	const pickRandomWord = wordList[randomIndex];

	return pickRandomWord;
}

module.exports = {
	getRandomWord
};
