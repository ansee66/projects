import './style.css';
import App from './js/App';
import rightAnswerSound from './assets/audio/right-answer.mp3';
import wrongAnswerSound from './assets/audio/wrong-answer.mp3';

const header = document.querySelector('.page-header');
const headerTop = document.querySelector('.page-header__top');
const scoreBlock = document.querySelector('#score-template');
const main = document.querySelector('.page-main');
const container = document.createElement('div');
const stagesTemplate = document.querySelector('#stages-template');
const questionTemplate = document.querySelector('#question-template');
const question = questionTemplate.content.cloneNode(true);
const answer = document.createElement('div');
const optionsTemplate = document.querySelector('#answer-options-template');
const answerRightTemplate = document.querySelector('#answer-right-template');
const button = document.createElement('button');
const birdIconSRC = './assets/img/hidden-bird.svg';

container.classList.add('container');
answer.classList.add('answer');
button.classList.add('button');
button.textContent = "Next level";

header.append(stagesTemplate.content.cloneNode(true));
headerTop.append(scoreBlock.content.cloneNode(true));
main.append(container);
container.append(question, answer, button);
answer.append(optionsTemplate.content.cloneNode(true), answerRightTemplate.content.cloneNode(true));

const app = new App(button, main, birdIconSRC, rightAnswerSound, wrongAnswerSound);
app.renderQuiz();
app.setHandlers();
