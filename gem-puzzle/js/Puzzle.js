class Puzzle {
  constructor(gameField) {
    this.gameField = gameField;
    this.tiles = [];
    this.tileWidth = 150;
    this.emptyTile;
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
  }
}

export default Puzzle;
