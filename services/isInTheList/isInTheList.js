/**
  * @param props.list Array of strings
  * @param props.selector - A string word to check if exist in the list
  * @returns {boolean}
  */
function isInTheList({ list = [], selector = '' } = {}) {
	if (!Array.isArray(list) || typeof selector !== 'string') {
		return false;
	}
	return list.includes(selector);
}

module.exports = {
	isInTheList
};
