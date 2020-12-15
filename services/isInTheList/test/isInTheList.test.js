const { isInTheList } = require('../isInTheList');

describe('isInTheList()', () => {
	it('should return false', () => {
		expect(isInTheList({})).toBe(false);
		expect(isInTheList()).toBe(false);
		expect(isInTheList('')).toBe(false);
		expect(isInTheList(2121)).toBe(false);
		expect(isInTheList(() => {})).toBe(false);
	});

	it('should return true', () => {
		expect(isInTheList({
			list: ['Banana', 'Orange', 'Apple', 'Mango'],
			selector: 'Mango'
		})).toBe(true);

		expect(isInTheList({
			list: ['Banana', 'Orange', 'Apple', 'Mango'],
			selector: 'Avocade'
		})).toBe(false);
	});
});
