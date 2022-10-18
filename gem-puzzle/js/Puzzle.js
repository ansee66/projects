class Puzzle {
  constructor(gameField) {
    this.gameField = gameField;
  }

  renderPuzzle() {
    for (let i = 1; i < 16; i += 1) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.innerHTML = i;
      this.gameField.append(tile);
    }
  }
}

export default Puzzle;
