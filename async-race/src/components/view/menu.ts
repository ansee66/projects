class Menu {
  public drawBlock(): HTMLElement {
    const html = `
      <button class="button button--nav" id="nav-garage">Garage</button>
      <button class="button button--nav" id="nav-winners">Winners</button>
    `;
    const header = document.createElement('header');
    header.innerHTML = html;
    return header;
  }
}

export default Menu;
