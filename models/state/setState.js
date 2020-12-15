const fs = require('fs');

function setState({
	path = '',
	data = {}
} = {}) {
	const payload = JSON.stringify(data, null, 2);
	fs.writeFileSync(path, payload, (err) => {
		if (err) {
			console.log('setState: There has been an error saving your data.');
			console.log({ err: err.message });
		}
	});
}

module.exports = {
	setState
};
