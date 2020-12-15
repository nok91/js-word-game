const { formatString } = require('../formatString');

describe('formatString()', () => {
	it('should return a strig with only chacters [a-zA-Z]', () => {
		expect(formatString('ciaone!! !!3213213')).toBe('ciaone');
		expect(formatString('red!! !!3213213green')).toBe('redgreen');
	});
});
