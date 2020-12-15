/*
••••••••••••••••••••••••••••••••••••••••••••••••
Copyright (C) 2015 Codesse. All rights reserved.
••••••••••••••••••••••••••••••••••••••••••••••••
*/
const path = require('path');
const tableImport = require('table');
const { isInTheList } = require('./services/isInTheList');
const { getWordList } = require('./services/getWordList');
const { isInTheString } = require('./services/isInTheString');
const { formatString } = require('./services/formatString');
const { checkIfExist } = require('./services/highScoreList');
const { state } = require('./models/state/state');
const { getScore } = require('./services/highScoreList/getScore');
// Utils
const terminal = require('./utils/terminal');

const [getHighScore, setHighScore] = state(path.join(__dirname, './models/data/highScoreList.json'));
const [getBaseString] = state(path.join(__dirname, './models/data/baseString.json'));

const WordGame = function () {
	/*
Submit a word on behalf of a player. A word is accepted if its letters are contained in the base string used to construct the game AND if it is in the word list provided: wordlist.txt.

If the word is accepted and its score is high enough, the submission should be added to the high score list. If there are multiple submissions with the same score, all are accepted, BUT the first submission with that score should rank higher.

A word can only appear ONCE in the high score list. If the word is already present in the high score list the submission should be rejected.

@parameter word. The player's submission to the game. All submissions may be assumed to be lowercase and contain no whitespace or special characters.
*/
	this.submitWord = function (word) {
		const baseString = getBaseString() || {};
		const highScoreList = getHighScore() || [];
		const wordListArray = getWordList();

		// Format Word
		const formattedWord = formatString(word);

		// Check if its letters are contained in the base string
		const isContainerInBaseString = isInTheString({
			baseSting: baseString.word,
			guessedString: formattedWord
		});

		// Check if it is in the word list provided: wordlist.txt
		const isInWordListFile = isInTheList({
			list: wordListArray,
			selector: formattedWord
		});

		// check if element exist in the HighscoreList
		const isExistInTheHighScoreList = checkIfExist({
			list: highScoreList,
			selector: formattedWord
		});

		// Validation
		const isValid = isContainerInBaseString && isInWordListFile && !isExistInTheHighScoreList;

		// Get Score
		const score = getScore({
			baseSting: baseString.word,
			guessedString: formattedWord
		});

		// Print Score
		terminal.log('🤞🏽', `isValid: ${isValid} - score: ${score}`);

		if (isValid) {
			const newArr = [
				...highScoreList,
				{
					formattedWord,
					baseString: baseString.origin,
					score
				}
			];

			newArr.sort((a, b) => {
				if (a.score < b.score) return 1;
				if (a.score > b.score) return -1;
				return 0;
			});

			//

			setHighScore(newArr);
		}
	};

	/*
Return word entry at given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

@parameter position Index position in high score list
@return the word entry at the given position in the high score list, or null if there is no entry at the position requested
*/
	this.getWordEntryAtPosition = function (position) {
		if (position > 9) return null;
		const highScoreList = getHighScore() || [];
		return highScoreList[position] ? highScoreList[position].word : null;
	};

	/*
Return the score at the given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

What is your favourite color? Please put your answer in your submission (this is for testing if you have read the comments).

@parameter position Index position in high score list
@return the score at the given position in the high score list, or null if there is no entry at the position requested
*/
	this.getScoreAtPosition = function (position) {
		const highScoreList = getHighScore() || [];
		return highScoreList[position] ? highScoreList[position].score : null;
	};

	this.printHighScore = function () {
		const { table } = tableImport;
		const highScoreList = getHighScore() || [];
		const data = [
			['WORD', 'BASE-STRING', 'SCORE']
		];

		highScoreList.forEach((item) => {
			data.push(Object.values(item));
		});

		const config = {
			columns: {
				0: {
					alignment: 'left',
					width: 25
				},
				1: {
					alignment: 'left',
					width: 20
				},
				2: {
					alignment: 'left',
					width: 10
				}
			}
		};

		const output = table(data, config);

		console.log(output);
	};
};

module.exports = {
	WordGame
};
