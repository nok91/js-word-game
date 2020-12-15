module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
		jest: true
	},
	extends: [
		'airbnb-base'
	],
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'comma-dangle': [2, 'never'],
		'max-len': 0
	}
};
