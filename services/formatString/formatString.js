function formatString(word) {
	return word.replace(/[^A-Za-z]/g, '')
		.replace(/\s{2,}/g, ' ')
		.replace(/\n/g, ' ');
}

module.exports = {
	formatString
};
