import Puzzle from './js/Puzzle.js';

const header = document.createElement('header');
const restartButton = document.createElement('button');
const soundButton = document.createElement('button');
const resultsButton = document.createElement('button');
const main = document.createElement('main');
const container = document.createElement('div');
const score = document.createElement('div');
const scoreTimer = document.createElement('div');
const scoreMoves = document.createElement('div');
const scoreMovesCount = document.createElement('span');
const gameField = document.createElement('div');
const moveSound = new Audio('./assets/move.ogg');
const settings = document.createElement('div');

header.classList.add('header');
restartButton.classList.add('button');
soundButton.classList.add('button');
resultsButton.classList.add('button');
container.classList.add('container');
score.classList.add('score');
gameField.classList.add('game-field');
settings.classList.add('settings');

document.body.prepend(header, main);
header.append(restartButton, soundButton, resultsButton);
main.append(container);
container.append(score, gameField, settings);
score.append(scoreTimer, scoreMoves);

restartButton.textContent = 'Shuffle and start';
soundButton.textContent = 'Mute';
resultsButton.textContent = "Results";
scoreTimer.textContent = '00:00:00';
scoreMoves.textContent = 'Moves: ';
scoreMoves.append(scoreMovesCount);
scoreMovesCount.textContent = '0';

const puzzle = new Puzzle(gameField, scoreTimer, scoreMovesCount, moveSound, settings);
puzzle.renderPuzzle(4);
puzzle.renderSettings();
puzzle.shufflePuzzle(4);
puzzle.addClickHandler();
puzzle.addDragHandler();

restartButton.addEventListener("click", () => {
  puzzle.shufflePuzzle();
})

soundButton.addEventListener("click", () => {
  if(soundButton.textContent === 'Mute') {
    moveSound.volume = 0;	
    soundButton.textContent = 'Sound';
  } else{
    moveSound.volume = 0.5;
    soundButton.textContent = 'Mute';
  }
})

resultsButton.addEventListener("click", () => {
  puzzle.fillResults();
})