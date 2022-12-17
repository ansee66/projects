import './pagination.css';
import { IPagination } from '../../../types/index';

class Pagination implements IPagination {
  pagination: HTMLElement | null;
  currentCoordY: number;
  paginationButtons: Array<HTMLButtonElement>;
  shiftHeight: number;
  lastPageShift: number;
  pagesCount: number;

  constructor() {
    this.pagination = document.querySelector('.pagination');
    this.currentCoordY = 0;
    this.shiftHeight = 136; // высота двух source__item (68px * 2)
    this.paginationButtons = [];
    this.lastPageShift = 0;
    this.pagesCount = 0;
  }

  handlePaginationBtns(context: this, btnsNumber: number[], flag: boolean): void {
    btnsNumber.forEach((btn) => (context.paginationButtons[`${btn}`].disabled = flag));
  }

  render() {
    for (let i = 0; i < 5; i++) {
      const paginationButton = document.createElement('button');
      paginationButton.classList.add('pagination__button');
      if (this.pagination instanceof HTMLElement) this.pagination.append(paginationButton);
      this.paginationButtons.push(paginationButton);
    }
    this.handlePaginationBtns(this, [0, 1], true);
    this.paginationButtons[0].innerHTML = '<<';
    this.paginationButtons[1].innerHTML = '<<';
    this.paginationButtons[2].innerHTML = '1';
    this.paginationButtons[3].innerHTML = '>';
    this.paginationButtons[4].innerHTML = '>>';
  }

  setCoordY(y: number, sourcesItems: HTMLElement[], lastPageShift: number) {
    if (y === 0) {
      this.handlePaginationBtns(this, [0, 1], true);
      this.paginationButtons[2].innerHTML = '1';
    } else {
      this.handlePaginationBtns(this, [0, 1], false);
    }

    if (y === -lastPageShift) {
      this.handlePaginationBtns(this, [3, 4], true);
    } else {
      this.handlePaginationBtns(this, [3, 4], false);
    }

    this.currentCoordY = y;
    for (let i = 0; i < sourcesItems.length; i++) {
      sourcesItems[i].style.transform = `translateY(${y}px)`;
    }
    return this.currentCoordY;
  }

  calculateParameters(sources: HTMLElement) {
    const sourcesList = sources.querySelector('.sources__inner') as HTMLElement;
    const sourcesItems = [...sourcesList.children] as HTMLElement[];
    const sourcesHeight: number = sourcesList.clientHeight;
    this.pagesCount = Math.ceil(sourcesHeight / this.shiftHeight);
    this.lastPageShift = this.shiftHeight * (this.pagesCount - 1);
    return sourcesItems;
  }

  setHandlers(sources: HTMLElement) {
    const sourcesItems = this.calculateParameters(sources);

    this.paginationButtons[0].addEventListener('click', () => {
      this.setCoordY(0, sourcesItems, this.lastPageShift);
    });

    this.paginationButtons[3].addEventListener('click', () => {
      this.paginationButtons[2].innerHTML = (+this.paginationButtons[2].innerHTML + 1).toString();
      this.setCoordY(this.currentCoordY - this.shiftHeight, sourcesItems, this.lastPageShift);
    });

    this.paginationButtons[1].addEventListener('click', () => {
      this.paginationButtons[2].innerHTML = (+this.paginationButtons[2].innerHTML - 1).toString();
      this.setCoordY(this.currentCoordY + this.shiftHeight, sourcesItems, this.lastPageShift);
    });

    this.paginationButtons[4].addEventListener('click', () => {
      this.setCoordY(-this.lastPageShift, sourcesItems, this.lastPageShift);
      this.paginationButtons[2].innerHTML = this.pagesCount.toString();
    });
  }
}

export default Pagination;
