import Puzzle from './js/Puzzle.js';

const header = document.createElement('header');
const restartButton = document.createElement('button');
const soundButton = document.createElement('button');
const main = document.createElement('main');
const container = document.createElement('div');
const score = document.createElement('div');
const scoreTimer = document.createElement('div');
const scoreMoves = document.createElement('div');
const scoreMovesCount = document.createElement('span');
const gameField = document.createElement('div');
const moveSound = new Audio('./assets/move.ogg');

header.classList.add('header');
restartButton.classList.add('button');
soundButton.classList.add('button');
container.classList.add('container');
score.classList.add('score');
gameField.classList.add('game-field');

document.body.prepend(header, main);
header.append(restartButton, soundButton);
main.append(container);
container.append(score, gameField);
score.append(scoreTimer, scoreMoves);

restartButton.textContent = 'Shuffle and start';
soundButton.textContent = 'Mute';
scoreTimer.textContent = '00:00:00';
scoreMoves.textContent = 'Moves: ';
scoreMoves.append(scoreMovesCount);
scoreMovesCount.textContent = '0';

const puzzle = new Puzzle(gameField, scoreTimer, scoreMovesCount, moveSound);
puzzle.renderPuzzle();
puzzle.shufflePuzzle();
puzzle.setHandlers();

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
