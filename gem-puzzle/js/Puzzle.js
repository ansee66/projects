class Puzzle {
  constructor(gameField, scoreTimer, scoreMovesCount, moveSound, settings) {
    this.gameField = gameField;
    this.scoreTimer = scoreTimer;
    this.scoreMovesCount = scoreMovesCount;
    this.movesCount = 0;
    this.tiles = [];
    this.rowTilesCount = 4;
    this.tileWidth = 100 / this.rowTilesCount;
    this.emptyTile;
    this.isGameStarted = false;
    this.timer;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.gameTime;
    this.moveSound = moveSound;
    this.settings = settings;
    this.isStorage = typeof localStorage !== "undefined";
    this.results = (this.isStorage && localStorage.getItem("results")) ? JSON.parse(localStorage.getItem("results")) : [];
  }

  renderPuzzle(rowTilesCount) {
    this.gameField.innerHTML = "";
    this.tiles = [];
    this.tileWidth = 100 / this.rowTilesCount;

    for (let i = 1; i <= rowTilesCount**2; i += 1) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.style.width = this.tileWidth + "%";
      tile.style.height = this.tileWidth + "%";

      const left = (i - 1) % rowTilesCount;
      const top = (i - 1 - left) / rowTilesCount;
      tile.style.left = left  * this.tileWidth + "%";
      tile.style.top = top * this.tileWidth + "%";

      if (i === rowTilesCount**2) {
        tile.classList.add('tile--empty');
        this.emptyTile = tile;
      } else {
        tile.innerHTML = i;
        tile.draggable = true;
      }
      this.gameField.append(tile);
      this.tiles.push(tile);

      tile.addEventListener("click", () => {
        this.moveTile(i);
        this.moveSound.play();
      });
    }
    this.addDropHandler();
  }

  addDragHandler() {
    this.gameField.addEventListener('dragstart', (event) => {
      event.target.classList.add('tile--draggable');
      this.startTimer();
    })
    this.gameField.addEventListener('dragend', (event) => {
      event.target.classList.remove('tile--draggable');
    });
  }

  addDropHandler() {
    this.emptyTile.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    this.emptyTile.addEventListener('dragenter', (event) => {
      event.preventDefault();
    });
    this.emptyTile.addEventListener('drop', () => {
      this.moveTile(Number(this.gameField.querySelector('.tile--draggable').textContent));
      this.moveSound.play();
      this.checkFinish();
    });
  }

  renderSettings() {
    for (let i = 3; i <= 8; i += 1) {
      const settingsButton = document.createElement('button');
      settingsButton.classList.add('button');
      settingsButton.textContent = i + ' x ' + i;
      this.settings.append(settingsButton);

      settingsButton.addEventListener("click", () => {
        this.rowTilesCount = i;
        this.renderPuzzle(this.rowTilesCount);
        this.shufflePuzzle(this.rowTilesCount);
      });
    }
  }

  moveTile(i) {
    const emptyLeft = this.emptyTile.style.left;
    const emptyTop = this.emptyTile.style.top;
    const tileLeft = this.tiles[i - 1].style.left;
    const tileTop = this.tiles[i - 1].style.top;

    const diffLeft = Math.round(Math.abs(Number(emptyLeft.slice(0, -1)) - Number(tileLeft.slice(0, -1))));
    const diffTop = Math.round(Math.abs(Number(emptyTop.slice(0, -1)) - Number(tileTop.slice(0, -1))));

    if (diffLeft + diffTop === Math.round(this.tileWidth)) {
      this.emptyTile.style.left = tileLeft;
      this.emptyTile.style.top = tileTop;
  
      this.tiles[i - 1].style.left = emptyLeft;
      this.tiles[i - 1].style.top = emptyTop;

      this.movesCount++;
      this.scoreMovesCount.innerHTML = this.movesCount;
    }
  }

  shufflePuzzle(rowTilesCount) {
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * rowTilesCount**2 + 1);
      this.moveTile(index);
    }
    this.stopGame();
  }

  createTimer(gameTime, scoreTimer, seconds, minutes, hours) {
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

  checkFinish() {
    let isWin = this.tiles.every((tile, i) => {
      if (i !== (this.rowTilesCount**2 - 1)) {
        return Math.round(Number(tile.innerHTML) - 1) === Math.round(Number(tile.style.top.slice(0, -1)) / this.tileWidth * this.rowTilesCount + Number(tile.style.left.slice(0, -1)) / this.tileWidth);
      } else {
        return Math.round(Number(tile.style.top.slice(0, -1)) / this.tileWidth * this.rowTilesCount + Number(tile.style.left.slice(0, -1)) / this.tileWidth) === this.rowTilesCount**2 - 1;
      }
    })

    if (isWin) {
      alert(`Hooray! You solved the puzzle in ${this.scoreTimer.innerHTML} and ${this.movesCount} moves!`);
      let result = {
        "mode": String(this.rowTilesCount + ' x ' + this.rowTilesCount), 
        "moves": String(this.movesCount), 
        "time": String(this.scoreTimer.innerHTML),
      }
      if (this.results.length >= 10) {
        this.results.pop();
      }
      this.results.unshift(result);
      localStorage.setItem("results", JSON.stringify(this.results));
      this.stopGame();
    }
  }

  startTimer() {
    if (!this.isGameStarted) {
      this.isGameStarted = true;
      this.timer = setInterval(() => {
        this.gameTime = this.createTimer(this.gameTime, this.scoreTimer, this.seconds, this.minutes, this.hours);
        [this.seconds, this.minutes, this.hours] = [...this.gameTime];
      }, 1000);
    }
  }

  addClickHandler() {
    this.gameField.addEventListener('click', (event) => {
      if (event.target.classList.contains('tile')) {
        this.startTimer();
        this.checkFinish();
      }
    })
  }

  fillResults() {
    if (this.isStorage && localStorage.getItem('results')) {
      let resultsArr = JSON.parse(localStorage.getItem('results'));
      let resultsTable = '';
      resultsArr.forEach((result, i) => {
        resultsTable += i + 1 + '. Mode: ' + result.mode + '. Moves: ' + result.moves + '. Time: ' + result.time + '\n';
      })
      alert(resultsTable)

    } else {
      alert('There are no winners yet')
    }
  }
}

export default Puzzle;
