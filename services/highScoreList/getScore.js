/**
  * Match both array and see how many times the chars are
  * guessed from the baseString
  * @param props.baseString Array of chars of baseString
  * @param props.guessedString - Array of chars of guessedWord
  * @returns {boolean}
*/
function getScore({
	baseSting = '',
	guessedString = ''
} = {}) {
	let score = 0;

	if (typeof baseSting === 'string' && typeof guessedString === 'string' ) {
		const baseStingArray = baseSting.split("");
		const guessedStringArray = guessedString.split("");

		for (let i = 0; i < baseStingArray.length; i++) {
			for (let j = 0; j < guessedStringArray.length; j++) {
				if (baseStingArray[i] === guessedStringArray[j]) {
					score += 1;
					baseStingArray.splice(i, 1);
				}
			}
		}
	}

	return score;
}

module.exports = {
	getScore
};
