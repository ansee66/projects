import Puzzle from './js/Puzzle.js';

const header = document.createElement('header');
const restartButton = document.createElement('button');
const main = document.createElement('main');
const container = document.createElement('div');
const score = document.createElement('div');
const gameField = document.createElement('div');

header.classList.add('header');
restartButton.classList.add('button', 'button--restart');
container.classList.add('container');
score.classList.add('score');
gameField.classList.add('game-field');

document.body.prepend(header, main);
header.append(restartButton);
main.append(container);
container.append(score, gameField);

restartButton.innerHTML = "Shuffle and start";

const puzzle = new Puzzle(gameField);
puzzle.renderPuzzle();
puzzle.shufflePuzzle();

restartButton.addEventListener("click", () => {
  puzzle.shufflePuzzle();
})
