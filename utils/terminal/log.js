/* eslint-disable prefer-rest-params */
const tableImport = require('table');

function log() {
	const { table } = tableImport;
	const args = [].slice.call(arguments);
	const data = [args];

	const config = {
		columns: {
			0: {
				alignment: 'left',
				width: 2
			},
			1: {
				alignment: 'left',
				width: 53
			}
		}
	};

	const output = table(data, config);
	console.log(output);
}

module.exports = {
	log
};
