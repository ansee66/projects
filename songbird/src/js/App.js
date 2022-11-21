import birdsData from '../assets/data/birds';

class App {
  constructor(button, main, birdIconSRC, rightAnswerSound, wrongAnswerSound) {
    this.scoreNumber = document.querySelector('.score__number');
    this.stagesList = document.querySelector('.stages');
    this.question = document.querySelector('.question');
    this.questionTitle = document.querySelector('.question__title');
    this.options = document.querySelector('.answer__options');
    this.answersRight = document.querySelector('.answer__right');
    this.answerStart = document.querySelector('#answer-start-template');
    this.birdInfo = document.querySelector('#bird-info-template');
    this.button = button;
    this.main = main
    this.hiddenBird;
    this.birdIconSRC = birdIconSRC;
    this.stage = 0;
    this.scoreCounter = 6;
    this.rightAnswerSound = new Audio(rightAnswerSound);
    this.wrongAnswerSound = new Audio(wrongAnswerSound);
    this.isRightAnswerGiven = false;
  }

  renderQuiz() {
    this.isRightAnswerGiven = false;
    this.scoreCounter = 6;
    Array.from(this.stagesList.children).map((item, i) => {
      item.classList.remove("stages__item--current");
      if (i === this.stage) {
        item.classList.add("stages__item--current");
      }
    })

    let currentBirds = birdsData[this.stage];
    let randomNumber = Math.floor(Math.random() * currentBirds.length);
    this.hiddenBird = currentBirds[randomNumber];
    this.question.querySelector('audio').src = this.hiddenBird.audio;
    this.question.querySelector('.question__image').src = this.birdIconSRC;
    this.questionTitle.textContent = "*****";

    this.options.innerHTML = "";
    currentBirds.map(bird => {
      const option = document.createElement('li');
      option.classList.add("options__item");
      option.textContent = bird.name;
      option.dataset.bird = bird.id;
      this.options.append(option);
    })

    this.answersRight.innerHTML = "";
    this.answersRight.append(this.answerStart.content.cloneNode(true))
  }

  changeStage() {
    if (this.stage !== birdsData.length - 1) {
      this.stage++;
      this.renderQuiz();
      this.button.classList.remove("button--active");
    } else {
      this.main.innerHTML = `<h1>Игра окончена!</h1><h2>Вы набрали ${this.scoreNumber.innerHTML} баллов</h2>`;
      this.stagesList.remove();
    }
  }

  setHandlers() {
    this.options.addEventListener("click", (event) => {
      if (event.target.classList.contains("options__item")) {
        let selectedBird = birdsData[this.stage][Number(event.target.dataset.bird) - 1];
        let clonedBirdInfo = this.birdInfo.content.cloneNode(true);
        clonedBirdInfo.querySelector('.bird-info__image').src = selectedBird.image;
        clonedBirdInfo.querySelector('.bird-info__image').alt = selectedBird.name;
        clonedBirdInfo.querySelector('.bird-info__title').textContent = selectedBird.name;
        clonedBirdInfo.querySelector('.bird-info__audio').src = selectedBird.audio;
        clonedBirdInfo.querySelector('.bird-info__species').textContent = selectedBird.species;
        clonedBirdInfo.querySelector('.bird-info__description').textContent = selectedBird.description;
        this.answersRight.innerHTML = "";
        this.answersRight.append(clonedBirdInfo);
        this.scoreCounter--;

        if (event.target.textContent === this.hiddenBird.name) {
          event.target.classList.add("options__item--right");
          if (!this.isRightAnswerGiven) {
            this.rightAnswerSound.play();
          }
          this.questionTitle.textContent = selectedBird.name;
          this.question.querySelector('.question__image').src = selectedBird.image;
          this.button.classList.add("button--active");
          this.scoreNumber.innerHTML = Number(this.scoreNumber.innerHTML) + this.scoreCounter;
          this.isRightAnswerGiven = true;
        } else {
          if (!this.isRightAnswerGiven) {
            event.target.classList.add("options__item--wrong");
            this.wrongAnswerSound.play();
          }
        }
      }
    })
    this.button.addEventListener("click", (event) => {
      if (event.target.classList.contains("button--active")) {
        this.changeStage();
      }
    })
  }
}

export default App;