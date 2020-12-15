const fs = require('fs');

function getState({
	path = ''
} = {}) {
	const getData = fs.readFileSync(path, 'utf8').toString();
	if (getData) {
		try {
			return JSON.parse(getData);
		} catch (err) {
			console.log('getState: There has been an error parsing your data.', { getData });
			console.log({ err });
		}
	}

	return null;
}

module.exports = {
	getState
};
