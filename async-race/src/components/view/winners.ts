import WinnerView from './winner';
import ListView from './listView';
import { WinnersHtml } from './html';
import Loader from '../controller/loader';
import { WinnerForRender, WinnerParams, SortType, OrderType } from '../../types/interfaces';

class Winners {
  static winner: WinnerView = new WinnerView();

  static winnerList: Element | null = null;

  static currentPage: number = Winners.loadState();

  static pageLimit = 10;

  static order: OrderType = 'ASC';

  static view: ListView<WinnerForRender, WinnerParams> = new ListView(
    WinnersHtml,
    '.winner-list',
    Loader.getWinnersForRender,
    Winners.winner.drawWinner
  );

  public static render(): void {
    Winners.winnerList = Winners.view.render();
    Winners.view.drawList({ page: Winners.currentPage, limit: Winners.pageLimit });

    Winners.addPaginationListener();
    Winners.addSortListener();
  }

  private static addPaginationListener(): void {
    const pagination: Element | null = document.querySelector('.pagination');

    pagination?.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement) {
        if (e.target.classList.contains('button--prev')) Winners.currentPage -= 1;
        if (e.target.classList.contains('button--next')) Winners.currentPage += 1;
        Winners.saveState();
        Winners.view.drawList({ page: Winners.currentPage, limit: Winners.pageLimit });
      }
    });
  }

  private static saveState(): void {
    localStorage.setItem('winnersPage', JSON.stringify(Winners.currentPage));
  }

  private static loadState(): number {
    let page = Number(localStorage.getItem('winnersPage'));
    if (page === 0) page = 1;
    return page;
  }

  private static addSortListener(): void {
    const sortElements = [...document.querySelectorAll('.winners-sort')] as HTMLElement[];
    sortElements.forEach((element) => {
      element.addEventListener('click', () => {
        sortElements.forEach((item) => {
          item.classList.remove('winners-sort--desc', 'winners-sort--asc');
        });
        if (this.order === 'ASC') {
          this.order = 'DESC';
          element.classList.add('winners-sort--desc');
        } else {
          this.order = 'ASC';
          element.classList.add('winners-sort--asc');
        }
        Winners.view.drawList({
          page: Winners.currentPage,
          limit: Winners.pageLimit,
          sort: element.dataset.sort as SortType,
          order: Winners.order,
        });
      });
    });
  }
}

export default Winners;
