const { getState } = require('./getState');
const { setState } = require('./setState');

function state(path = '') {
	const getter = () => getState({
		path
	});
	const setter = (data) => setState({
		path,
		data
	});

	return [
		getter,
		setter
	];
}

module.exports = {
	state
};
