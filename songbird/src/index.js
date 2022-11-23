import './style.css';
import App from './js/App';
import rightAnswerSound from './assets/audio/right-answer.mp3';
import wrongAnswerSound from './assets/audio/wrong-answer.mp3';
import birdsData from './assets/data/birds';

const header = document.querySelector('.page-header .container');
const main = document.querySelector('.page-main .container');
const startTemplate = document.querySelector('#start-template');
const birdIconSRC = './assets/img/hidden-bird.svg';
main.append(startTemplate.content.cloneNode(true));
const startButton = document.querySelector('#start-button');

const gallery = document.querySelector('.gallery__list');
const birdInfoTemplate = document.querySelector('#bird-info-template');
birdsData.forEach(birdArray => {
  birdArray.forEach(bird => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');
    const clonedBirdInfo = birdInfoTemplate.content.cloneNode(true);
    clonedBirdInfo.querySelector('.bird-info__image').src = bird.image;
    clonedBirdInfo.querySelector('.bird-info__image').alt = bird.name;
    clonedBirdInfo.querySelector('.bird-info__title').textContent = bird.name;
    clonedBirdInfo.querySelector('.bird-info__audio').src = bird.audio;
    clonedBirdInfo.querySelector('.bird-info__species').textContent = bird.species;
    clonedBirdInfo.querySelector('.bird-info__description').textContent = bird.description;
    galleryItem.append(clonedBirdInfo);
    gallery.append(galleryItem);
  })
})

const app = new App(header, main, birdIconSRC, rightAnswerSound, wrongAnswerSound);
startButton.addEventListener("click", () => {
  app.renderQuiz();
  app.renderStage();
})
