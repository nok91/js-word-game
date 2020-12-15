const { checkIfExist } = require('../checkIfExist');

describe('checkIfExist()', () => {
	it('check If element exist in a list', () => {
		const list = [{ word: 'hello' }, { word: 'its' }, { word: 'me' }];

		expect(checkIfExist()).toStrictEqual(false);
		expect(checkIfExist({
			list,
			selector: 'me'
		})).toBe(true);
		expect(checkIfExist({
			list,
			selector: 'false'
		})).toBe(false);
	});
});
