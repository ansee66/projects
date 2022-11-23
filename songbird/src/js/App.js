import birdsData from '../assets/data/birds';

class App {
  constructor(header, main, birdIconSRC, rightAnswerSound, wrongAnswerSound) {
    this.header = header;
    this.main = main;
    this.stagesList;
    this.scoreNumber;
    this.question;
    this.questionTitle;
    this.options;
    this.answersRight;
    this.nextLevelButton;
    this.answerStart = document.querySelector('#answer-start-template');
    this.birdInfo = document.querySelector('#bird-info-template');
    this.hiddenBird;
    this.birdIconSRC = birdIconSRC;
    this.stage = 0;
    this.scoreCounter = 6;
    this.rightAnswerSound = new Audio(rightAnswerSound);
    this.wrongAnswerSound = new Audio(wrongAnswerSound);
    this.isRightAnswerGiven = false;
  }

  renderQuiz() {
    this.main.innerHTML = "";
    const headerTop = document.querySelector('.page-header__top');
    const scoreTemplate = document.querySelector('#score-template');
    const stagesTemplate = document.querySelector('#stages-template');
    const questionTemplate = document.querySelector('#question-template');
    const question = questionTemplate.content.cloneNode(true);
    const answer = document.createElement('div');
    const optionsTemplate = document.querySelector('#answer-options-template');
    const answerRightTemplate = document.querySelector('#answer-right-template');
    const button = document.createElement('button');

    answer.classList.add('answer');
    button.classList.add('button');
    button.textContent = "Next level";

    this.header.append(stagesTemplate.content.cloneNode(true));
    headerTop.append(scoreTemplate.content.cloneNode(true));
    this.main.append(question, answer, button);
    answer.append(optionsTemplate.content.cloneNode(true), answerRightTemplate.content.cloneNode(true));

    this.scoreNumber = document.querySelector('.score__number');
    this.stagesList = document.querySelector('.stages');
    this.question = document.querySelector('.question');
    this.questionTitle = document.querySelector('.question__title');
    this.options = document.querySelector('.answer__options');
    this.answersRight = document.querySelector('.answer__right');
    this.nextLevelButton = document.querySelector('button');

    this.scoreNumber.innerHTML = "0";
    this.stage = 0;

    this.setButtonHandler();
    this.setOptionsHandler();
  }

  renderStage() {
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
    
    const question = document.querySelector('.question');
    const questionTitle = document.querySelector('.question__title');
    question.querySelector('audio').src = this.hiddenBird.audio;
    question.querySelector('.question__image').src = this.birdIconSRC;
    questionTitle.textContent = "*****";

    const options = document.querySelector('.answer__options');
    const answersRight = document.querySelector('.answer__right');
    options.innerHTML = "";
    currentBirds.map(bird => {
      const option = document.createElement('li');
      option.classList.add("options__item");
      option.textContent = bird.name;
      option.dataset.bird = bird.id;
      options.append(option);
    })

    answersRight.innerHTML = "";
    answersRight.append(this.answerStart.content.cloneNode(true))
  }

  changeStage() {
    if (this.stage !== birdsData.length - 1) {
      this.stage++;
      this.renderStage();
      this.nextLevelButton.classList.remove("button--active");
    } else {
      this.stagesList.remove();
      document.querySelector('.score').remove();
      this.main.innerHTML = `<h1>Игра окончена!</h1><h2>Вы набрали ${this.scoreNumber.innerHTML} баллов</h2><button class="button button--active" id="restart-button">Сыграть еще раз</button>`;
      const restartButton = document.querySelector('#restart-button');
      restartButton.addEventListener("click", () => {
        this.renderQuiz();
        this.renderStage();
      })
    }
  }

  setButtonHandler() {
    this.nextLevelButton.addEventListener("click", (event) => {
      if (event.target.classList.contains("button--active")) {
        this.changeStage();
      }
    })
  }

  setOptionsHandler() {
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
          const questionAudio = this.question.querySelector('audio')
          if (!questionAudio.paused) {
            questionAudio.currentTime = 0;
            !questionAudio.pause();
          }
          if (!this.isRightAnswerGiven) {
            this.rightAnswerSound.play();
          }
          this.questionTitle.textContent = selectedBird.name;
          this.question.querySelector('.question__image').src = selectedBird.image;
          this.nextLevelButton.classList.add("button--active");
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
  }
}

export default App;