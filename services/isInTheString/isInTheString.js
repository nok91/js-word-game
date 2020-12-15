const { getScore } = require('../highScoreList/getScore');

/**
  * Match both array and see how many times the chars are
  * guessed from the baseString
  * @param props.baseString Array of chars of baseString
  * @param props.guessedString - Array of chars of guessedWord
  * @returns {boolean}
*/
function isInTheString(options) {
	const score = getScore(options);
	return score > 0;
}

module.exports = {
	isInTheString
};
