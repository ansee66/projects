import './style.css';
import App from './js/App';
import rightAnswerSound from './assets/audio/right-answer.mp3';
import wrongAnswerSound from './assets/audio/wrong-answer.mp3';

const header = document.querySelector('.page-header .container');
const main = document.querySelector('.page-main .container');
const startTemplate = document.querySelector('#start-template');
const birdIconSRC = './assets/img/hidden-bird.svg';
main.append(startTemplate.content.cloneNode(true));
const startButton = document.querySelector('#start-button');

const app = new App(header, main, birdIconSRC, rightAnswerSound, wrongAnswerSound);
startButton.addEventListener("click", () => {
  app.renderQuiz();
  app.renderStage();
})
