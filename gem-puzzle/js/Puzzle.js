class Puzzle {
  constructor(gameField, scoreTimer, scoreMovesCount) {
    this.gameField = gameField;
    this.scoreTimer = scoreTimer;
    this.scoreMovesCount = scoreMovesCount;
    this.movesCount = 0;
    this.tiles = [];
    this.tileWidth = 150;
    this.emptyTile;
    this.isGameStarted = false;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.gameTime;
  }

  renderPuzzle() {
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
    }
  }

  shufflePuzzle() {
    this.moveTile(15);
    this.moveTile(11);
    this.moveTile(7);
    for (let i = 0; i < 1000; i++) {
      let index = Math.floor(Math.random() * 16 + 1);
      this.moveTile(index);
    }
    this.movesCount = 0;
    this.scoreMovesCount.innerHTML = this.movesCount;
    this.stopTimer();
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
    if(seconds < 10)
      s = '0' + seconds;
    else s = seconds;
    if(minutes < 10)
      m = '0' + minutes;
    else m = minutes;
    if(hours < 10)
      h = '0' + hours;
    else h = hours;
    gameTime = [seconds, minutes, hours];
    scoreTimer.innerHTML =  h + ':' + m + ':' + s;
    return gameTime;
  }

  stopTimer() {
    clearInterval(this.startTimer);
    this.scoreTimer.textContent = "00:00:00";
    this.isGameStarted = false;
    this.seconds = 0; 
    this.minutes = 0; 
    this.hours = 0;
  }

  setHandlers() {
    this.gameField.addEventListener('click', (event) => {
      if (event.target.classList.contains('tile')) {
        this.movesCount++;
        this.scoreMovesCount.innerHTML = this.movesCount;
        if (!this.isGameStarted) {
          this.isGameStarted = true;
          setInterval(() => {
            this.gameTime = this.startTimer(this.gameTime, this.scoreTimer, this.seconds, this.minutes, this.hours);
            [this.seconds, this.minutes, this.hours] = [...this.gameTime];
          }, 1000);
        }
      }
    })

  }
}

export default Puzzle;
