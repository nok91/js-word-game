const { prompt } = require('inquirer');
const path = require('path');
const { getRandomWord } = require('./services/getRandomWord');
const { shuffleWord } = require('./services/shuffleWord');
const prompts = require('./config/prompts');
const { WordGame } = require('./wordgame');
const { state } = require('./models/state/state');
// Utils
const terminal = require('./utils/terminal');

let pickAWord;
let baseString;
const WG = new WordGame();
const [, setBaseString] = state(path.join(__dirname, './models/data/baseString.json'));

function runPromptMenu() {
	prompt(prompts.list)
		.then(({ selected }) => {
			switch (selected) {
			case prompts.menu.Play:
				terminal.clear();

				// Pick a word randomly from wordlist.txt
				pickAWord = getRandomWord();
				// Shuffle Chards of the selected word
				baseString = shuffleWord(pickAWord);

				// Be a cheater and show the answer
				terminal.log('😎', `Answer: ${pickAWord}`);

				runPromptGuessWordPlay();
				break;
			case prompts.menu.HighScore:
				terminal.clear();
				WG.printHighScore();
				runPromptMenu();
				break;
			case prompts.menu.Exit:
				terminal.clear();
				process.exit();
				break;
			default:
				runPromptMenu();
				break;
			}
		});
}

function runPromptGuessWordPlay() {
	prompt(prompts.play(baseString))
		.then(({ word }) => {
			setBaseString({ word, origin: baseString });
			WG.submitWord(word);
			runPromptMenu();
		});
}

runPromptMenu();

module.exports = {
	baseString
};
