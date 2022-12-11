import './pagination.css';

class Pagination {
  pagination: HTMLElement | null;
  currentCoordY: number;
  paginationButtons: Array<HTMLButtonElement>;
  shiftHeight: number;

  constructor() {
    this.pagination = document.querySelector('.pagination');
    this.currentCoordY = 0;
    this.shiftHeight = 136; // высота двух source__item (68px * 2)
    this.paginationButtons = [];
  }

  render() {
    for (let i = 0; i < 5; i++) {
      const paginationButton = document.createElement('button');
      paginationButton.classList.add('pagination__button');
      if (this.pagination instanceof HTMLElement) this.pagination.append(paginationButton);
      this.paginationButtons.push(paginationButton);
    }
    this.paginationButtons[0].innerHTML = '<<';
    this.paginationButtons[0].disabled = true;
    this.paginationButtons[1].innerHTML = '<<';
    this.paginationButtons[1].disabled = true;
    this.paginationButtons[2].innerHTML = '1';
    this.paginationButtons[3].innerHTML = '>';
    this.paginationButtons[4].innerHTML = '>>';
  }

  setCoordY(y: number, sourcesItems: HTMLElement[], lastPageShift: number) {
    if (y === 0) {
      this.paginationButtons[0].disabled = true;
      this.paginationButtons[1].disabled = true;
      this.paginationButtons[2].innerHTML = '1';
    } else {
      this.paginationButtons[0].disabled = false;
      this.paginationButtons[1].disabled = false;
    }

    if (y === -lastPageShift) {
      this.paginationButtons[3].disabled = true;
      this.paginationButtons[4].disabled = true;
    } else {
      this.paginationButtons[3].disabled = false;
      this.paginationButtons[4].disabled = false;
    }

    this.currentCoordY = y;
    for (let i = 0; i < sourcesItems.length; i++) {
      sourcesItems[i].style.transform = `translateY(${y}px)`;
    }
    return this.currentCoordY;
  }

  setHandlers(sources: HTMLElement) {
    const sourcesList = sources.querySelector('.sources__inner');
    if (sourcesList instanceof HTMLElement) {
      const sourcesArray = [...sourcesList.children];
      const sourcesItems: HTMLElement[] = [];
      sourcesArray.forEach((item) => {
        if (item instanceof HTMLElement) sourcesItems.push(item);
      });
      const sourcesHeight: number = sourcesList.clientHeight;
      const pagesCount: number = Math.ceil(sourcesHeight / this.shiftHeight);
      const lastPageShift: number = this.shiftHeight * (pagesCount - 1);
      this.paginationButtons[0].addEventListener('click', () => {
        this.setCoordY(0, sourcesItems, lastPageShift);
      });

      this.paginationButtons[3].addEventListener('click', () => {
        this.paginationButtons[2].innerHTML = (+this.paginationButtons[2].innerHTML + 1).toString();
        this.setCoordY(this.currentCoordY - this.shiftHeight, sourcesItems, lastPageShift);
      });

      this.paginationButtons[1].addEventListener('click', () => {
        this.paginationButtons[2].innerHTML = (+this.paginationButtons[2].innerHTML - 1).toString();
        this.setCoordY(this.currentCoordY + this.shiftHeight, sourcesItems, lastPageShift);
      });

      this.paginationButtons[4].addEventListener('click', () => {
        this.setCoordY(-lastPageShift, sourcesItems, lastPageShift);
        this.paginationButtons[2].innerHTML = pagesCount.toString();
      });
    }
  }
}

export default Pagination;
