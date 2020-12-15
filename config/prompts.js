const promptMenu = {
	Play: 'Play',
	HighScore: 'HighScore',
	Exit: 'Exit'
};

const play = (word) => [
	{ name: 'word', message: `Guess the word from the random base string "${word}": \n` }
];

const promptOptions = [
	{
		type: 'list',
		name: 'selected',
		message: 'Select a contact',
		choices: Object.keys(promptMenu)
	}
];

module.exports = {
	menu: promptMenu,
	list: promptOptions,
	play
};
