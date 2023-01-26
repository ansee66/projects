import WinnerView from './winner';
import ListView from './listView';
import { WinnersHtml } from './html';
import Loader from '../controller/loader';
import { WinnerForRender, WinnerParams } from '../../types/interfaces';

class Winners {
  static winner: WinnerView = new WinnerView();

  static winnerList: Element | null = null;

  static currentPage = 1;

  static pageLimit = 10;

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
}

export default Winners;
