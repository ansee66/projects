class Menu {
  public drawBlock(): HTMLElement {
    const html = `
      <button class="button button--nav" data-nav="garage">Garage</button>
      <button class="button button--nav" data-nav="winners">Winners</button>
    `;
    const header = document.createElement('header');
    header.innerHTML = html;
    return header;
  }

  public addNavListener(garageCallback: () => void, winnersCallback: () => void) {
    const header = document.querySelector('header');
    header?.addEventListener("click", (e) => {
      if (e.target instanceof HTMLButtonElement) {
        if (e.target.dataset.nav === 'garage') {
          garageCallback();
        }
        if (e.target.dataset.nav === 'winners') {
          winnersCallback();
        }
      }
    })
  }
}

export default Menu;
