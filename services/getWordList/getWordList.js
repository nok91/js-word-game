const fs = require('fs');
const path = require('path');

function getWordList(location) {
	const contactsLocation = location || path.join(__dirname, '../../wordlist.txt');
	const wordsString = fs.readFileSync(contactsLocation, 'utf-8').toString();
	const wordsList = wordsString.replace(/\s{2,}/g, ' ').replace(/\n/g, ' ').split(' ');
	return wordsList;
}

module.exports = {
	getWordList
};
