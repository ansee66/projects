class Menu {
  public drawBlock(): HTMLElement {
    const html = `
      <button class="button" id="nav-garage">Garage</button>
      <button class="button" id="nav-winners">Winners</button>
    `;
    const header = document.createElement('header');
    header.innerHTML = html;
    return header;
  }
}

export default Menu;
