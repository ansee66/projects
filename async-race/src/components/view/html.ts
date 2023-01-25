export const GarageHtml = `
  <div class="editor editor--create">
    <input class="input" type="text" placeholder="Car brand" name="create-car-brand" id="create-brand">
    <input class="input input--color" type="color" name="Car color" id="create-color">
    <button class="button" id="create-button">Create Car</button>
  </div>
  <div class="editor editor--update">
    <input class="input" type="text" placeholder="Car brand" name="update-car-brand" id="update-brand" disabled>
    <input class="input input--color" type="color" name="Car color" id="update-color" disabled>
    <button class="button" id="update-button" disabled>Update Car</button>
  </div>
  <div class="controls">
    <button class="button button--nav" id="race-button">Race</button>
    <button class="button button--nav" id="reset-button" disabled>Reset</button>
    <button class="button" id="generate-button">Generate Cars</button>
  </div>
  <h1 class="page-title">Garage (<span id="items-amount"></span>)</h1>
  <h2 class="page-subtitle">Page #<span id="current-page"></span></h2>
  <div class="car-list"></div>
  <div class="pagination">
    <button class="button button--nav button--prev">Prev</button>
    <button class="button button--nav button--next">Next</button>
  </div>
  <div class="finish-message"></div>
`;

export const WinnersHtml = `
  <h1 class="page-title">Winners (<span id="items-amount"></span>)</h1>
  <h2 class="page-subtitle">Page #<span id="current-page"></span></h2>
  <div class="winner-list"></div>
  <div class="pagination">
    <button class="button button--nav button--prev">Prev</button>
    <button class="button button--nav button--next">Next</button>
  </div>
`;
