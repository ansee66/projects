import Puzzle from './js/Puzzle.js';

const header = document.createElement('header');
const main = document.createElement('main');
const container = document.createElement('div');
const score = document.createElement('div');
const gameField = document.createElement('div');

header.classList.add('header');
container.classList.add('container');
score.classList.add('score');
gameField.classList.add('game-field');

document.body.prepend(header, main);
main.append(container);
container.append(score, gameField);

const puzzle = new Puzzle(gameField);
puzzle.renderPuzzle();
