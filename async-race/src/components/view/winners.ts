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
    Winners.view.drawList({ page: Winners.currentPage });
  }
}

export default Winners;
