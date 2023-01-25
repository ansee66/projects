import { ItemsResponse, CarParams } from '../../types/interfaces';

class ListView<T, P extends CarParams> {
  html: string;

  listTag: string;

  list: HTMLElement | null;

  getItems: (params: P) => Promise<ItemsResponse<T>>;

  drawItem: (item: T, index?: number) => HTMLElement;

  constructor(
    html: string,
    listTag: string,
    getItems: (params: P) => Promise<ItemsResponse<T>>,
    drawItem: (item: T, index?: number) => HTMLElement
  ) {
    this.html = html;
    this.listTag = listTag;
    this.list = null;
    this.getItems = getItems;
    this.drawItem = drawItem;
  }

  public render(): HTMLElement | null {
    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = this.html;

    this.list = document.querySelector(this.listTag);
    return this.list;
  }

  private fillItem(item: T, index?: number): void {
    const newItem: HTMLElement = this.drawItem(item, index);
    if (this.list instanceof Element) this.list.append(newItem);
  }

  private fillList(items: T[]): void {
    if (this.list) this.list.innerHTML = '';
    items.forEach((item, index) => {
      this.fillItem(item, index);
    });
  }

  public async drawList(params: P): Promise<T[]> {
    const response = await this.getItems(params);
    this.fillList(response.items);
    this.setPaginationBtnsState(Number(response.count), params.page);
    this.renderNumbers(Number(response.count), params.page);
    return [...response.items];
  }

  private setPaginationBtnsState(itemsAmount: number, page: number): void {
    const prevBtn = document.querySelector('.button--prev') as HTMLButtonElement;
    const nextBtn = document.querySelector('.button--next') as HTMLButtonElement;

    const lastPage = Math.ceil(itemsAmount / 7);
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === lastPage;
  }

  private renderNumbers(amount: number, page: number): void {
    const itemsAmount = document.querySelector('#items-amount') as HTMLElement;
    const pageNumber = document.querySelector('#current-page') as HTMLElement;
    itemsAmount.textContent = amount.toString();
    pageNumber.textContent = page.toString();
  }
}

export default ListView;
