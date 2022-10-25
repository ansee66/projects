class Puzzle {
  constructor(gameField, scoreTimer, scoreMovesCount, moveSound) {
    this.gameField = gameField;
    this.scoreTimer = scoreTimer;
    this.scoreMovesCount = scoreMovesCount;
    this.movesCount = 0;
    this.tiles = [];
    this.tileWidth = 150;
    this.emptyTile;
    this.isGameStarted = false;
    this.timer;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.gameTime;
    this.moveSound = moveSound;
  }

  renderPuzzle() {
    if (window.matchMedia('screen and (max-width: 767px)').matches) {
      this.tileWidth = 70;
    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches) {
      this.tileWidth = 120;
    } else {
      this.tileWidth = 150;
    }

    this.gameField.innerHTML = "";

    for (let i = 1; i <= 16; i += 1) {
      const tile = document.createElement('div');
      tile.classList.add('tile');

      const left = (i - 1) % 4;
      const top = (i - 1 - left) / 4;
      tile.style.left = left  * this.tileWidth + "px";
      tile.style.top = top * this.tileWidth + "px";

      if (i === 16) {
        tile.classList.add('tile--empty');
        this.emptyTile = tile;
      } else {
        tile.innerHTML = i;
      }
      this.gameField.append(tile);
      this.tiles.push(tile);

      tile.addEventListener("click", () => {
        this.moveTile(i);
        this.moveSound.play();
      });
    }
  }

  moveTile(i) {
    const emptyLeft = this.emptyTile.style.left;
    const emptyTop = this.emptyTile.style.top;
    const tileLeft = this.tiles[i - 1].style.left;
    const tileTop = this.tiles[i - 1].style.top;

    const diffLeft = Math.abs(Number(emptyLeft.slice(0, -2)) - Number(tileLeft.slice(0, -2)));
    const diffTop = Math.abs(Number(emptyTop.slice(0, -2)) - Number(tileTop.slice(0, -2)));

    if (diffLeft + diffTop === this.tileWidth) {
      this.emptyTile.style.left = tileLeft;
      this.emptyTile.style.top = tileTop;
  
      this.tiles[i - 1].style.left = emptyLeft;
      this.tiles[i - 1].style.top = emptyTop;

      this.movesCount++;
      this.scoreMovesCount.innerHTML = this.movesCount;
    }
  }

  shufflePuzzle() {
    this.moveTile(15);
    this.moveTile(11);
    this.moveTile(7);
    for (let i = 0; i < 500; i++) {
      let index = Math.floor(Math.random() * 16 + 1);
      this.moveTile(index);
    }
    this.stopGame();
  }

  startTimer(gameTime, scoreTimer, seconds, minutes, hours) {
    seconds++;
    if(seconds === 60){
      seconds = 0;
      minutes++;
    }
    if(minutes === 60){
      minutes = 0;
      hours++;
    }
    var h, m, s;
    seconds < 10 ? s = '0' + seconds : s = seconds;
    minutes < 10 ? m = '0' + minutes : m = minutes;
    hours < 10 ? h = '0' + hours : h = hours;
    gameTime = [seconds, minutes, hours];
    scoreTimer.innerHTML =  h + ':' + m + ':' + s;
    return gameTime;
  }

  stopGame() {
    this.movesCount = 0;
    this.scoreMovesCount.innerHTML = this.movesCount;
    clearInterval(this.timer);
    this.scoreTimer.textContent = "00:00:00";
    this.isGameStarted = false;
    this.seconds = 0; 
    this.minutes = 0; 
    this.hours = 0;
  }

  setHandlers() {
    this.gameField.addEventListener('click', (event) => {
      if (event.target.classList.contains('tile')) {
        if (!this.isGameStarted) {
          this.isGameStarted = true;
          this.timer = setInterval(() => {
            this.gameTime = this.startTimer(this.gameTime, this.scoreTimer, this.seconds, this.minutes, this.hours);
            [this.seconds, this.minutes, this.hours] = [...this.gameTime];
          }, 1000);
        }

        let isWin = this.tiles.every((tile, i) => {
          if (i !== 15) {
            return Number(tile.innerHTML) - 1 === Number(tile.style.top.slice(0, -2)) / this.tileWidth * 4 + Number(tile.style.left.slice(0, -2)) / this.tileWidth;
          } else {
            return Number(tile.style.top.slice(0, -2)) / this.tileWidth * 4 + Number(tile.style.left.slice(0, -2)) / this.tileWidth === 15;
          }
          
        })

        if (isWin) {
          alert(`Hooray! You solved the puzzle in ${this.scoreTimer.innerHTML} and ${this.movesCount} moves!`);
          this.stopGame();
        }
      }
    })
  }
}

export default Puzzle;
