/**
  * @param props.list Array of objects
  * @param props.selector - A string word to check if exist in the list of objects
 */
function checkIfExist({ list = [], selector = '' } = {}) {
	if (!Array.isArray(list) || typeof selector !== 'string') return false;
	return list.filter((item) => item.word === selector).length >= 1;
}

module.exports = {
	checkIfExist
};
