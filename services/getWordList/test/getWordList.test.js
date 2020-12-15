const path = require('path');
const { getWordList } = require('../getWordList');

describe('getWordList()', () => {
	it('test', () => {
		const fileLocation = path.join(__dirname, './mockFile.txt');
		const result = getWordList(fileLocation);
		expect(result).toStrictEqual(['aaa', 'bbb', 'ccc']);
	});
});
